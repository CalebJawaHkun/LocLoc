import { useEffect, useState } from "react";

import LocationMap from "../components/home/LocationMap";
import MapLegend from "../components/home/MapLegend";
import LocationExplorer from "../components/home/LocationExplorer";
import LocationDetailCard from "../components/home/LocationDetailCard";

import { getPlaces } from "../api/loclocApi";

const Home = () => {
    const [locations, setLocations] = useState([]);
    const [userLocation, setUserLocation] = useState(null);
    const [isCenteredOnUser, setIsCenteredOnUser] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState(null);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadLocations = async () => {
            try {
                const response = await getPlaces();

                if (!response.success) {
                    throw new Error("Failed to load locations.");
                }

                setLocations(response.data);
            } catch (err) {
                console.error("Failed to load locations:", err);
                setError("Unable to load locations.");
            } finally {
                setLoading(false);
            }
        };

        loadLocations();
    }, []);

    const handleLocationSelect = (place) => {
        setSelectedLocation(place);
    };

    return (
        <main className="w-full">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-[7fr_3fr] lg:h-[calc(100vh-10rem)]">
                <section className="relative h-[58vh] min-h-[360px] overflow-hidden rounded-[30px] border border-stone-200/80 bg-white/70 shadow-[0_28px_70px_-34px_rgba(42,28,20,0.72)] ring-1 ring-white/70 backdrop-blur-sm lg:h-full">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(250,214,166,0.25),_transparent_38%)]" />

                    <div className="relative h-full">
                        <LocationMap
                            locations={locations}
                            userLocation={userLocation}
                            setUserLocation={setUserLocation}
                            isCenteredOnUser={isCenteredOnUser}
                            setIsCenteredOnUser={setIsCenteredOnUser}
                            onLocationSelect={handleLocationSelect}
                            selectedLocation={selectedLocation}
                        />

                        <MapLegend />

                    </div>
                </section>

                <aside className="h-[52vh] min-h-[280px] min-h-0 overflow-hidden rounded-[30px] border border-stone-200/80 bg-[linear-gradient(180deg,_rgba(255,255,255,0.78),_rgba(245,239,232,0.96))] shadow-[0_28px_70px_-34px_rgba(42,28,20,0.7)] ring-1 ring-white/70 backdrop-blur-sm lg:h-full">
                    {loading && (
                        <div className="p-5 text-sm text-stone-600">
                            Loading locations...
                        </div>
                    )}

                    {error && (
                        <div className="p-5 text-sm text-red-600">
                            {error}
                        </div>
                    )}

                    {!loading && !error && (
                        <LocationExplorer
                            locations={locations}
                            userLocation={userLocation}
                            onLocationSelect={handleLocationSelect}
                        />
                    )}
                </aside>

                {selectedLocation && (
                    <LocationDetailCard
                        place={selectedLocation}
                            onClose={() => setSelectedLocation(null)}
                        />
                    )}
            </div>
        </main>
    );
};

export default Home;
