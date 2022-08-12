import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import Categories from '../components/Categories'
import PopularSection from '../components/PopularSection'
import RecommendedSection from '../components/RecommendedSection'
import SearchInput from '../components/SearchInput'
import data from '../data.json'
import FilterSection from '../components/FilterSection'
import FilterModal from '../components/FilterModal'
import { useCallback, useState } from 'react'
const Home = () => {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleOpen = () => setShow(true)

    return (
        <SafeAreaView className='flex-1 bg-white px-4'>
            <SearchInput onOpenFilter={handleOpen} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                {show && <FilterModal visible={show} onClose={handleClose} />}
                <PopularSection data={data} />
                <RecommendedSection title='popular' />
                <FilterSection />
            </ScrollView>
        </SafeAreaView>

    )
}
export default Home