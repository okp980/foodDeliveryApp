import { View, Text } from 'react-native'
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import GlobalStyle from '../theme/GlobalStyle';

const TwoPointSlider = ({ values, min, max, prefix, postfix, onValuesChange }) => {
    return (
        <View>
            <MultiSlider
                min={min}
                max={max}
                values={values}
                step={1}
                // markerOffsetY={20}
                selectedStyle={{
                    backgroundColor: GlobalStyle.color.primary
                }}

                minMarkerOverlapDistance={50}
                customMarker={
                    (e) => (
                        <View style={{
                            height: 60,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <View style={{ backgroundColor: GlobalStyle.color.primary, height: 20, width: 20, borderRadius: 10, }}></View>
                            <Text style={{ marginTop: 5, color: GlobalStyle.color.darkGray, fontFamily: 'Poppins-Regular' }}>
                                {prefix}{e.currentValue} {postfix}
                            </Text>
                        </View>
                    )
                }
                onValuesChange={(values) => onValuesChange(values)}
            />
        </View>
    )
}
export default TwoPointSlider