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
            <div className="shrink-0 space-y-4 border-b border-stone-200 bg-[#f8f3ed]/80 p-4 sm:p-5">
                <div className="flex items-start justify-between gap-3">
                    <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#b56d48]">
                            Discover
                        </p>
                        <h1 className="mt-2 text-2xl font-semibold tracking-[-0.06em] text-stone-900">
                            Explore
                        </h1>
                    </div>

                    <span className="rounded-full bg-[#f0e0d0] px-2.5 py-1 text-xs font-semibold text-[#8a4f35]">
                        {filteredLocations.length}
                    </span>
                </div>

                <LocationSearch
                    value={searchQuery}
                    onChange={setSearchQuery}
                />

                <CategoryFilters
                    categories={categories}
                    activeCategory={activeCategory}
                    onCategoryChange={setActiveCategory}
                />
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto p-4 sm:p-5">
                <LocationList
                    locations={filteredLocations}
                    userLocation={userLocation}
                    calculateDistance={calculateDistance}
                    onLocationSelect={onLocationSelect}
                />
            </div>
        </div>
    );
};

export default LocationExplorer;
