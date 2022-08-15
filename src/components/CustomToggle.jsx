import { useEffect, useRef } from 'react'
import { View, Text, Animated, TouchableWithoutFeedback, } from 'react-native'
const CustomToggle = ({ save, onSetSave }) => {
    const progress = useRef(new Animated.Value(0)).current

    useEffect(() => {
        if (save) {
            Animated.timing(progress, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true

            }).start()
        } else {
            Animated.timing(progress, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true

            }).start()
        }
    }, [save]);

    const translateX = progress.interpolate({
        inputRange: [0, 1], outputRange: [0, 40]
    })
    return (
        <View className='flex-row space-x-2 items-center'>
            <TouchableWithoutFeedback onPress={() => onSetSave(prev => !prev)}>
                <View style={
                    {
                        width: 70,
                        borderRadius: 38,
                        borderColor: '#666',
                        borderWidth: 1,
                        height: 30,
                        paddingHorizontal: 4,
                        justifyContent: 'center'
                    }
                }>
                    <Animated.View
                        style={{
                            height: 20,
                            width: 20,
                            borderRadius: 10,
                            backgroundColor: '#666',
                            transform: [{ translateX }]
                        }}
                    />
                </View>
            </TouchableWithoutFeedback>
            <Text className='text-gray-700 text-base font-poppinsRegular'>Save Me</Text>
        </View>
    )
}
export default CustomToggle