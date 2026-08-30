import { Circle, CircleMarker } from "react-leaflet";

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
            {/* Accuracy area */}
            <Circle
                center={position}
                radius={20}
                pathOptions={{
                    color: "#3b82f6",
                    fillColor: "#3b82f6",
                    fillOpacity: 0.12,
                    weight: 1,
                }}
            />

            {/* Location blip */}
            <CircleMarker
                center={position}
                radius={7}
                pathOptions={{
                    color: "#ffffff",
                    fillColor: "#3b82f6",
                    fillOpacity: 1,
                    weight: 3,
                }}
            />
        </>
    );
};

export default UserLocationMarker;
