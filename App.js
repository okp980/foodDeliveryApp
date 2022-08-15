import "react-native-gesture-handler";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Provider } from "react-redux";
import { TailwindProvider } from "tailwindcss-react-native";
import RootNavigation from "./src/navigation/RootNavigation";
import store from "./src/store/store";
import { getStoredData } from "./src/util/helpers";
import { ONBOARD_KEY_VALUE } from "./src/util/constants";
import { useCallback, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
	const [appIsReady, setAppIsReady] = useState(false);
	const [installed, setInstalled] = useState(false);

	useEffect(() => {
		async function prepare() {
			try {
				await Font.loadAsync({
					"Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
					"Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
					"Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
					"Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
					"Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
				});
				const value = await AsyncStorage.getItem(ONBOARD_KEY_VALUE);
				if (value) {
					setInstalled(true);
				}

				await new Promise((resolve) => setTimeout(resolve, 2000));
			} catch (e) {
				console.warn(e);
			} finally {
				// Tell the application to render
				setAppIsReady(true);
			}
		}

		prepare();
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
		<TailwindProvider>
			<Provider store={store}>
				<RootNavigation onReady={onLayoutRootView} installed={installed} />
			</Provider>
		</TailwindProvider>
	);
}
