import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback } from 'react-native'
import React, { useRef } from 'react'
// import Icon from 'react-native-vector-icons/FontAwesome5';

const InputComponent = ({children, onChangeText, icon, style, value, placeholder, keyboardType = "default", secureTextEntry = false }) => {
    const textInput = useRef()
    const requestFocus = () => {
        console.log("On Click View")
        textInput.current.focus();
    }
    return (
        <TouchableWithoutFeedback onPress={requestFocus}>
            <View style={[styles.container, style]} >
                {/* <Icon name={icon} size={24} color="#38972E" iconStyle={{ marginRight: 20 }} /> */}
                {children}
                <TextInput
                    ref={textInput}
                    secureTextEntry={secureTextEntry}
                    style={styles.inputStyle}
                    onChangeText={onChangeText}
                    value={value}
                    placeholder={placeholder} />
            </View>
        </TouchableWithoutFeedback>
    )
}

export default InputComponent

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 20,
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor: "#00000033",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 4,
    },
    inputStyle: {
        fontSize: 16,
        marginLeft: 20,
        color: 'black'
    }
})