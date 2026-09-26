import { useState } from "react";
import { MapPin, X } from "lucide-react";

import { getCategoryColor } from "../../config/categories";

const LocationDetailCard = ({
    place,
    onClose,
    isClosing = false,
}) => {
    const [localClosing, setLocalClosing] = useState(false);

    if (!place) {
        return null;
    }

    const categoryColor = getCategoryColor(place.category);
    const [lng, lat] = place.coords.coordinates;

    const shouldAnimateClose = isClosing || localClosing;

    const handleClose = () => {
        if (localClosing || isClosing) return;
        setLocalClosing(true);
        setTimeout(() => {
            onClose();
        }, 280);
    };

    return (
        <div
            className={`fixed bottom-0 inset-x-0 z-[1000] overflow-hidden rounded-t-[28px] rounded-b-none border-t border-stone-200/90 border-x-0 border-b-0 bg-[linear-gradient(180deg,_rgba(255,255,255,0.97),_rgba(247,241,235,0.98))] shadow-[0_-20px_50px_-15px_rgba(42,28,20,0.4)] backdrop-blur-md sm:inset-x-auto sm:bottom-0 sm:right-6 sm:w-[400px] sm:rounded-t-[28px] sm:rounded-b-none sm:border-x sm:border-t sm:border-b-0 ${
                shouldAnimateClose
                    ? "animate-drawer-slide-down"
                    : "animate-drawer-slide-up"
            }`}
            role="dialog"
            aria-modal="true"
            aria-label={place.name?.en || "Location details"}
        >
            {/* Mobile Drawer Grab Handle */}
            <div className="flex justify-center pt-2.5 pb-1 sm:hidden">
                <div className="h-1.25 w-12 rounded-full bg-stone-300" />
            </div>

            <div className="theme-scrollbar max-h-[82vh] overflow-y-auto sm:max-h-[85vh]">
                {/* Framed Image Container with margin and matching rounded corners */}
                <div className="px-3.5 pt-2 sm:px-4 sm:pt-3">
                    <div className="relative h-56 w-full overflow-hidden rounded-[20px] bg-stone-200 shadow-inner sm:h-60">
                        {place.imageUrl ? (
                            <img
                                src={place.imageUrl}
                                alt={place.name?.en || "Location"}
                                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                            />
                        ) : (
                            <div className="flex h-full items-center justify-center text-sm text-stone-500">
                                No image available
                            </div>
                        )}

                        {/* Close Button */}
                        <button
                            type="button"
                            onClick={handleClose}
                            className="absolute right-3 top-3 cursor-pointer rounded-full border border-stone-200/80 bg-white/90 p-2 text-stone-700 shadow-md backdrop-blur-md transition hover:bg-white active:scale-95"
                            aria-label="Close location details"
                        >
                            <X size={18} />
                        </button>

                        {/* Category Badge */}
                        <div className="absolute bottom-3 left-3">
                            <span
                                className="rounded-full px-3 py-1 text-xs font-semibold text-white shadow-lg ring-1 ring-white/30"
                                style={{
                                    backgroundColor: categoryColor,
                                }}
                            >
                                {place.category}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Content Details */}
                <div className="space-y-4 px-4 pb-5 pt-3 sm:px-5 sm:pb-6">
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
                    <div className="flex items-start gap-3">
                        <MapPin
                            size={18}
                            className="mt-0.5 shrink-0 text-[#b86f4d]"
                        />

                        <p className="text-sm leading-5 text-stone-600">
                            {place.address?.en || "Address unavailable"}
                        </p>
                    </div>

                    {/* Coordinates */}
                    <div className="border-t border-stone-200/80 pt-3.5">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500">
                            Coordinates
                        </p>

                        <p className="mt-2 inline-block rounded-full bg-stone-100/90 px-3 py-1.5 font-mono text-xs text-stone-700">
                            {lat.toFixed(6)}, {lng.toFixed(6)}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LocationDetailCard;
