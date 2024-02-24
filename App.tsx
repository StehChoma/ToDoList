import { StatusBar } from 'react-native';
import { Home } from './src/screens/Home';
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter"
import { Colors } from 'react-native/Libraries/NewAppScreen';


export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  })
  if(!fontsLoaded){
    return
  }


  return (
    <>
      <StatusBar
        barStyle='light-content'
        backgroundColor={Colors.gray700}
        translucent
      />
      <Home />
    </>
  );
}


