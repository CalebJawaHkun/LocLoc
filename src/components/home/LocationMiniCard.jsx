import { MapPin } from "lucide-react";

import { getCategoryColor } from "../../config/categories";
import { formatDistance } from "../../utils/distance";

const LocationMiniCard = ({ place, distance, onClick }) => {
    const categoryColor = getCategoryColor(place.category);

    return (
        <button
            type="button"
            onClick={() => onClick(place)}
            className="group w-full rounded-[22px] border border-stone-200 bg-white/80 p-3 text-left shadow-[0_12px_20px_-18px_rgba(60,44,29,0.5)] transition hover:border-[#d8c1a8] hover:bg-white hover:shadow-[0_16px_28px_-18px_rgba(60,44,29,0.6)]"
        >
            <div className="flex gap-3">
                <div className="h-20 w-20 shrink-0 overflow-hidden rounded-[18px] bg-stone-200">
                    {place.imageUrl ? (
                        <img
                            src={place.imageUrl}
                            alt={place.name?.en || "Location"}
                            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                        />
                    ) : (
                        <div className="flex h-full w-full items-center justify-center text-[10px] uppercase tracking-[0.18em] text-stone-500">
                            Image
                        </div>
                    )}
                </div>

                <div className="min-w-0 flex-1">
                    <div className="mb-1 flex items-center gap-2">
                        <span
                            className="h-2.5 w-2.5 rounded-full"
                            style={{
                                backgroundColor: categoryColor,
                            }}
                        />

                        <span
                            className="text-[11px] font-semibold uppercase tracking-[0.14em]"
                            style={{
                                color: categoryColor,
                            }}
                        >
                            {place.category}
                        </span>
                    </div>

                    <h3 className="truncate text-sm font-semibold text-stone-900">
                        {place.name?.en || "Unnamed location"}
                    </h3>

                    <div className="mt-1.5 flex items-center gap-1 text-xs text-stone-600">
                        <MapPin size={13} className="text-[#b86f4d]" />
                        <span>{formatDistance(distance)}</span>
                    </div>

                    <p className="mt-1.5 truncate text-xs text-stone-500">
                        {place.address?.en || "Address unavailable"}
                    </p>
                </div>
            </div>
        </button>
    );
};

export default LocationMiniCard;

