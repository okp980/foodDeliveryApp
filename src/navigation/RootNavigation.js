import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import Onboarding from "../screens/Onboarding";
import { selectUser } from "../store/features/user/userSlice";
import CustomDrawer from "./CustomDrawer";
import Sigin from "../screens/Sigin";
import Signup from "../screens/Signup";
import OTP from "../screens/OTP";
import RecoverPassword from "../screens/RecoverPassword";
import { useState } from "react";
import { useEffect } from "react";
import { getStoredData } from "../util/helpers";
import { ONBOARD_KEY_VALUE } from "../util/constants";

const Stack = createNativeStackNavigator();
const RootNavigation = ({ onReady, installed }) => {
	const user = useSelector(selectUser);

	return (
		<NavigationContainer onReady={onReady}>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				{!installed && (
					<Stack.Screen name="Onboarding" component={Onboarding} />
				)}
				{!user.isAuthenticated ? (
					<>
						<Stack.Screen name="SignIn" component={Sigin} />
						<Stack.Screen name="SignUp" component={Signup} />
						<Stack.Screen name="OTP" component={OTP} />
						<Stack.Screen name="Recover Password" component={RecoverPassword} />
					</>
				) : (
					<>
						<Stack.Screen name="Main" component={CustomDrawer} />
					</>
				)}
			</Stack.Navigator>
		</NavigationContainer>
	);
};
export default RootNavigation;
