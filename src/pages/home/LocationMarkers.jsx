import { Marker, useMap } from "react-leaflet";

import L from "leaflet";

import { getCategoryColor } from "../../config/categories";

const createCategoryIcon = (category) => {
    const color = getCategoryColor(category);

    return L.divIcon({
        className: "",
        html: `
            <div
                style="
                    width: 18px;
                    height: 18px;
                    background: ${color};
                    border: 3px solid white;
                    border-radius: 50%;
                    box-shadow: 0 2px 6px rgba(0,0,0,0.35);
                "
            ></div>
        `,
        iconSize: [18, 18],
        iconAnchor: [9, 9],
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

