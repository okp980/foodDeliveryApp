import { DrawerContentScrollView } from "@react-navigation/drawer";
import { View, Text } from "react-native";
import CloseDrawer from "./CloseDrawer";
import CustomDrawerItem from "./CustomDrawerItem";
import CustomDrawerMenu from "./CustomDrawerMenu";
import ViewProfile from "./ViewProfile";
import { SimpleLineIcons } from "@expo/vector-icons";

const CustomDrawerContent = ({ navigation }) => {
	return (
		<DrawerContentScrollView
			scrollEnabled={true}
			contentContainerStyle={{
				flex: 1,
			}}
		>
			<View className="flex-1 px-3 justify-between">
				<View>
					<CloseDrawer navigation={navigation} />
					<ViewProfile />
					<CustomDrawerMenu />
				</View>
				<CustomDrawerItem
					icon={<SimpleLineIcons name="logout" size={20} color="white" />}
					label="Logout"
				/>
			</View>
		</DrawerContentScrollView>
	);
};
export default CustomDrawerContent;
