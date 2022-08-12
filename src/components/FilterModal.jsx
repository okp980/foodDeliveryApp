import { Ionicons } from '@expo/vector-icons'
import { useRef, useState } from 'react'
import { useEffect } from 'react'
import { View, Text, Modal, TouchableWithoutFeedback, useWindowDimensions, Animated, TouchableOpacity, ScrollView } from 'react-native'
import GlobalStyle from '../theme/GlobalStyle'
import TwoPointSlider from './TwoPointSlider'

const deliveryTime = [10, 20, 30]
const ratings = [1, 2, 3, 4, 5]


const FilterModal = ({ visible, onClose }) => {
    const modalAnimatedValue = useRef(new Animated.Value(0)).current
    const [time, setTime] = useState(10)
    const [rating, setRating] = useState(1)
    const { height, width } = useWindowDimensions()

    useEffect(() => {
        if (visible) {
            Animated.timing(modalAnimatedValue, {
                toValue: 1, duration: 500, useNativeDriver: false
            }).start()
        } else {
            Animated.timing(modalAnimatedValue, {
                toValue: 0, duration: 500, useNativeDriver: false
            }).start(() => onClose())
        }
    }, [visible])

    const modalY = modalAnimatedValue.interpolate({
        inputRange: [0, 1], outputRange: [height, height - 680]
    })

    return (
        <Modal
            animationType='fade'
            transparent={true}
            visible={visible}
        >
            {/* <View className='flex-1 bg-purple-600 bg-opacity-25'> */}
            <View style={{ flex: 1, backgroundColor: 'rgba(52, 52, 52, 0.8)' }}>
                {/* transparent Background */}
                <TouchableWithoutFeedback onPress={onClose}>
                    <View
                        className='absolute inset-0'
                    />
                </TouchableWithoutFeedback>
            </View>
            <Animated.View style={{
                position: 'absolute',
                left: 0,
                top: 0,
                transform: [{ translateY: modalY }],
                padding: 16,
                width,
                height: height - (height - 680),
                borderTopRightRadius: 18,
                borderTopLeftRadius: 18,
                backgroundColor: 'white'
            }}>
                <View className='flex-row items-center justify-between'>
                    <Text className='text-gray-600 font-bold text-lg'>Filter Your Search</Text>
                    <TouchableOpacity onPress={onClose}>
                        <Ionicons name='close-circle-outline' size={40} color="purple" />
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    {/* Distance */}
                    <Text className='text-gray-600 font-normal text-lg mt-3'>Distance</Text>
                    <TwoPointSlider
                        max={20}
                        min={1}
                        postfix='km'
                        onValuesChange={(values) => console.log(values)}
                        values={[3, 10]}
                    />
                    {/* Delivery Time */}
                    <Text className='text-gray-600 font-normal text-lg mt-5'>Delivery Time</Text>
                    <View className='flex-row space-x-4 py-2'>
                        {
                            deliveryTime.map((delTime, index) => (
                                <TouchableOpacity onPress={() => setTime(delTime)} key={index} className={`px-6 py-3 ${delTime === time ? 'bg-purple-600' : 'bg-purple-100'} rounded-sm`}>
                                    <Text className={`${delTime === time ? 'text-white' : 'text-purple-600'}`}>{delTime} Mins</Text>
                                </TouchableOpacity>
                            ))
                        }
                    </View>
                    {/* Price Range */}
                    <Text className='text-gray-600 font-normal text-lg mt-3'>Price Range</Text>
                    <TwoPointSlider
                        max={100}
                        min={0}
                        prefix='$'
                        onValuesChange={(values) => console.log(values)}
                        values={[10, 50]}
                    />
                    {/* Ratings */}
                    <Text className='text-gray-600 font-normal text-lg mt-5'>Ratings</Text>
                    <View className='flex-row space-x-4 py-2'>
                        {
                            ratings.map((rate, index) => (
                                <TouchableOpacity onPress={() => setRating(rate)} key={index} className={`px-3 py-3 ${rate === rating ? 'bg-purple-600' : 'bg-purple-100'} rounded-sm`}>
                                    <Text className={`${rate === rating ? 'text-white' : 'text-purple-600'} mr-2`}>{rate}
                                        {rate === rating ? <Ionicons name='star' size={16} color={GlobalStyle.color.white} />
                                            : <Ionicons name='star-outline' size={16} color={GlobalStyle.color.primary} />}
                                    </Text>
                                </TouchableOpacity>
                            ))
                        }
                    </View>

                </ScrollView>
                <View>
                    <TouchableOpacity className='rounded-md items-center justify-center h-12 bg-purple-600'>
                        <Text className='text-lg text-purple-50 uppercase'>Apply Filters</Text>
                    </TouchableOpacity>
                </View>
            </Animated.View>
        </Modal>
    )
}
export default FilterModal