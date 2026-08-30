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

            {/* Explorer Header */}
            <div className="shrink-0 space-y-4 border-b border-white/10 p-5">
                <div>
                    <h1 className="text-xl font-semibold text-white">
                        Explore
                    </h1>

                    <p className="mt-1 text-xs text-neutral-500">
                        Discover places around you.
                    </p>
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

                <p className="text-xs text-neutral-500">
                    {filteredLocations.length}{" "}
                    {filteredLocations.length === 1
                        ? "location"
                        : "locations"}
                </p>
            </div>

            {/* Location List */}
            <div className="min-h-0 flex-1 overflow-y-auto p-5">
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
