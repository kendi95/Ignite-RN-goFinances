import React from 'react';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import { 
  useFonts, 
  Poppins_700Bold, 
  Poppins_500Medium,
  Poppins_400Regular,
} from '@expo-google-fonts/poppins';

import { theme } from './global/styles/theme';

import { Routes } from './routes';

export default function App() {

  const [loadingFonts] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if (!loadingFonts) {
    return <AppLoading /> 
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar translucent={true} style="light" />
      <Routes />
    </ThemeProvider>
  );
}
