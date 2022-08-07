import { useDrawerProgress } from "@react-navigation/drawer";
import {
	Extrapolate,
	interpolate,
	useAnimatedStyle,
} from "react-native-reanimated";

const useCustomAnimatedStyle = () => {
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

	return animatedStyle;
};
export default useCustomAnimatedStyle;
