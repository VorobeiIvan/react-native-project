// cSpell:ignore Roboto
import { useFonts } from "expo-font";

const useRobotoFonts = () => {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
  });

  return fontsLoaded;
};

export default useRobotoFonts;
