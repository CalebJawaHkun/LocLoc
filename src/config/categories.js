export const CATEGORY_CONFIG = {
    Historic: {
        color: "#e07a3f",
    },

    Cultural: {
        color: "#9b59b6",
    },

    Religious: {
        color: "#3498db",
    },

    Nature: {
        color: "#4caf50",
    },

    Architectural: {
        color: "#e6a23c",
    },

    Other: {
        color: "#95a5a6",
    },
};

export const getCategoryColor = (category) => {
    return CATEGORY_CONFIG[category]?.color ?? CATEGORY_CONFIG.Other.color;
};
