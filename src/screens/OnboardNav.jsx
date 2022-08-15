import { View, Text, TouchableOpacity, useWindowDimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ONBOARD_SAVE_VALUE, ONBOARD_KEY_VALUE } from '../util/constants';
import { storeData } from '../util/helpers';

const OnboardNav = ({ elementRef, scrollX, slides, currentIndex }) => {
    const navigation = useNavigation()
    const { width } = useWindowDimensions()




    const handleScroll = () => {
        let index = Math.ceil(Number(scrollX._value / width));
        if (index < slides.length) {
            elementRef.current.scrollToIndex({
                index: index + 1,
                animate: true
            })
        }
    }



    const handleSkip = () => {
        elementRef.current.scrollToIndex({
            index: slides.length - 1,
            animate: true
        })
    }

    const handleNextScreen = async () => {
        try {
            await storeData(ONBOARD_KEY_VALUE, ONBOARD_SAVE_VALUE)
        } catch (error) {
            console.log(error);
        }
        navigation.replace('SignIn')
    }

    return (
        <View className='flex-row justify-between items-center w-full p-4 ' >
            {currentIndex < slides.length - 1 &&
                (
                    <>
                        <TouchableOpacity onPress={handleSkip}>
                            <View >
                                <Text className='text-md uppercase text-purple-800 font-poppinsMedium tracking-wide'>skip</Text>
                            </View>
                        </TouchableOpacity >
                        <TouchableOpacity className='  bg-purple-600 rounded-md' onPress={handleScroll}>
                            <Text className='font-poppinsMedium tracking-wide py-3 px-9 text-md uppercase text-purple-100'>next</Text>
                        </TouchableOpacity>
                    </>)}
            {currentIndex === slides.length - 1 &&
                <TouchableOpacity onPress={handleNextScreen} className='py-4   bg-purple-600 rounded-md w-full'>
                    <Text className='font-poppinsMedium tracking-wider text-center font-semibold text-md uppercase text-purple-100'>lets begin</Text>
                </TouchableOpacity>

            }
        </View>
    )


}






export default OnboardNav