import { useState } from "react";
import { ChevronDown, Layers } from "lucide-react";

import { CATEGORY_CONFIG } from "../../config/categories";

const MapLegend = () => {
    const [isOpen, setIsOpen] = useState(false);

    const categories = Object.entries(CATEGORY_CONFIG).filter(
        ([category]) => category !== "Other"
    );

    return (
        <div className="absolute bottom-5 left-5 z-[1000]">
            <div className="overflow-hidden rounded-2xl border border-stone-200/90 bg-[rgba(255,251,246,0.92)] shadow-[0_18px_36px_-18px_rgba(48,32,16,0.7)] backdrop-blur-md transition-all duration-200">
                {/* Header / Toggle Button */}
                <button
                    type="button"
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="flex cursor-pointer items-center justify-between gap-3 px-3.5 py-2.5 text-left transition-colors hover:bg-white/60"
                    aria-expanded={isOpen}
                    aria-label="Toggle categories legend"
                >
                    <div className="flex items-center gap-2">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#f0e0d0] text-[#8a4f35]">
                            <Layers size={12} />
                        </span>

                        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-700">
                            Categories
                        </span>
                    </div>

                    <ChevronDown
                        size={15}
                        className={`text-stone-500 transition-transform duration-200 ${
                            isOpen ? "rotate-180 text-stone-800" : ""
                        }`}
                    />
                </button>

                {/* Collapsible Category List */}
                {isOpen && (
                    <div className="border-t border-stone-200/70 p-3.5 pt-2.5">
                        <div className="space-y-2">
                            {categories.map(([category, config]) => (
                                <div
                                    key={category}
                                    className="flex items-center gap-2.5 text-xs font-medium text-stone-700"
                                >
                                    <span
                                        className="h-2.5 w-2.5 shrink-0 rounded-full shadow-xs ring-2 ring-white"
                                        style={{
                                            backgroundColor: config.color,
                                        }}
                                    />

                                    <span>{category}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MapLegend;
