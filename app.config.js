// app.config.js

const images = {
    SPLASH: "./assets/images/splash.png",
    ICON: "./assets/images/icon.png",
    FAVICON: "./assets/images/favicon.png",
    ADAPTIVE_ICON: "./assets/images/adaptive-icon.png",
};

const colors = {
    WHITE: "#FFFFFF", 
};

export default {
    expo: {
        name: "react-native-project",
        slug: "react-native-project",
        version: "1.0.0",
        orientation: "portrait",
        icon: images.ICON, 
        userInterfaceStyle: "light",
        splash: {
            image: images.SPLASH, 
            resizeMode: "contain",
            backgroundColor: colors.WHITE, 
        },
        ios: {
            supportsTablet: true,
        },
        android: {
            adaptiveIcon: {
                foregroundImage: images.ADAPTIVE_ICON,
                backgroundColor: colors.WHITE, 
            },
        },
        web: {
            favicon: images.FAVICON,
        },
    },
};
