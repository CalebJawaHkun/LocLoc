import { NavLink } from "react-router";

const Header = () => {
    return (
        <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-[#f6f0e7]/80 backdrop-blur-xl">
            <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-4 sm:px-6 lg:px-8">
                <NavLink
                    to="/"
                    className="flex items-center gap-3"
                >
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#b86f4d] text-sm font-bold text-white shadow-[0_10px_18px_-12px_rgba(184,111,77,0.9)]">
                        L
                    </div>
                    <div className="flex flex-col leading-none">
                        <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#b86f4d]">
                            Locloc
                        </span>
                        <span className="my-0 text-lg font-semibold tracking-[-0.06em] text-stone-900">
                            Cartography
                        </span>
                    </div>
                </NavLink>

                <nav className="flex items-center gap-2 rounded-full border border-stone-200 bg-white/50 p-1.5 shadow-sm">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `rounded-full px-4 py-2 text-sm font-medium transition ${
                                isActive
                                    ? "bg-stone-900 text-white shadow-sm"
                                    : "text-stone-600 hover:bg-stone-100 hover:text-stone-900"
                            }`
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `rounded-full px-4 py-2 text-sm font-medium transition ${
                                isActive
                                    ? "bg-stone-900 text-white shadow-sm"
                                    : "text-stone-600 hover:bg-stone-100 hover:text-stone-900"
                            }`
                        }
                    >
                        About Us
                    </NavLink>
                </nav>
            </div>
        </header>
    );
};

export default Header;

