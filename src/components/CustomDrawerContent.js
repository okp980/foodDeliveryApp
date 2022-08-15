import {
	DrawerContentScrollView,
	DrawerItem,
	DrawerItemList,
} from "@react-navigation/drawer";
import { View } from "react-native";
import CloseDrawer from "./CloseDrawer";
import CustomDrawerItem from "./CustomDrawerItem";
import ViewProfile from "./ViewProfile";
import { SimpleLineIcons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { signOutUser } from "../store/features/user/userSlice";

const CustomDrawerContent = (props) => {
	const dispatch = useDispatch();
	return (
		<DrawerContentScrollView
			{...props}
			contentContainerStyle={{
				flex: 1,
				justifyContent: "space-between",
				paddingBottom: 20,
			}}
		>
			<View className="px-2">
				<CloseDrawer navigation={props.navigation} />
				<ViewProfile />
			</View>
			<View className="flex-1">
				<DrawerItemList {...props} />
			</View>

			<DrawerItem
				onPress={() => dispatch(signOutUser())}
				label="Logout"
				icon={() => <SimpleLineIcons name="logout" size={20} color="white" />}
				labelStyle={{
					marginLeft: -15,
					fontSize: 16,
					fontFamily: "Poppins-Regular",
					color: "white",
				}}
			/>
		</DrawerContentScrollView>
	);
};
export default CustomDrawerContent;
