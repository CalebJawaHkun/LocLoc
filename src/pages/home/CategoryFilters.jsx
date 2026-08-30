import { getCategoryColor } from "../../config/categories";

const CategoryFilters = ({
    categories,
    activeCategory,
    onCategoryChange,
}) => {
    return (
        <div className="flex gap-2 overflow-x-auto pb-1">
            {categories.map((category) => {
                const isActive = category === activeCategory;

                const color =
                    category === "All"
                        ? "#ffffff"
                        : getCategoryColor(category);

                return (
                    <button
                        key={category}
                        type="button"
                        onClick={() => onCategoryChange(category)}
                        className={`shrink-0 rounded-full border px-4 py-2 text-xs font-medium transition ${
                            isActive
                                ? "border-white/20 bg-white text-neutral-950"
                                : "border-white/10 bg-neutral-950/60 text-neutral-400 hover:bg-neutral-800 hover:text-white"
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
