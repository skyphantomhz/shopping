import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import LockSVG from '../../assets/icons/ic_lock.svg'
import EmailSVG from '../../assets/icons/ic_email.svg'
import ProfileSVG from '../../assets/icons/ic_profile.svg'

import InputComponent from '../../component/input'
import ButtonComponent from '../../component/button'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'

const RegisterScreen = ({ navigation }) => {
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [agreeTerms, setAgreeTerms] = useState(false)

    const onPressAgree = () => {
        const currentDessions = agreeTerms
        setAgreeTerms(!agreeTerms)
    }
    const goLoginScreen = () => {
        navigation.goBack()
    }
    return (
        <SafeAreaView style={{ backgroundColor: 'white' }}>
            <View style={styles.container}>
                <View style={{ position: 'absolute', top: 110, left: 25 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.labelTitle}>Sign</Text>
                        <Text style={[styles.labelTitle, { color: '#38972E', marginLeft: 10 }]}>Up</Text>
                    </View>
                    <Text style={styles.subTitle}>Create a new account!</Text>
                </View>
                <View style={styles.inputContainer}>
                    <InputComponent style={styles.inputConponent} onChangeText={setFullName} value={fullName} placeholder={"Full name"}>
                        <ProfileSVG width={24} height={24} />
                    </InputComponent>
                    <InputComponent style={styles.inputConponent} onChangeText={setEmail} value={email} placeholder={"Email"} keyboardType={"email-address"}>
                        <EmailSVG width={24} height={24} />
                    </InputComponent>
                    <InputComponent style={styles.inputConponent} onChangeText={setPassword} value={password} placeholder={"Password"} secureTextEntry={true}>
                        <LockSVG width={24} height={24} />
                    </InputComponent>
                    <InputComponent style={styles.inputConponent} onChangeText={setConfirmPassword} value={confirmPassword} placeholder={"Confirm Password"} secureTextEntry={true}>
                        <LockSVG width={24} height={24} />
                    </InputComponent>
                    <Pressable onPress={onPressAgree}>
                        <View style={{ marginTop: 16, flexDirection: 'row' }}>
                            <View style={{ width: 12, height: 12, backgroundColor: agreeTerms ? '#38972E' : 'white', borderWidth: 1, borderColor: agreeTerms ? '#38972E' : '#828282', alignSelf: 'center' }} />
                            <Text style={{ color: '#828282', marginLeft: 10 }}>Agree with trams and condition.</Text>
                        </View>
                    </Pressable>
                </View>
                <ButtonComponent title="Sign Up"
                    onPress={() => { console.log("Clicked") }} style={styles.buttonSignIn} />
                <View style={{ flexDirection: 'row', position: 'absolute', bottom: 0, alignSelf: 'center' }}>
                    <Text style={styles.textSignUp}>Have an account? </Text>
                    <Pressable onPress={goLoginScreen}>
                        <Text style={[styles.textSignUp, { color: '#38972E', marginLeft: 2 }]}>Log In</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView >
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        height: '100%',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    inputContainer: {
        marginHorizontal: 25,
        flexDirection: 'column',
    },
    inputConponent: {
        marginTop: 14
    },
    labelTitle: {
        fontSize: 40,
        fontWeight: '500',
        color: 'black'
    },
    subTitle: {
        fontSize: 24,
        fontWeight: '400',
        color: '#828282'
    },
    textSignUp: {
        fontSize: 16,
        fontWeight: '600',
        color: '#828282'
    },
    buttonSignIn: {
        marginHorizontal: 25, bottom: '15%', start: 0, end: 0, position: 'absolute'
    }
})