import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import CategorySVG from '../../../assets/icons/ic_category'
import CartSVG from '../../../assets/icons/ic_cart'
import SearchSVG from '../../../assets/icons/ic_search_small'
import FilterSVG from '../../../assets/icons/ic_filter'
import InputComponent from '../../../component/input'

import { useDispatch } from 'react-redux'
import { fetchRocket } from './rocket_slice'

import CategoryCard from './component/category_card'
import NewArrival from './component/new_arrival'

import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'

const HomePage = () => {
  const [searchStr, setSearchStr] = useState("")

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchRocket())
  })
  const marginBottom = useBottomTabBarHeight()
  return (
    <SafeAreaView>
      <View style={{ flexDirection: 'column' }}>
        <View style={{ flexDirection: 'row', marginHorizontal: 25, justifyContent: 'center' }}>
          <CategorySVG width="24" height="24" />
          <Text style={{ flex: 1, textAlign: 'center', alignSelf: 'center', fontWeight: '600', fontSize: 17, color: '#141010' }}>Discover</Text>
          <CartSVG width="24" height="24" />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <View style={{ flexDirection: 'row', marginHorizontal: 25, alignItems: 'center', marginTop: 34 }}>
              <InputComponent style={styles.searchBox} onChangeText={setSearchStr} value={searchStr} placeholder={"Search"}>
                <SearchSVG width={14} height={14} />
              </InputComponent>
              <TouchableOpacity>
                <View style={{ backgroundColor: '#141010', padding: 13, marginStart: 12, borderRadius: 6 }}>
                  <FilterSVG width={24} height={24} />
                </View>
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 32, marginHorizontal: 25, justifyContent: 'space-between' }}>
              <CategoryCard image={"https://i.ibb.co/8zggkNN/mobile-1.png"} name={"Smartphone"} count={36} />
              <CategoryCard image={"https://i.ibb.co/vHRDLQ7/mobile-2.png"} name={"Headphones"} count={36} />
            </View>

            <NewArrival style={{ marginHorizontal: 25, marginTop: 32 }} />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default HomePage

const styles = StyleSheet.create({
  searchBox: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 14,
    height: 50,
    paddingHorizontal: 18
  }
})