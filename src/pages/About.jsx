const About = () => {
    return (
        <main className="min-h-screen bg-neutral-950 text-white">
            <div className="mx-auto max-w-4xl px-5 py-16 lg:px-8">

                {/* Hero */}
                <section>
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
                        About LOCLOC
                    </p>

                    <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                        Explore places.
                        <br />
                        Discover your surroundings.
                    </h1>

                    <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-400">
                        LOCLOC is a location discovery platform designed
                        to make exploring places around you simple,
                        visual, and intuitive.
                    </p>
                </section>

                {/* About Project */}
                <section className="mt-20">
                    <h2 className="text-2xl font-semibold">
                        About the Project
                    </h2>

                    <div className="mt-6 space-y-4 text-sm leading-7 text-neutral-400">
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
                <section className="mt-20">
                    <h2 className="text-2xl font-semibold">
                        Credits
                    </h2>

                    <div className="mt-6 grid gap-4 sm:grid-cols-3">

                        <div className="rounded-2xl border border-white/10 bg-neutral-900 p-5">
                            <p className="text-xs uppercase tracking-wider text-neutral-600">
                                Project Design
                            </p>

                            <p className="mt-3 font-medium text-white">
                                Caleb
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-neutral-900 p-5">
                            <p className="text-xs uppercase tracking-wider text-neutral-600">
                                Developer
                            </p>

                            <p className="mt-3 font-medium text-white">
                                Caleb
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-neutral-900 p-5">
                            <p className="text-xs uppercase tracking-wider text-neutral-600">
                                Data Collector
                            </p>

                            <p className="mt-3 font-medium text-white">
                                Caleb
                            </p>
                        </div>

                    </div>
                </section>

            </div>
        </main>
    );
};

export default About;

