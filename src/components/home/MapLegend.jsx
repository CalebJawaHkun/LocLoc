import { CATEGORY_CONFIG } from "../../config/categories";

const MapLegend = () => {
    return (
        <div className="absolute bottom-5 left-5 z-[1000] rounded-2xl border border-stone-200/80 bg-[rgba(255,251,246,0.88)] p-4 shadow-[0_20px_40px_-22px_rgba(48,32,16,0.75)] backdrop-blur-sm">
            <h3 className="mb-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-500">
                Categories
            </h3>

            <div className="space-y-2.5">
                {Object.entries(CATEGORY_CONFIG)
                    .filter(([category]) => category !== "Other")
                    .map(([category, config]) => (
                        <div
                            key={category}
                            className="flex items-center gap-2 text-sm text-stone-700"
                        >
                            <span
                                className="h-3 w-3 rounded-full border border-white shadow-sm"
                                style={{
                                    backgroundColor: config.color,
                                }}
                            />

                            <span>{category}</span>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default MapLegend;
