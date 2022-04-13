import { StyleSheet, Text, Button,TouchableOpacity } from 'react-native'
import React from 'react'

const ButtonComponent = ({ title, style, onPress }) => {
  return (
    <TouchableOpacity title={title}
      style={[{justifyContent: 'center', alignItems: 'center', paddingVertical:11, backgroundColor: '#414138', borderRadius: 6}, style]}
      onPress={onPress}>
      <Text style={{ fontSize: 17, fontWeight: '600', color: 'white'}}>{title}</Text>
    </TouchableOpacity>
  )
}

export default ButtonComponent

const styles = StyleSheet.create({})