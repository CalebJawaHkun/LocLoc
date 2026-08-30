import { Marker, useMap } from "react-leaflet";

import L from "leaflet";

import { getCategoryColor } from "../../config/categories";

const createCategoryIcon = (category) => {
    const color = getCategoryColor(category);

    return L.divIcon({
        className: "",
        html: `
            <div style="
                position: relative;
                width: 24px;
                height: 24px;
                transform: translateY(-2px);
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

                return (
                    <Marker
                        key={place._id}
                        position={[lat, lng]}
                        icon={createCategoryIcon(place.category)}
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

