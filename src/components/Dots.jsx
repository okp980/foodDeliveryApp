import { View, Text, useWindowDimensions, Animated } from 'react-native';
import GlobalStyle from '../theme/GlobalStyle'


const Dots = ({ slides, scrollX }) => {
    const { primary, lightGray } = GlobalStyle.color
    const { width } = useWindowDimensions()
    const dotPosition = Animated.divide(scrollX, width)






    return (
        <View className='flex-row space-x-3 h-12 items-center'>
            {
                slides.map((item, index) => {
                    const dotWidth = dotPosition.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [10, 30, 10],
                        extrapolate: 'clamp'
                    })

                    const dotOpacity = dotPosition.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [0.3, 1, 0.3],
                        extrapolate: 'clamp'
                    })

                    return (
                        <Animated.View key={index} style={{
                            height: 10,
                            width: dotWidth,
                            borderRadius: 10 / 2,
                            backgroundColor: primary,
                            opacity: dotOpacity
                        }} />
                    )
                })
            }
        </View>
    )
}
export default Dots