import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key, value) => {
	let jsonValue;
	try {
		if (typeof value !== "string") {
			jsonValue = JSON.stringify(value);
		} else {
			jsonValue = value;
		}
		await AsyncStorage.setItem(key, jsonValue);
	} catch (error) {
		console.log(error);
	}
};

export const getStoredData = async (key) => {
	try {
		const value = await AsyncStorage.getItem(key);
		return value !== null ? JSON.parse(value) : null;
	} catch (error) {
		console.log(error);
	}
};

export const renderIcon = (field, error) => {
	if (field) {
		if (!!error) {
			return <FontAwesome5 name="times-circle" size={18} color="red" />;
		} else {
			return <AntDesign name="checkcircleo" size={18} color="lightgreen" />;
		}
	} else {
		return null;
	}
};
