import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import OTP from "../screens/OTP";
import RecoverPassword from "../screens/RecoverPassword";
import Sigin from "../screens/Sigin";
import Signup from "../screens/Signup";

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="SignIn" component={Sigin} />
			<Stack.Screen name="SignUp" component={Signup} />
			<Stack.Screen name="OTP" component={OTP} />
			<Stack.Screen name="Recover Password" component={RecoverPassword} />
		</Stack.Navigator>
	);
};
export default AuthNavigation;
