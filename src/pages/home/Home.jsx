import { useEffect, useState } from "react";

import LocationMap from "./LocationMap";
import MapLegend from "./MapLegend";
import LocationExplorer from "./LocationExplorer";
import LocationDetailCard from "./LocationDetailCard";


import { getPlaces } from "../../api/loclocApi";

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
        <main className="min-h-screen bg-neutral-950 text-white">
            <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[7fr_3fr]">

                {/* Map */}
                <section className="relative h-[60vh] lg:h-screen">
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

                    {selectedLocation && (
                        <LocationDetailCard
                            place={selectedLocation}
                            onClose={() => setSelectedLocation(null)}
                        />
                    )}
                </section>

                {/* Explorer */}
                <aside className="min-h-0 border-l border-neutral-800 bg-neutral-900">
                    {loading && (
                        <div className="p-5 text-sm text-neutral-500">
                            Loading locations...
                        </div>
                    )}

                    {error && (
                        <div className="p-5 text-sm text-red-400">
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

            </div>
        </main>
    );
};

export default Home;
