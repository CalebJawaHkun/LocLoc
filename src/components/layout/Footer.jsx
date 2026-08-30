const Footer = () => {
    return (
        <footer className="border-t border-stone-200/80 bg-[#f5efe8]/80 backdrop-blur-sm">
            <div className="mx-auto flex max-w-[1600px] flex-col gap-2 px-4 py-5 text-xs text-stone-600 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
                <p className="font-medium tracking-[0.18em] uppercase text-stone-500">
                    © {new Date().getFullYear()} LOCLOC
                </p>

                <p className="text-sm text-stone-600">
                    Explore. Discover. Connect.
                </p>
            </div>
        </footer>
    );
};

export default Footer;

