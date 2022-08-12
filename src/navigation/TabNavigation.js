import { TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Search from "../screens/Search";
import Cart from "../screens/Cart";
import Favourite from "../screens/Favourite";
import Notification from "../screens/Notification";
import useCustomAnimatedStyle from "../hooks/useCustomAnimatedStyle";
import Animated from "react-native-reanimated";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
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
					tabBarShowLabel: false,
				})}
			>
				<Tab.Screen
					name="Home"
					component={Home}
					options={{
						tabBarIcon: (props) => (
							<Ionicons
								name="home-outline"
								size={props.focused ? 34 : 24}
								color={props.focused ? "#9333ea" : "#ccc"}
							/>
						),
					}}
				/>
				<Tab.Screen
					name="Search"
					component={Search}
					options={{
						tabBarIcon: (props) => (
							<Ionicons
								name="search-outline"
								size={props.focused ? 34 : 24}
								color={props.focused ? "#9333ea" : "#ccc"}
							/>
						),
					}}
				/>
				<Tab.Screen
					name="Cart"
					component={Cart}
					options={{
						tabBarIcon: (props) => (
							<Ionicons
								name="cart-outline"
								size={props.focused ? 34 : 24}
								color={props.focused ? "#9333ea" : "#ccc"}
							/>
						),
					}}
				/>
				<Tab.Screen
					name="Favourite"
					component={Favourite}
					options={{
						tabBarIcon: (props) => (
							<Ionicons
								name="heart-outline"
								size={props.focused ? 34 : 24}
								color={props.focused ? "#9333ea" : "#ccc"}
							/>
						),
					}}
				/>
				<Tab.Screen
					name="Notification"
					component={Notification}
					options={{
						tabBarIcon: (props) => (
							<Ionicons
								name="notifications-outline"
								size={props.focused ? 34 : 24}
								color={props.focused ? "#9333ea" : "#ccc"}
							/>
						),
					}}
				/>
			</Tab.Navigator>
		</Animated.View>
	);
};
export default TabNavigation;
