import { MapPin, X } from "lucide-react";

import { getCategoryColor } from "../../config/categories";

const LocationDetailCard = ({
    place,
    onClose,
}) => {
    if (!place) {
        return null;
    }

    const categoryColor = getCategoryColor(place.category);

    const [lng, lat] = place.coords.coordinates;

    return (
        <div className="absolute bottom-5 left-5 right-5 z-[1000] overflow-hidden rounded-2xl border border-white/10 bg-neutral-950/95 shadow-2xl backdrop-blur-md sm:left-auto sm:w-[380px]">

            {/* Image */}
            <div className="relative h-48 w-full bg-neutral-800">
                {place.imageUrl ? (
                    <img
                        src={place.imageUrl}
                        alt={place.name?.en || "Location"}
                        className="h-full w-full object-cover"
                    />
                ) : (
                    <div className="flex h-full items-center justify-center text-sm text-neutral-500">
                        No image available
                    </div>
                )}

                {/* Close */}
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute right-3 top-3 rounded-full border border-white/10 bg-black/60 p-2 text-white backdrop-blur-md transition hover:bg-black/80"
                    aria-label="Close location details"
                >
                    <X size={18} />
                </button>

                {/* Category */}
                <div className="absolute bottom-3 left-3">
                    <span
                        className="rounded-full px-3 py-1 text-xs font-semibold text-white shadow-lg"
                        style={{
                            backgroundColor: categoryColor,
                        }}
                    >
                        {place.category}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="space-y-4 p-5">

                {/* Name */}
                <div>
                    <h2 className="text-xl font-semibold text-white">
                        {place.name?.en || "Unnamed location"}
                    </h2>
                </div>

                {/* Description */}
                <p className="text-sm leading-6 text-neutral-400">
                    {place.desc?.en || "No description available."}
                </p>

                {/* Address */}
                <div className="flex gap-3">
                    <MapPin
                        size={18}
                        className="mt-0.5 shrink-0 text-neutral-500"
                    />

                    <p className="text-sm leading-5 text-neutral-400">
                        {place.address?.en || "Address unavailable"}
                    </p>
                </div>

                {/* Coordinates */}
                <div className="border-t border-white/10 pt-3">
                    <p className="text-[11px] font-medium uppercase tracking-wider text-neutral-600">
                        Coordinates
                    </p>

                    <p className="mt-1 font-mono text-xs text-neutral-500">
                        {lat.toFixed(6)}, {lng.toFixed(6)}
                    </p>
                </div>

            </div>
        </div>
    );
};

export default LocationDetailCard;
