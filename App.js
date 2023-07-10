import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './src/ui/theme/default';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <SafeAreaProvider>
        <SafeAreaView>
          <Text>Hello World</Text>
          <StatusBar
            barStyle="light-content"
            translucent
            backgroundColor="transparent"
          />
        </SafeAreaView>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
