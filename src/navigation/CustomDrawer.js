import { createDrawerNavigator } from "@react-navigation/drawer";
import { View } from "react-native";
import CustomDrawerContent from "../components/CustomDrawerContent";
import MainLayout from "../screens/MainLayout";

const Drawer = createDrawerNavigator();
const CustomDrawer = () => {
	return (
		<View className="bg-purple-600 flex-1">
			<Drawer.Navigator
				screenOptions={{
					drawerType: "slide",
					overlayColor: "transparent",
					drawerStyle: {
						flex: 1,
						width: "65%",
						paddingRight: 20,
						backgroundColor: "transparent",
					},
					sceneContainerStyle: "transparent",
					headerShown: false,
				}}
				initialRouteName="MainLayout"
				drawerContent={(props) => {
					return <CustomDrawerContent {...props} />;
				}}
			>
				<Drawer.Screen name="MainLayout" component={MainLayout} />
			</Drawer.Navigator>
		</View>
	);
};
export default CustomDrawer;
