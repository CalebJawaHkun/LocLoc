import { Search, X } from "lucide-react";

const LocationSearch = ({ value, onChange }) => {
    return (
        <div className="relative w-full">
            <Search
                size={15}
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-stone-400"
            />

            <input
                type="text"
                value={value}
                onChange={(event) => onChange(event.target.value)}
                placeholder="Search locations..."
                className="w-full rounded-xl border border-stone-200/90 bg-white/90 py-2 pl-9 pr-8 text-xs text-stone-800 shadow-xs outline-none transition placeholder:text-stone-400 focus:border-[#b56d48] focus:bg-white focus:ring-2 focus:ring-[#b56d48]/20"
            />

            {value && (
                <button
                    type="button"
                    onClick={() => onChange("")}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 cursor-pointer text-stone-400 hover:text-stone-700"
                    aria-label="Clear search"
                >
                    <X size={13} />
                </button>
            )}
        </div>
    );
};

export default LocationSearch;
