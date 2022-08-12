import { Ionicons } from '@expo/vector-icons'
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native'
const PopularSection = ({ data }) => {
    return (
        <View className='my-3'>
            <View className='flex-row justify-between mb-2'>
                <Text className='capitalize font-bold text-md text-gray-600'>Popular Near You</Text>
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
                        <View className='bg-slate-200  mr-4 p-2 rounded-md w-[180px]'>
                            <View className='items-end mb-2'>
                                <Ionicons name='heart-outline' size={20} color='purple' />
                            </View>
                            <View className='items-center '>
                                <Image
                                    source={{ uri: item.image }}
                                    style={{
                                        height: 100,
                                        width: 100
                                    }}
                                />
                            </View>
                            <Text className='text-center mt-4 text-md font-bold capitalize'>{item.name}</Text>
                            <Text className='text-center mb-4 text-xs capitalize font-light text-gray-500'>{item.title}</Text>
                            <Text className='text-center mt-2 text-lg capitalize font-bold'>${item.price}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={(item, index) => index}
            />
        </View>
    )
}
export default PopularSection