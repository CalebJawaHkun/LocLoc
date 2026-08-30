import { CATEGORY_CONFIG } from "../../config/categories";

const MapLegend = () => {
    return (
        <div className="absolute bottom-5 left-5 z-[1000] rounded-xl border border-white/10 bg-neutral-950/90 p-4 shadow-xl backdrop-blur-md">
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-400">
                Categories
            </h3>

            <div className="space-y-2">
                {Object.entries(CATEGORY_CONFIG)
                    .filter(([category]) => category !== "Other")
                    .map(([category, config]) => (
                        <div
                            key={category}
                            className="flex items-center gap-2 text-sm text-white"
                        >
                            <span
                                className="h-3 w-3 rounded-full border border-white"
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
