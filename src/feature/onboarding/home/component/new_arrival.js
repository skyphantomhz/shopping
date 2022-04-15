import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import ItemCard from './item_card'

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
];


const NewArrival = ({ style }) => {
    const renderItem = ({ item }) => (
        <ItemCard title={item.title} />
    );
    return (
        <View style={[styles.container, style]}>
            <View style={styles.headerContainer}>
                <Text style={{ color: '#141010', fontWeight: '600', fontSize: 16 }}>New Arrival</Text>
                <Text style={{ color: '#38972E', fontSize: 11 }}>See All</Text>
            </View>
            <FlatList
                style={{ marginTop: 8 }}
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id} />
        </View>
    )
}

export default NewArrival

const styles = StyleSheet.create({
    container: {

    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})