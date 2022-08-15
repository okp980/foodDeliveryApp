import { View, Text, TextInput } from 'react-native'
const CustomInput = ({ label, icon, error, ...inputProps }) => {
    return (
        <View className=' w-full p-2 rounded-lg'>
            {label && <Text className='font-poppinsRegular capitalize text-base font-normal text-gray-700 mb-2'>{label}</Text>}
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: '#fff',
                padding: 8,
                borderRadius: 10
            }}>
                <TextInput
                    style={{
                        flex: 1,
                        fontFamily: 'Poppins-Regular'
                    }}

                    {...inputProps}
                />
                {icon}
            </View>
            {error.length > 1 && <Text className='font-poppinsRegular capitalize text-sm text-red-700 mb-2 mt-1'>{error}</Text>}
        </View>
    )
}
export default CustomInput