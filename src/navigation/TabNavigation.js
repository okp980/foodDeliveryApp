import { View, Text, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Search from "../screens/Search";
import Cart from "../screens/Cart";
import Favourite from "../screens/Favourite";
import Notification from "../screens/Notification";
import useCustomAnimatedStyle from "../hooks/useCustomAnimatedStyle";
import Animated from "react-native-reanimated";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
	const animatedStyle = useCustomAnimatedStyle();
	return (
		<Animated.View style={[{ flex: 1 }, animatedStyle]}>
			<Tab.Navigator
				initialRouteName="Home"
				screenOptions={({ navigation }) => ({
					headerTitleAlign: "center",
					headerTitleStyle: {
						textTransform: "uppercase",
						fontSize: 18,
					},
					headerLeft: (props) => {
						return (
							<TouchableOpacity onPress={() => navigation.toggleDrawer()}>
								<AntDesign name="menufold" size={24} color="#9333ea" />
							</TouchableOpacity>
						);
					},
					headerLeftLabelVisible: false,
					headerLeftContainerStyle: {
						paddingLeft: 20,
					},
					headerRight: () => (
						<FontAwesome5 name="hamburger" size={34} color="#9333ea" />
					),
					headerRightContainerStyle: {
						paddingRight: 20,
					},
				})}
			>
				<Tab.Screen name="Home" component={Home} />
				<Tab.Screen name="Search" component={Search} />
				<Tab.Screen name="Cart" component={Cart} />
				<Tab.Screen name="Favourite" component={Favourite} />
				<Tab.Screen name="Notification" component={Notification} />
			</Tab.Navigator>
		</Animated.View>
	);
};
export default TabNavigation;
