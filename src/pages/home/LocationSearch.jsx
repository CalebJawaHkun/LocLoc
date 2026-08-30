import { Search } from "lucide-react";

const LocationSearch = ({ value, onChange }) => {
    return (
        <div className="relative">
            <Search
                size={18}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500"
            />

            <input
                type="text"
                value={value}
                onChange={(event) => onChange(event.target.value)}
                placeholder="Search locations..."
                className="w-full rounded-xl border border-white/10 bg-neutral-950/70 py-3 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-neutral-600 focus:border-white/20 focus:bg-neutral-950"
            />
        </div>
    );
};

export default LocationSearch;
