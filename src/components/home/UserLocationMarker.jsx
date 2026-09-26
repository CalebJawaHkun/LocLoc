import { Marker, Circle } from "react-leaflet";
import L from "leaflet";

const createUserLocationIcon = () => {
    return L.divIcon({
        className: "user-location-marker-container",
        html: `
            <div style="position: relative; width: 44px; height: 44px; display: flex; align-items: center; justify-content: center;">
                <!-- Animated concentric radar beacon waves -->
                <div style="
                    position: absolute;
                    width: 42px;
                    height: 42px;
                    border-radius: 50%;
                    background: #2563eb;
                    animation: user-radar-pulse 2s cubic-bezier(0.1, 0.7, 0.1, 1) infinite;
                    pointer-events: none;
                "></div>
                <div style="
                    position: absolute;
                    width: 42px;
                    height: 42px;
                    border-radius: 50%;
                    background: #2563eb;
                    animation: user-radar-pulse 2s cubic-bezier(0.1, 0.7, 0.1, 1) infinite;
                    animation-delay: 0.65s;
                    pointer-events: none;
                "></div>

                <!-- Soft glowing center halo -->
                <div style="
                    position: absolute;
                    width: 24px;
                    height: 24px;
                    border-radius: 50%;
                    background: #3b82f6;
                    opacity: 0.45;
                    filter: blur(2px);
                    pointer-events: none;
                "></div>

                <!-- Core location pinpoint with crisp white border -->
                <div style="
                    position: relative;
                    width: 16px;
                    height: 16px;
                    border-radius: 50%;
                    background: #1d4ed8;
                    border: 3px solid #ffffff;
                    box-shadow: 0 0 12px rgba(37, 99, 235, 0.7), 0 3px 8px rgba(0,0,0,0.3);
                    z-index: 2;
                "></div>
            </div>
        `,
        iconSize: [44, 44],
        iconAnchor: [22, 22],
    });
};

const userIcon = createUserLocationIcon();

const UserLocationMarker = ({ userLocation }) => {
    if (!userLocation) {
        return null;
    }

    const position = [
        userLocation.lat,
        userLocation.lng,
    ];

    return (
        <>
            {/* Accuracy area circle */}
            <Circle
                center={position}
                radius={24}
                pathOptions={{
                    color: "#3b82f6",
                    fillColor: "#3b82f6",
                    fillOpacity: 0.12,
                    weight: 1.5,
                }}
            />

            {/* Pulsing GPS Radar Location Blip Marker */}
            <Marker
                position={position}
                icon={userIcon}
                zIndexOffset={999}
            />
        </>
    );
};

export default UserLocationMarker;
