import { StatusBar } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { Home } from './src/screens/Home';

export default function App() {
  return (
    <PaperProvider>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Home />
    </PaperProvider>
  );
}
