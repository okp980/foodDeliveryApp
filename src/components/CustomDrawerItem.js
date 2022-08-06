import { View, Text } from "react-native";
const CustomDrawerItem = ({ icon, label, to }) => {
	return (
		<View className="flex-row h-10 mb-2 items-center pl-2 rounded-md ">
			{icon}
			<Text className="ml-3 text-slate-200 text-sm">{label}</Text>
		</View>
	);
};
export default CustomDrawerItem;
