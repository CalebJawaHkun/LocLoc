import { Marker, useMap } from "react-leaflet";
import L from "leaflet";

import { getCategoryColor } from "../../config/categories";

const createCategoryIcon = (category, isSelected = false) => {
    const color = getCategoryColor(category);

    if (isSelected) {
        return L.divIcon({
            className: "poi-marker-container",
            html: `
                <div style="position: relative; width: 48px; height: 48px;">
                    <!-- Concentric animated radar beacon rings -->
                    <div style="
                        position: absolute;
                        top: 20px;
                        left: 24px;
                        width: 44px;
                        height: 44px;
                        margin-top: -22px;
                        margin-left: -22px;
                        border-radius: 50%;
                        background: ${color};
                        animation: poi-radar-pulse 2s cubic-bezier(0.1, 0.7, 0.1, 1) infinite;
                        pointer-events: none;
                    "></div>
                    <div style="
                        position: absolute;
                        top: 20px;
                        left: 24px;
                        width: 44px;
                        height: 44px;
                        margin-top: -22px;
                        margin-left: -22px;
                        border-radius: 50%;
                        background: ${color};
                        animation: poi-radar-pulse 2s cubic-bezier(0.1, 0.7, 0.1, 1) infinite;
                        animation-delay: 0.65s;
                        pointer-events: none;
                    "></div>

                    <!-- Soft glowing halo -->
                    <div style="
                        position: absolute;
                        top: 20px;
                        left: 24px;
                        width: 30px;
                        height: 30px;
                        margin-top: -15px;
                        margin-left: -15px;
                        border-radius: 50%;
                        background: ${color};
                        opacity: 0.45;
                        filter: blur(3px);
                        pointer-events: none;
                    "></div>

                    <!-- Highlighted Pin with subtle bounce -->
                    <div style="
                        position: absolute;
                        top: 6px;
                        left: 10px;
                        width: 28px;
                        height: 28px;
                        animation: poi-pin-bounce 2s ease-in-out infinite;
                        filter: drop-shadow(0 8px 16px rgba(42, 28, 20, 0.5));
                    ">
                        <div style="
                            position: absolute;
                            inset: 0;
                            background: ${color};
                            border: 3.5px solid #ffffff;
                            border-radius: 999px 999px 999px 0;
                            transform: rotate(-45deg);
                            box-shadow: 0 0 14px ${color}99;
                        "></div>
                        <div style="
                            position: absolute;
                            width: 12px;
                            height: 12px;
                            top: 8px;
                            left: 8px;
                            background: #ffffff;
                            border-radius: 50%;
                            box-shadow: inset 0 0 0 2.5px ${color};
                        "></div>
                    </div>
                </div>
            `,
            iconSize: [48, 48],
            iconAnchor: [24, 34],
            popupAnchor: [0, -34],
        });
    }

    return L.divIcon({
        className: "poi-marker-container",
        html: `
            <div style="
                position: relative;
                width: 24px;
                height: 24px;
                transform: translateY(-2px);
                transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
            ">
                <div style="
                    position: absolute;
                    inset: 0;
                    background: ${color};
                    border: 3px solid rgba(255,255,255,0.98);
                    border-radius: 999px 999px 999px 0;
                    transform: rotate(-45deg);
                    box-shadow: 0 8px 18px rgba(42, 28, 20, 0.28);
                "></div>
                <div style="
                    position: absolute;
                    width: 10px;
                    height: 10px;
                    top: 7px;
                    left: 7px;
                    background: rgba(255,255,255,0.98);
                    border-radius: 50%;
                    box-shadow: inset 0 0 0 2px ${color};
                "></div>
            </div>
        `,
        iconSize: [24, 24],
        iconAnchor: [12, 24],
        popupAnchor: [0, -18],
    });
};

const LocationMarkers = ({
    locations,
    selectedLocation,
    onLocationSelect,
}) => {
    const map = useMap();

    const handleMarkerClick = (place) => {
        const [lng, lat] = place.coords.coordinates;

        map.flyTo(
            [lat, lng],
            Math.max(map.getZoom(), 15),
            {
                duration: 0.8,
            }
        );

        onLocationSelect(place);
    };

    return (
        <>
            {locations.map((place) => {
                const [lng, lat] = place.coords.coordinates;
                const isSelected = selectedLocation?._id === place._id;

                return (
                    <Marker
                        key={place._id}
                        position={[lat, lng]}
                        icon={createCategoryIcon(place.category, isSelected)}
                        zIndexOffset={isSelected ? 1000 : 0}
                        eventHandlers={{
                            click: () => handleMarkerClick(place),
                        }}
                    />
                );
            })}
        </>
    );
};

export default LocationMarkers;
