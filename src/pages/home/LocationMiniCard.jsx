import { MapPin } from "lucide-react";

import { getCategoryColor } from "../../config/categories";
import { formatDistance } from "../../utils/distance";

const LocationMiniCard = ({ place, distance, onClick }) => {
    const categoryColor = getCategoryColor(place.category);

    return (
        <button
            type="button"
            onClick={() => onClick(place)}
            className="group w-full rounded-2xl border border-white/10 bg-neutral-950/60 p-3 text-left transition hover:border-white/20 hover:bg-neutral-800/80"
        >
            <div className="flex gap-3">

                {/* Image */}
                <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-neutral-800">
                    {place.imageUrl ? (
                        <img
                            src={place.imageUrl}
                            alt={place.name?.en || "Location"}
                            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                        />
                    ) : (
                        <div className="flex h-full w-full items-center justify-center text-xs text-neutral-500">
                            No image
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">

                    {/* Category */}
                    <div className="mb-1 flex items-center gap-2">
                        <span
                            className="h-2 w-2 rounded-full"
                            style={{
                                backgroundColor: categoryColor,
                            }}
                        />

                        <span
                            className="text-xs font-medium"
                            style={{
                                color: categoryColor,
                            }}
                        >
                            {place.category}
                        </span>
                    </div>

                    {/* Name */}
                    <h3 className="truncate text-sm font-semibold text-white">
                        {place.name?.en || "Unnamed location"}
                    </h3>

                    {/* Distance */}
                    <div className="mt-1 flex items-center gap-1 text-xs text-neutral-400">
                        <MapPin size={13} />
                        <span>{formatDistance(distance)}</span>
                    </div>

                    {/* Address */}
                    <p className="mt-1 truncate text-xs text-neutral-500">
                        {place.address?.en || "Address unavailable"}
                    </p>

                </div>
            </div>
        </button>
    );
};

export default LocationMiniCard;

