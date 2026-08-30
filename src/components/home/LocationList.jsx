import LocationMiniCard from "./LocationMiniCard";

const LocationList = ({
    locations,
    userLocation,
    calculateDistance,
    onLocationSelect,
}) => {
    if (locations.length === 0) {
        return (
            <div className="flex min-h-40 items-center justify-center rounded-2xl border border-dashed border-white/10 text-sm text-neutral-500">
                No locations found.
            </div>
        );
    }

    return (
        <div className="theme-scrollbar h-full overflow-y-auto pr-1">
            <div className="space-y-3 pb-1">
                {locations.map((place) => {
                    const [lng, lat] = place.coords.coordinates;

                    const distance = calculateDistance(
                        userLocation,
                        {
                            lat,
                            lng,
                        }
                    );

                    return (
                        <LocationMiniCard
                            key={place._id}
                            place={place}
                            distance={distance}
                            onClick={onLocationSelect}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default LocationList;

