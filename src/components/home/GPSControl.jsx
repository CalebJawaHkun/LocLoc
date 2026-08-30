import { useState } from "react";
import { useMap } from "react-leaflet";

const GPSControl = ({
    userLocation,
    setUserLocation,
    isCenteredOnUser,
    setIsCenteredOnUser,
}) => {
    const map = useMap();

    const [locating, setLocating] = useState(false);
    const [error, setError] = useState(null);

    const handleLocate = () => {
        if (!navigator.geolocation) {
            setError("Geolocation is not supported by this browser.");
            return;
        }

        setError(null);
        setLocating(true);

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;

                const location = {
                    lat: latitude,
                    lng: longitude,
                };

                setUserLocation(location);

                map.flyTo(
                    [latitude, longitude],
                    Math.max(map.getZoom(), 15),
                    {
                        duration: 1.2,
                    }
                );

                setIsCenteredOnUser(true);
                setLocating(false);
            },
            (err) => {
                console.error("Geolocation error:", err);

                setError("Unable to get your location.");
                setLocating(false);
            },
            {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 0,
            }
        );
    };

    return (
        <div className="absolute right-5 top-5 z-[1000]">
            <button
                type="button"
                onClick={handleLocate}
                disabled={locating || isCenteredOnUser}
                className="cursor-pointer rounded-4xl border border-white/10 bg-neutral-950/90 px-4 py-3 text-sm font-medium text-white shadow-xl backdrop-blur-md transition hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-70"
            >
                {locating
                    ? "Locating..."
                    : isCenteredOnUser
                        ? "✓ Tracking"
                        : "⌖ Locate Me"}
            </button>

            {error && (
                <p className="mt-2 max-w-48 rounded-lg bg-red-950/90 p-2 text-xs text-red-300">
                    {error}
                </p>
            )}
        </div>
    );
};

export default GPSControl;
