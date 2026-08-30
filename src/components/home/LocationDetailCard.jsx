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
        <div className="fixed bottom-5 left-5 right-5 z-[1000] overflow-hidden rounded-[28px] border border-stone-200/80 bg-[linear-gradient(180deg,_rgba(255,255,255,0.92),_rgba(247,241,235,0.98))] shadow-[0_30px_70px_-34px_rgba(42,28,20,0.75)] backdrop-blur-md sm:left-auto sm:w-[380px]">

            {/* Image */}
            <div className="relative h-48 w-full bg-stone-200">
                {place.imageUrl ? (
                    <img
                        src={place.imageUrl}
                        alt={place.name?.en || "Location"}
                        className="h-full w-full object-cover"
                    />
                ) : (
                    <div className="flex h-full items-center justify-center text-sm text-stone-500">
                        No image available
                    </div>
                )}

                {/* Close */}
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute right-3 top-3 rounded-full border border-stone-200/80 bg-white/85 p-2 text-stone-700 shadow-sm backdrop-blur-md transition hover:bg-white"
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
                    <h2 className="text-xl font-semibold tracking-[-0.04em] text-stone-900">
                        {place.name?.en || "Unnamed location"}
                    </h2>
                </div>

                {/* Description */}
                <p className="text-sm leading-6 text-stone-600">
                    {place.desc?.en || "No description available."}
                </p>

                {/* Address */}
                <div className="flex gap-3">
                    <MapPin
                        size={18}
                        className="mt-0.5 shrink-0 text-[#b86f4d]"
                    />

                    <p className="text-sm leading-5 text-stone-600">
                        {place.address?.en || "Address unavailable"}
                    </p>
                </div>

                {/* Coordinates */}
                <div className="border-t border-stone-200 pt-3">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500">
                        Coordinates
                    </p>

                    <p className="mt-2 rounded-full bg-stone-100 px-2.5 py-1.5 font-mono text-xs text-stone-700">
                        {lat.toFixed(6)}, {lng.toFixed(6)}
                    </p>
                </div>

            </div>
        </div>
    );
};

export default LocationDetailCard;
