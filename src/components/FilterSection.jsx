import { useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import data from '../data.json'
const FilterSection = () => {
    const [filter, setFilter] = useState('newest');
    const filterOptions = ['newest', 'featured', 'near you', 'popular']
    return (
        <View>
            <View className='flex-row space-x-5 my-4'>
                {filterOptions.map((option, index) => (
                    <TouchableOpacity key={index} onPress={() => setFilter(option)}>
                        <Text className={`text-md font-poppinsSemiBold capitalize  ${option === filter ? 'text-purple-600' : 'text-gray-400'}`}>
                            {option}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
            <View className='items-center'>
                {data.map((item, index) => (
                    <TouchableOpacity key={index} className='mb-4'>
                        <View className='bg-gray-100  mr-4 p-2 rounded-md w-[330px] flex-row space-x-4'>

                            <View className='items-center '>
                                <Image
                                    source={{ uri: item.image }}
                                    style={{
                                        height: 100,
                                        width: 100
                                    }}
                                />
                            </View>
                            <View className='justify-center'>
                                <Text className=' text-md font-poppinsMedium capitalize'>{item.name}</Text>
                                <Text className='  text-xs capitalize font-poppinsLight text-gray-500'>{item.title}</Text>
                                <Text className=' text-lg capitalize font-poppinsSemiBold mt-3'>${item.price}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>

        </View>
    )
}
export default FilterSection