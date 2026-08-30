const CategoryFilters = ({
    categories,
    activeCategory,
    onCategoryChange,
}) => {
    return (
        <div className="flex gap-2 overflow-x-auto pb-1">
            {categories.map((category) => {
                const isActive = category === activeCategory;

                return (
                    <button
                        key={category}
                        type="button"
                        onClick={() => onCategoryChange(category)}
                        className={`shrink-0 rounded-full border px-3.5 py-2 text-xs font-medium transition ${
                            isActive
                                ? "border-stone-900 bg-stone-900 text-white shadow-sm"
                                : "border-stone-200 bg-[#f5f0e8] text-stone-700 hover:border-stone-300 hover:bg-white hover:text-stone-900"
                        }`}
                    >
                        {category}
                    </button>
                );
            })}
        </div>
    );
};

export default CategoryFilters;
