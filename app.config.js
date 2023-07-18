import "dotenv/config";

export default {
  expo: {
    name: "Manejo de irrigação",
    slug: "manejo-app",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#00344A",
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#00344A",
      },
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {
      eas: {
        projectId: "36bbef1f-779d-411c-b658-86544c82db78"
      }
    },
    runtimeVersion: {
      policy: "sdkVersion",
    },
    updates: {
      url: "https://u.expo.dev/36bbef1f-779d-411c-b658-86544c82db78",
    },
  },
};
