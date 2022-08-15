import { useState } from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
const categories = ['food', 'snack', 'drinks', 'water']
const Categories = () => {
    const [category, setCategory] = useState('food')
    return (
        <View className='mb-3'>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {categories.map((item, index) =>
                    (<TouchableOpacity onPress={() => setCategory(item)} key={index} className={`px-10 py-3 ${category === item ? 'bg-purple-900 text-white' : 'bg-purple-200 text-purple-600'} mr-4 rounded-xl`}><Text className='text-white font-poppinsRegular text-base capitalize'>{item}</Text></TouchableOpacity>))}
            </ScrollView>
        </View>
    )
}
export default Categories