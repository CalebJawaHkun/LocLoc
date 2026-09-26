import { useEffect, useRef, useState } from "react";
import { Check, ChevronUp, Layers } from "lucide-react";

import { getCategoryColor } from "../../config/categories";

const CategoryFilters = ({
    categories = [],
    categoryCounts = {},
    activeCategory = "All",
    onCategoryChange,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
            document.addEventListener("touchstart", handleClickOutside);
            document.addEventListener("keydown", handleKeyDown);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("touchstart", handleClickOutside);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen]);

    const handleSelectCategory = (category) => {
        onCategoryChange(category);
        setIsOpen(false);
    };

    const activeColor =
        activeCategory === "All"
            ? "#b56d48"
            : getCategoryColor(activeCategory);

    const activeCount =
        categoryCounts[activeCategory] ??
        (activeCategory === "All" ? categoryCounts.All : 0);

    return (
        <div className="relative w-full" ref={dropdownRef}>
            {/* Dropdown Trigger Button */}
            <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                aria-haspopup="listbox"
                aria-expanded={isOpen}
                className={`group flex w-full cursor-pointer items-center justify-between gap-2.5 rounded-xl border bg-white/90 px-3 py-2 text-left text-xs font-medium text-stone-800 shadow-xs backdrop-blur-sm transition-all duration-150 hover:border-stone-300 hover:bg-white hover:shadow ${
                    isOpen
                        ? "border-[#b56d48]/50 ring-2 ring-[#b56d48]/20"
                        : "border-stone-200/90"
                }`}
            >
                <div className="flex min-w-0 items-center gap-2">
                    {activeCategory === "All" ? (
                        <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#f0e0d0] text-[#8a4f35]">
                            <Layers size={10} />
                        </span>
                    ) : (
                        <span
                            className="h-2.5 w-2.5 shrink-0 rounded-full shadow-xs ring-2 ring-white"
                            style={{ backgroundColor: activeColor }}
                        />
                    )}

                    <span className="truncate font-semibold text-stone-800">
                        {activeCategory === "All"
                            ? "All Categories"
                            : activeCategory}
                    </span>
                </div>

                <div className="flex shrink-0 items-center gap-1.5">
                    {activeCount !== undefined && (
                        <span className="rounded-full bg-stone-100 px-2 py-0.5 text-[11px] font-semibold text-stone-600">
                            {activeCount}
                        </span>
                    )}

                    <ChevronUp
                        size={14}
                        className={`text-stone-400 transition-transform duration-200 group-hover:text-stone-700 ${
                            isOpen ? "rotate-180 text-stone-700" : ""
                        }`}
                    />
                </div>
            </button>

            {/* Dropdown Menu Panel (Opens upward) */}
            {isOpen && (
                <div
                    role="listbox"
                    aria-label="Filter locations by category"
                    className="theme-scrollbar absolute bottom-full left-0 right-0 z-50 mb-1.5 max-h-56 overflow-y-auto rounded-2xl border border-stone-200/90 bg-white/95 p-1.5 shadow-[0_-12px_32px_-10px_rgba(42,28,20,0.25)] backdrop-blur-md"
                >
                    <div className="space-y-0.5">
                        {categories.map((category) => {
                            const isSelected = category === activeCategory;
                            const color =
                                category === "All"
                                    ? "#b56d48"
                                    : getCategoryColor(category);
                            const count = categoryCounts[category] ?? 0;

                            return (
                                <button
                                    key={category}
                                    type="button"
                                    role="option"
                                    aria-selected={isSelected}
                                    onClick={() => handleSelectCategory(category)}
                                    className={`group flex w-full cursor-pointer items-center justify-between rounded-xl px-3 py-1.5 text-left text-xs font-medium transition-colors ${
                                        isSelected
                                            ? "bg-[#f5efe7] text-stone-900 font-semibold shadow-xs"
                                            : "text-stone-700 hover:bg-[#faf6f0] hover:text-stone-900"
                                    }`}
                                >
                                    <div className="flex min-w-0 items-center gap-2">
                                        {category === "All" ? (
                                            <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#f0e0d0] text-[#8a4f35]">
                                                <Layers size={10} />
                                            </span>
                                        ) : (
                                            <span
                                                className="h-2.5 w-2.5 shrink-0 rounded-full ring-2 ring-white shadow-xs"
                                                style={{ backgroundColor: color }}
                                            />
                                        )}

                                        <span className="truncate">
                                            {category === "All"
                                                ? "All Categories"
                                                : category}
                                        </span>
                                    </div>

                                    <div className="flex shrink-0 items-center gap-2">
                                        <span
                                            className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                                                isSelected
                                                    ? "bg-[#ecdccf] text-[#8a4f35]"
                                                    : "bg-stone-100 text-stone-500 group-hover:bg-stone-200/80"
                                            }`}
                                        >
                                            {count}
                                        </span>

                                        {isSelected && (
                                            <Check
                                                size={13}
                                                className="text-[#b56d48]"
                                            />
                                        )}
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};

export default CategoryFilters;
