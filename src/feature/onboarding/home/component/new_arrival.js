import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import ItemCard from './item_card'
import { useSelector } from 'react-redux'
import { rocketSelector } from '../rocket_slice'
import LottieView from 'lottie-react-native'


const NewArrival = ({ style }) => {
    const mRocketSelector = useSelector(rocketSelector)

    const renderItem = ({ item }) => {
        return <ItemCard content={item} />
    }

    var contentNewArrival = <View style={{ width: 100, height: 100, backgroundColor: 'red' }} />
    if (mRocketSelector.status === "loading") {
        contentNewArrival = <View style={{ width: 100, height: 100, alignSelf: 'center' }}>
            <LottieView source={require('../../../../assets/loading.json')} autoPlay loop />
        </View>
    } else if (mRocketSelector.status === "success") {
        console.log(mRocketSelector.rockets)
        contentNewArrival = <FlatList
            style={{ marginTop: 8 }}
            data={mRocketSelector.rockets}
            renderItem={renderItem}
            keyExtractor={item => item.id} nestedScrollEnabled />
    } else if (mRocketSelector.status === "fail") {
        contentNewArrival = <View style={{ width: 100, height: 100, backgroundColor: 'red' }} />
    }

    return (
        <View style={[styles.container, style]}>
            <View style={styles.headerContainer}>
                <Text style={{ color: '#141010', fontWeight: '600', fontSize: 16 }}>New Arrival</Text>
                <Text style={{ color: '#38972E', fontSize: 11 }}>See All</Text>
            </View>
            {contentNewArrival}
        </View>
    )
}

export default NewArrival

const styles = StyleSheet.create({
    container: {
        marginBottom: 72
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})