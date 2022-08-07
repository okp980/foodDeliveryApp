import { Text } from "react-native";
import Animated from "react-native-reanimated";
import useCustomAnimatedStyle from "../hooks/useCustomAnimatedStyle";
const MainLayout = () => {
	const animatedStyle = useCustomAnimatedStyle();
	return (
		<Animated.View
			className="flex-1 items-center justify-center bg-white"
			style={[animatedStyle]}
		>
			<Text>main</Text>
		</Animated.View>
	);
};
export default MainLayout;
