import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const CategoryCard = ({ image, name, count }) => {
    return (
        <View style={styles.container}>
            <Image
                style={{ width: 100, height: 100 }}
                source={{ uri: image }}
            />
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.subTitle}>{count} items</Text>
        </View>
    )
}
export default CategoryCard

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 15,
        width: 164,
        alignItems: 'center',
        paddingVertical: 10,

    },
    title: {
        fontSize: 15,
        marginTop: 6
    },
    subTitle: {
        fontSize: 11,
        marginTop: 5,
        fontWeight: '600'
    }
})