import {
    MapContainer,
    TileLayer,
    useMapEvents,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

import GPSControl from "./GPSControl";
import UserLocationMarker from "./UserLocationMarker";
import LocationMarkers from "./LocationMarkers";
import MapController from "./MapController";

const TrackCenterListener = ({
    isCenteredOnUser,
    setIsCenteredOnUser,
}) => {
    useMapEvents({
        dragstart() {
            if (isCenteredOnUser) {
                setIsCenteredOnUser(false);
            }
        },

        zoomstart() {
            if (isCenteredOnUser) {
                setIsCenteredOnUser(false);
            }
        },
    });

    return null;
};

const LocationMap = ({
    locations,
    userLocation,
    setUserLocation,
    isCenteredOnUser,
    setIsCenteredOnUser,
    onLocationSelect,
    selectedLocation,
}) => {
    const initialPosition = [16.8409, 96.1735];

    return (
        <MapContainer
            center={initialPosition}
            zoom={13}
            scrollWheelZoom={true}
            className="h-full w-full"
        >
            <MapController
                selectedLocation={selectedLocation}
            />

            <TrackCenterListener
                isCenteredOnUser={isCenteredOnUser}
                setIsCenteredOnUser={setIsCenteredOnUser}
            />

            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <LocationMarkers
                locations={locations}
                onLocationSelect={onLocationSelect}
            />

            <UserLocationMarker
                userLocation={userLocation}
            />

            <GPSControl
                userLocation={userLocation}
                setUserLocation={setUserLocation}
                isCenteredOnUser={isCenteredOnUser}
                setIsCenteredOnUser={setIsCenteredOnUser}
            />
        </MapContainer>
    );
};

export default LocationMap;

