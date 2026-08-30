import { useEffect } from "react";
import { useMap } from "react-leaflet";

const MapController = ({ selectedLocation }) => {
    const map = useMap();

    useEffect(() => {
        if (!selectedLocation) {
            return;
        }

        const [lng, lat] = selectedLocation.coords.coordinates;

        map.flyTo(
            [lat, lng],
            Math.max(map.getZoom(), 15),
            {
                duration: 0.8,
            }
        );
    }, [selectedLocation, map]);

    return null;
};

export default MapController;
