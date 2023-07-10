import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./src/ui/theme/default";

import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <SafeAreaProvider>
        <SafeAreaView>
          <Text>Hello World</Text>
          <StatusBar style="light" translucent backgroundColor="transparent" />
        </SafeAreaView>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
