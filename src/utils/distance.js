const toRadians = (degrees) => {
    return degrees * (Math.PI / 180);
};

export const calculateDistance = (from, to) => {
    if (!from || !to) {
        return null;
    }

    const earthRadius = 6371000;

    const lat1 = toRadians(from.lat);
    const lat2 = toRadians(to.lat);

    const deltaLat = toRadians(to.lat - from.lat);
    const deltaLng = toRadians(to.lng - from.lng);

    const a =
        Math.sin(deltaLat / 2) ** 2 +
        Math.cos(lat1) *
            Math.cos(lat2) *
            Math.sin(deltaLng / 2) ** 2;

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return earthRadius * c;
};

export const formatDistance = (meters) => {
    if (meters === null || meters === undefined) {
        return "—";
    }

    if (meters < 1000) {
        return `${Math.round(meters)} m`;
    }

    return `${(meters / 1000).toFixed(1)} km`;
};

