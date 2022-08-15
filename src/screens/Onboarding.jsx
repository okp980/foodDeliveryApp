import { useState } from 'react';
import { useRef } from 'react';
import { View, Text, Animated, Image, useWindowDimensions } from 'react-native';
import hiking from '../../assets/img/Boy-enjoying-hiking.png'
import dreaming from '../../assets/img/Dreaming.png'
import baby from '../../assets/img/Happy-baby.png'
import Dots from '../components/Dots';
import OnboardNav from './OnboardNav';

const OnboardingData = [
    {
        image: hiking,
        title: 'Choose a Favourite food',
        description: 'When you make an order, we will hook you with exclusive coupons, specials and rewards'
    }, {
        image: dreaming,
        title: 'Hot delivery at home',
        description: 'We make food ordering faster, easier and free. No matter if you order online or cash'

    }, {
        image: baby,
        title: 'Receive your food',
        description: 'You will receive the great food within an hour. And get free elivery credits for every order.'

    }
];



const Onboarding = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const scrollX = useRef(new Animated.Value(0)).current;
    const flatListRef = useRef(null)

    const viewableItemsChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index)
    }).current


    const { width } = useWindowDimensions()
    return (
        <View className="flex-1 items-center justify-center bg-purple-100">
            <View className='flex-1'>
                <Animated.FlatList
                    scrollEventThrottle={16}
                    snapToAlignment='center'
                    pagingEnabled
                    data={OnboardingData}
                    renderItem={({ item }) => (
                        <View style={{
                            width,
                            alignItems: 'center',
                            justifyContent: 'center',


                        }}>
                            <Image
                                source={item.image}
                                style={{
                                    height: 300,
                                    width

                                }}
                                resizeMode='contain'
                            />
                            <View className='px-4'>
                                <Text
                                    className='font-poppinsMedium text-center text-purple-800  text-3xl my-4 capitalize'
                                >{item.title}</Text>
                                <Text
                                    className='font-poppinsLight text-center text-purple-600  text-md my-4 capitalize'
                                >{item.description}</Text>
                            </View>
                        </View>
                    )}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    keyExtractor={(item, index) => index}
                    onScroll={Animated.event([
                        {
                            nativeEvent: { contentOffset: { x: scrollX } }
                        }
                    ], { useNativeDriver: false })}
                    onViewableItemsChanged={viewableItemsChanged}
                    ref={flatListRef}
                />
            </View>
            <View>
                <Dots slides={OnboardingData} scrollX={scrollX} />
            </View>
            <OnboardNav scrollX={scrollX} elementRef={flatListRef} slides={OnboardingData} currentIndex={currentIndex} />
        </View>
    )
}
export default Onboarding