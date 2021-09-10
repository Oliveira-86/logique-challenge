import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/routes/Navigation';

import {
  useFonts,
  OpenSans_400Regular,
  OpenSans_700Bold
} from '@expo-google-fonts/open-sans';
import AppLoading from 'expo-app-loading';

export default function App() {
  let [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />
  };

  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}


