import { useDrawerProgress } from "@react-navigation/drawer";
import { Text } from "react-native";
import Animated, {
	Extrapolate,
	interpolate,
	useAnimatedStyle,
} from "react-native-reanimated";
const MainLayout = () => {
	const progress = useDrawerProgress();

	const animatedStyle = useAnimatedStyle(() => {
		const scale = interpolate(progress.value, [0, 1], [1, 0.8], {
			extrapolateRight: Extrapolate.CLAMP,
		});
		const borderRadius = interpolate(progress.value, [0, 1], [0, 26], {
			extrapolateRight: Extrapolate.CLAMP,
		});
		return {
			transform: [{ scale }],
			borderRadius,
		};
	});

	return (
		<Animated.View
			className="flex-1 items-center justify-center bg-green-400"
			style={[animatedStyle]}
		>
			<Text>MainLayout</Text>
		</Animated.View>
	);
};
export default MainLayout;
