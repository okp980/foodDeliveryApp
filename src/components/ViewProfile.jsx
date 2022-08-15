import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
const ViewProfile = () => {
    return (
        <TouchableOpacity className='flex-row justify-around items-center mb-6'>
            <View>
                <Ionicons name="person-circle" size={44} color="white" />
            </View>
            <View>
                <Text className='text-base text-purple-50 font-poppinsBold'>Okpunor Emmanuel</Text>
                <Text className='text-xs text-purple-50 font-poppinsLight'>View your profile</Text>
            </View>
        </TouchableOpacity>
    )
}
export default ViewProfile