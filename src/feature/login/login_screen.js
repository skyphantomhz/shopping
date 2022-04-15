
import React, { useState } from 'react'
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import LockSVG from '../../assets/icons/ic_lock.svg'
import EmailSVG from '../../assets/icons/ic_email.svg'

import { Colors } from 'react-native/Libraries/NewAppScreen';

import InputComponent from '../../component/input'
import ButtonComponent from '../../component/button'

const LoginScreen = ({ navigation }) => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : 'white',
    };

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const goRegisterScreen = () => {
        navigation.navigate("Register")
    }

    const goOnboardingScreen = () => {
        navigation.navigate("Onboarding")
    }
    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', position: 'absolute', top: 110, left: 25 }}>
                    <Text style={styles.labelTitle}>Sign</Text>
                    <Text style={[styles.labelTitle, { color: '#38972E', marginLeft: 10 }]}>IN</Text>
                </View>
                <View style={styles.inputContainer}>
                    <InputComponent style={styles.inputEmail} onChangeText={setEmail} value={email} placeholder={"Email"} keyboardType={"email-address"}>
                        <EmailSVG width={24} height={24} />
                    </InputComponent>
                    <InputComponent style={styles.inputPassword} onChangeText={setPassword} value={password} placeholder={"Password"} secureTextEntry={true}>
                        <LockSVG width={24} height={24} />
                    </InputComponent>
                </View>
                <ButtonComponent title="Sign In"
                    onPress={goOnboardingScreen} style={styles.buttonSignIn} />
                <View style={{ flexDirection: 'row', position: 'absolute', bottom: 0, alignSelf: 'center' }}>
                    <Text style={styles.textSignUp}>Don’t have account? </Text>
                    <Pressable onPress={goRegisterScreen}>
                        <Text style={[styles.textSignUp, { color: '#38972E', marginLeft: 2 }]}>Sign Up</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView >
    )
}

export default LoginScreen

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
    inputEmail: {
        marginTop: 34
    },
    inputPassword: {
        marginTop: 34
    },
    labelTitle: {
        fontSize: 40,
        fontWeight: '500',
        color: 'black'
    },
    textSignUp: {
        fontSize: 16,
        fontWeight: '600',
        color: '#828282'
    },
    buttonSignIn: {
        marginHorizontal: 25, bottom: '15%', start: 0, end: 0, position: 'absolute'
    }
});