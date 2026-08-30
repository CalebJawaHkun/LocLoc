import { Search } from "lucide-react";

const LocationSearch = ({ value, onChange }) => {
    return (
        <div className="relative">
            <Search
                size={18}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-stone-500"
            />

            <input
                type="text"
                value={value}
                onChange={(event) => onChange(event.target.value)}
                placeholder="Search locations..."
                className="w-full rounded-2xl border border-stone-200 bg-white/80 py-3 pl-11 pr-4 text-sm text-stone-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] outline-none transition placeholder:text-stone-500 focus:border-[#d29c78] focus:ring-4 focus:ring-[#f0d8c3]"
            />
        </div>
    );
};

export default LocationSearch;
