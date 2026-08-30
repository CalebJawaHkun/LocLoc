const About = () => {
    return (
        <main className="mx-auto min-h-screen text-stone-900">
            <div className="max-w-5xl px-5 py-16 lg:px-8">

                {/* Hero */}
                <section className="rounded-[32px] border border-stone-200/80 bg-white/75 p-8 shadow-[0_30px_70px_-36px_rgba(70,48,34,0.52)] ring-1 ring-white/70 backdrop-blur-sm sm:p-10">
                    <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#b86f4d]">
                        About LOCLOC
                    </p>

                    <h1 className="mt-3 text-4xl font-bold tracking-[-0.06em] sm:text-5xl">
                        Explore places.
                        <br />
                        Discover your surroundings.
                    </h1>

                    <p className="mt-2 max-w-2xl text-base leading-7 text-stone-600">
                        LOCLOC is a location discovery platform designed
                        to make exploring places around you simple,
                        visual, and intuitive.
                    </p>
                </section>

                {/* About Project */}
                <section className="mt-4 rounded-[30px] border border-stone-200/80 bg-[linear-gradient(180deg,_rgba(255,255,255,0.78),_rgba(248,242,236,0.96))] p-8 shadow-[0_22px_60px_-34px_rgba(66,47,31,0.45)] sm:p-10">
                    <h2 className="text-2xl font-semibold tracking-[-0.04em] text-stone-900">
                        About the Project
                    </h2>

                    <div className="mt-4 space-y-4 text-sm leading-7 text-stone-600">
                        <p>
                            LOCLOC combines OpenStreetMap, Leaflet,
                            and curated location data to create an
                            interactive way to discover places.
                        </p>

                        <p>
                            Instead of simply displaying a list of
                            locations, LOCLOC connects the map and
                            location information together so that
                            exploring a place and understanding where
                            it is become part of the same experience.
                        </p>

                        <p>
                            The project is built around a simple idea:
                            make discovering places feel natural.
                        </p>
                    </div>
                </section>

                {/* Credits */}
                <section className="mt-8">
                    <h2 className="text-2xl font-semibold tracking-[-0.04em] text-stone-900">
                        Credits
                    </h2>

                    <div className="mt-2 grid gap-4 sm:grid-cols-3">

                        <div className="rounded-[22px] border border-stone-200 bg-white/80 p-5 shadow-[0_18px_34px_-26px_rgba(48,32,20,0.7)]">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-500">
                                Project Design
                            </p>

                            <p className="mt-3 text-lg font-semibold text-stone-900">
                                Caleb Jawa Hkun
                            </p>
                        </div>

                        <div className="rounded-[22px] border border-stone-200 bg-white/80 p-5 shadow-[0_18px_34px_-26px_rgba(48,32,20,0.7)]">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-500">
                                Developer
                            </p>

                            <p className="mt-3 text-lg font-semibold text-stone-900">
                                Caleb Jawa Hkun
                            </p>
                        </div>

                        <div className="rounded-[22px] border border-stone-200 bg-white/80 p-5 shadow-[0_18px_34px_-26px_rgba(48,32,20,0.7)]">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-500">
                                Data Collector
                            </p>

                            <p className="mt-3 text-lg font-semibold text-stone-900">
                                Caleb Jawa Hkun
                            </p>
                        </div>

                    </div>
                </section>

            </div>
        </main>
    );
};

export default About;

