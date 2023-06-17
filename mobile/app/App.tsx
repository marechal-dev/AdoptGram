import { useCallback, useEffect, useState } from "react";
import { View } from "react-native";

import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import { loadAsync } from "expo-font";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { appTheme } from "./src/theme/app-theme";
import { navigatorScreenOptions } from "./src/theme/screen-options";
import { styles } from "./style";

import { OnboardingScreen } from "./src/screens/OnboardingScreen/OnboardingScreen";
import { RootStackParamList } from "./src/types/navigator-types";
import { LoginScreen } from "./src/screens/LoginScreen/LoginScreen";
import { ForgotPasswordScreen } from "./src/screens/ForgotPasswordScreen/ForgotPasswordScreen";
import { RegisterNewAccountScreen } from "./src/screens/RegisterNewAccountScreen/RegisterNewAccountScreen";
import { NgoLoginScreen } from "./src/screens/NgoLoginScreen/NgoLoginScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState<boolean>(false);

  useEffect(() => {
    const loadFonts = async () => {
      try {
        await loadAsync({
          Poppins: require("./assets/fonts/Poppins.ttf"),
        });
      } catch (error) {
        console.error(error);
      } finally {
        setAppIsReady(true);
      }
    };

    loadFonts();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View style={styles.appContainer} onLayout={onLayoutRootView}>
      <StatusBar style="dark" />
      <NavigationContainer theme={appTheme}>
        <Stack.Navigator
          screenOptions={navigatorScreenOptions}
          initialRouteName="Onboarding"
        >
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPasswordScreen}
          />
          <Stack.Screen
            name="RegisterNewAccount"
            component={RegisterNewAccountScreen}
          />
          <Stack.Screen name="NgoLogin" component={NgoLoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
