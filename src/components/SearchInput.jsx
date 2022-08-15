import { Ionicons } from '@expo/vector-icons';
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
const Search = ({ onOpenFilter }) => {
    return (
        <View className='flex-row bg-purple-100 my-3 p-2  rounded-md'>
            <Ionicons name="search" size={24} color="#999" className='mr-2' />
            <TextInput placeholder="Search" className='font-poppinsRegular ml-2 flex-1' />
            <TouchableOpacity onPress={onOpenFilter}>
                <Ionicons name="options" size={24} color="#999" />
            </TouchableOpacity>
        </View>
    )
}
export default Search