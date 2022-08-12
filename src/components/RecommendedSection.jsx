import { Ionicons } from '@expo/vector-icons'
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import data from '../data/recommended.json'
const RecommendedSection = () => {

    return (
        <View className='my-3'>
            <View className='flex-row justify-between mb-2'>
                <Text className='capitalize font-bold text-md text-gray-600'>Recommended</Text>
                <TouchableOpacity>
                    <Text className='capitalize font-normal text-md text-purple-600'>
                        Show all
                    </Text>
                </TouchableOpacity>
            </View>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={data}
                renderItem={({ item, }) => (
                    <TouchableOpacity>
                        <View className='bg-slate-200  mr-4 p-2 py-4 rounded-md w-[350px] flex-row items-center'>

                            <View className='items-center mr-6'>
                                <Image
                                    source={{ uri: item.image }}
                                    style={{
                                        height: 150,
                                        width: 150
                                    }}
                                />
                            </View>
                            <View>
                                <Text className=' mt-4 text-lg font-bold capitalize'>{item.name}</Text>

                                {item.suggestions.map((itm, index) => (<Text key={index} className=' text-md font-light capitalize text-gray-400'>{itm}</Text>))}
                                <Text className=' mb-1 text-xls capitalize font-extrabold text-gray-800 mt-3 text-xl'>${item.price}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={(item, index) => index}
            />
        </View>
    )
}
export default RecommendedSection