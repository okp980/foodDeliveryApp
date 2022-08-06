import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity } from "react-native";
const CloseDrawer = ({ navigation }) => {
	return (
		<View className="mb-3 py-2">
			<TouchableOpacity onPress={() => navigation.closeDrawer()}>
				<MaterialCommunityIcons name="window-close" size={34} color="white" />
			</TouchableOpacity>
		</View>
	);
};
export default CloseDrawer;
