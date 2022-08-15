import {
	Entypo,
	Feather,
	Ionicons,
	MaterialCommunityIcons,
} from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { SafeAreaView, View } from "react-native";
import CustomDrawerContent from "../components/CustomDrawerContent";
import MainLayout from "../screens/MainLayout";
import TabNavigation from "./TabNavigation";

const Drawer = createDrawerNavigator();
const CustomDrawer = () => {
	return (
		// <SafeAreaView className="bg-purple-600 bg-pu flex-1">
		<Drawer.Navigator
			screenOptions={{
				drawerType: "slide",
				overlayColor: "transparent",
				drawerStyle: {
					flex: 1,
					width: "65%",
					paddingRight: 20,
					backgroundColor: "#9333ea",
					color: "white",
				},
				sceneContainerStyle: {
					backgroundColor: "#9333ea",
				},
				headerShown: false,
				drawerActiveBackgroundColor: "#4d1679",
				drawerInactiveBackgroundColor: "transparent",
				drawerItemStyle: {
					color: "white",
				},
			}}
			initialRouteName="MainLayout"
			drawerContent={(props) => {
				return <CustomDrawerContent {...props} />;
			}}
		>
			<Drawer.Screen
				name="MainLayout"
				component={TabNavigation}
				options={{
					drawerIcon: () => (
						<Ionicons name="home-outline" size={20} color="white" />
					),
					drawerLabelStyle: {
						marginLeft: -15,
						color: "white",
						fontFamily: "Poppins-Regular",
					},
				}}
			/>
			<Drawer.Screen
				name="Wallet"
				component={MainLayout}
				options={{
					drawerIcon: () => (
						<Ionicons name="wallet-outline" size={20} color="white" />
					),
					drawerLabelStyle: {
						marginLeft: -15,
						color: "white",
						fontFamily: "Poppins-Regular",
					},
				}}
			/>
			<Drawer.Screen
				name="Notifications"
				component={MainLayout}
				options={{
					drawerIcon: () => (
						<Ionicons name="notifications" size={20} color="white" />
					),
					drawerLabelStyle: {
						marginLeft: -15,
						color: "white",
						fontFamily: "Poppins-Regular",
					},
				}}
			/>
			<Drawer.Screen
				name="Favourites"
				component={MainLayout}
				options={{
					drawerIcon: () => (
						<Ionicons name="heart-outline" size={20} color="white" />
					),
					drawerLabelStyle: {
						marginLeft: -15,
						color: "white",
						fontFamily: "Poppins-Regular",
					},
				}}
			/>
			<Drawer.Screen
				name="Track Your Order"
				component={MainLayout}
				options={{
					drawerIcon: () => <Entypo name="location" size={20} color="white" />,
					drawerLabelStyle: {
						marginLeft: -15,
						color: "white",
						fontFamily: "Poppins-Regular",
					},
				}}
			/>
			<Drawer.Screen
				name="Coupons"
				component={MainLayout}
				options={{
					drawerIcon: () => (
						<MaterialCommunityIcons name="cards" size={20} color="white" />
					),
					drawerLabelStyle: {
						marginLeft: -15,
						color: "white",
						fontFamily: "Poppins-Regular",
					},
				}}
			/>
			<Drawer.Screen
				name="Settings"
				component={MainLayout}
				options={{
					drawerIcon: () => <Entypo name="cog" size={20} color="white" />,
					drawerLabelStyle: {
						marginLeft: -15,
						color: "white",
						fontFamily: "Poppins-Regular",
					},
				}}
			/>
			<Drawer.Screen
				name="Invite a Friend"
				component={MainLayout}
				options={{
					drawerIcon: () => (
						<Ionicons name="person-add-outline" size={20} color="white" />
					),
					drawerLabelStyle: {
						marginLeft: -15,
						color: "white",
						fontFamily: "Poppins-Regular",
					},
				}}
			/>
			<Drawer.Screen
				name="Help Center"
				component={MainLayout}
				options={{
					drawerIcon: () => (
						<Feather name="help-circle" size={20} color="white" />
					),
					drawerLabelStyle: {
						marginLeft: -15,
						color: "white",
						fontFamily: "Poppins-Regular",
					},
				}}
			/>
		</Drawer.Navigator>
		// </SafeAreaView>
	);
};
export default CustomDrawer;
