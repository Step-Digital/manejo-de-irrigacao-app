import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "styled-components";
import { SafeAreaView } from 'react-native'

import { defaultTheme } from "./src/ui/theme/default";
import { StatusBar } from "expo-status-bar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MakeHome } from "./src/core/main/factories/pages/home/home.factory";
import { LoginScreen } from "./src/ui/pages/login";
import { NavigationContainer } from "@react-navigation/native";
import { GlobalRoutes } from "./src/ui/routes";
import { BottomSheetProvider } from "./src/ui/components/bottomsheet/bottomsheet.contex";
import { BottomSheet } from "./src/ui/components/bottomsheet";
import { useFonts } from 'expo-font';

const queryClient = new QueryClient();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Poppins-regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-bold': require('./assets/fonts/Poppins-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <ThemeProvider theme={defaultTheme}>
      <NavigationContainer>
        <QueryClientProvider client={queryClient}>
          <SafeAreaProvider>
            <SafeAreaView
              style={{
                flex: 1,
              }}
            >
              <BottomSheetProvider>
                <GlobalRoutes />
              </BottomSheetProvider>
            </SafeAreaView>
          </SafeAreaProvider>
          <StatusBar style="dark" translucent backgroundColor="transparent" />
        </QueryClientProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
}
