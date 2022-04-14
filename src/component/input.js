import { StyleSheet, View, TextInput, TouchableWithoutFeedback } from 'react-native'
import React, { useRef } from 'react'

const InputComponent = ({ children, onChangeText, style, value, placeholder, keyboardType = "default", secureTextEntry = false }) => {
    const textInput = useRef()
    const requestFocus = () => {
        textInput.current.focus();
    }
    return (
        <TouchableWithoutFeedback onPress={requestFocus}>
            <View style={[styles.container, style]} >
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