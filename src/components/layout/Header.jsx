import { NavLink, useLocation } from "react-router";

const Header = () => {
    const location = useLocation();
    const isAbout = location.pathname.startsWith("/about");

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

                {/* Navigation with Animated Sliding Background Pill */}
                <nav className="relative flex w-48 sm:w-56 items-center rounded-full border border-stone-200/90 bg-stone-200/60 p-1 shadow-inner backdrop-blur-md">
                    <div
                        className="pointer-events-none absolute bottom-1 left-1 top-1 w-[calc(50%-4px)] rounded-full bg-stone-900 shadow-sm transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
                        style={{
                            transform: isAbout ? "translateX(100%)" : "translateX(0%)",
                        }}
                    />

                    <NavLink
                        to="/"
                        className={`relative z-10 flex-1 cursor-pointer rounded-full py-1.5 sm:py-2 text-center text-xs sm:text-sm font-semibold tracking-wide transition-colors duration-200 ${
                            !isAbout
                                ? "text-white"
                                : "text-stone-600 hover:text-stone-900"
                        }`}
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/about"
                        className={`relative z-10 flex-1 cursor-pointer rounded-full py-1.5 sm:py-2 text-center text-xs sm:text-sm font-semibold tracking-wide transition-colors duration-200 ${
                            isAbout
                                ? "text-white"
                                : "text-stone-600 hover:text-stone-900"
                        }`}
                    >
                        About Us
                    </NavLink>
                </nav>
            </div>
        </header>
    );
};

export default Header;
