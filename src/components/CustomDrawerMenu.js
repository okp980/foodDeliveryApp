import { View, Text } from "react-native";
import CustomDrawerItem from "./CustomDrawerItem";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const CustomDrawerMenu = () => {
	return (
		<View>
			<CustomDrawerItem
				icon={<Ionicons name="home-outline" size={20} color="white" />}
				label="Home"
				to={"Home"}
			/>
			<CustomDrawerItem
				icon={<Ionicons name="wallet-outline" size={20} color="white" />}
				label="My Wallets"
				to={"My Wallet"}
			/>
			<CustomDrawerItem
				icon={<Ionicons name="notifications-outline" size={20} color="white" />}
				label="Notifications"
				to={"Notifications"}
			/>
			<CustomDrawerItem
				icon={<Ionicons name="heart-outline" size={20} color="white" />}
				label="Favourites"
				to={"Favourites"}
			/>
			<View className="h-[1px] bg-slate-100 w-full my-1" />
			<CustomDrawerItem
				icon={<Entypo name="location" size={20} color="white" />}
				label="Track Your Order"
				to={"Track Order"}
			/>
			<CustomDrawerItem
				icon={<MaterialCommunityIcons name="cards" size={20} color="white" />}
				label="Coupons"
				to={"Coupons"}
			/>
			<CustomDrawerItem
				icon={<Entypo name="cog" size={20} color="white" />}
				label="Settings"
				to={"Settings"}
			/>
			<CustomDrawerItem
				icon={<Ionicons name="person-add-outline" size={20} color="white" />}
				label="Invite a Friend"
				to={"Invite a Friend"}
			/>
			<CustomDrawerItem
				icon={<Feather name="help-circle" size={20} color="white" />}
				label="Help Center"
				to={"Help Center"}
			/>
		</View>
	);
};
export default CustomDrawerMenu;
