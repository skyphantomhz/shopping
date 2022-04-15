import { SafeAreaView, StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import HomePage from './home/home_page'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeSVG from '../../assets/icons/ic_home'
import HomeActiveSVG from '../../assets/icons/ic_home_active'
import SupportSVG from '../../assets/icons/ic_support'
import SupportActiveSVG from '../../assets/icons/ic_support_active'
import StarSVG from '../../assets/icons/ic_star'
import ProfileSVG from '../../assets/icons/ic_profile_normal'

const Tab = createBottomTabNavigator();

const OnboardingScreen = () => {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{ tabBarActiveTintColor: "#38972E", headerShown: false, tabBarShowLabel: false }} >
      <Tab.Screen name="Home" component={HomePage} options={{
        tabBarIcon: ({ color, size }) => (
          color == "#38972E" ? <HomeActiveSVG /> : <HomeSVG />
        )
      }}
      />
      <Tab.Screen name="Settings" component={HomePage} options={{
        tabBarIcon: ({ color, size }) => (
          color == "#38972E" ? <SupportActiveSVG /> : <SupportSVG />
        )
      }} />
    </Tab.Navigator>
  )
}

export default OnboardingScreen

const styles = StyleSheet.create({})