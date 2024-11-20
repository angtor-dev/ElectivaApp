import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './src/navigation/Navigate';
import { Provider } from "react-redux"
import store from "./src/context/store"

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <Navigation/>
      </Provider>
      <StatusBar
        backgroundColor='#6733E2'
        style="light"
      />
    </SafeAreaProvider>
  );
}
