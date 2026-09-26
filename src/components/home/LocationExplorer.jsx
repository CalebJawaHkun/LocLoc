import { useMemo, useState } from "react";

import { calculateDistance } from "../../utils/distance";

import CategoryFilters from "./CategoryFilters";
import LocationList from "./LocationList";
import LocationSearch from "./LocationSearch";

const LocationExplorer = ({
    locations,
    userLocation,
    onLocationSelect,
}) => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const categories = useMemo(() => {
        const uniqueCategories = [
            ...new Set(
                locations
                    .map((place) => place.category)
                    .filter(Boolean)
            ),
        ];

        return ["All", ...uniqueCategories];
    }, [locations]);

    const categoryCounts = useMemo(() => {
        const counts = { All: locations.length };
        locations.forEach((place) => {
            if (place.category) {
                counts[place.category] = (counts[place.category] || 0) + 1;
            }
        });
        return counts;
    }, [locations]);

    const filteredLocations = useMemo(() => {
        const query = searchQuery.trim().toLowerCase();

        return locations.filter((place) => {
            const matchesCategory =
                activeCategory === "All" ||
                place.category === activeCategory;

            const name = place.name?.en?.toLowerCase() || "";

            const matchesSearch =
                query === "" || name.includes(query);

            return matchesCategory && matchesSearch;
        });
    }, [
        locations,
        activeCategory,
        searchQuery,
    ]);

    return (
        <div className="flex h-full flex-col">
            {/* Top Section: Location Mini Cards as Main Attraction */}
            <div className="flex min-h-0 flex-1 flex-col overflow-hidden p-3.5 sm:p-4">
                <div className="mb-2.5 flex items-center justify-between px-1">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-500">
                        Places
                    </span>
                    <span className="rounded-full bg-[#f0e0d0] px-2 py-0.5 text-[11px] font-semibold text-[#8a4f35]">
                        {filteredLocations.length}
                    </span>
                </div>

                <div className="min-h-0 flex-1 overflow-hidden">
                    <LocationList
                        locations={filteredLocations}
                        userLocation={userLocation}
                        calculateDistance={calculateDistance}
                        onLocationSelect={onLocationSelect}
                    />
                </div>
            </div>

            {/* Bottom Section: Minimalistic Search & Category Dropdown */}
            <div className="shrink-0 space-y-2 border-t border-stone-200/80 bg-[#f8f3ed]/90 p-3 sm:p-3.5 backdrop-blur-md">
                <LocationSearch
                    value={searchQuery}
                    onChange={setSearchQuery}
                />

                <CategoryFilters
                    categories={categories}
                    categoryCounts={categoryCounts}
                    activeCategory={activeCategory}
                    onCategoryChange={setActiveCategory}
                />
            </div>
        </div>
    );
};

export default LocationExplorer;
