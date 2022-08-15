import { useState } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import CustomInput from '../components/CustomInput'
import { useNavigation } from '@react-navigation/native';
import * as EmailValidator from 'email-validator';
import { useDispatch } from 'react-redux'
import { renderIcon } from '../util/helpers';
import { StatusBar } from 'expo-status-bar';


const RecoverPassword = () => {
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')
    const navigation = useNavigation()


    const handleEmailChange = (text) => {
        const isEmailValid = EmailValidator.validate(email);
        setEmail(text)
        if (!isEmailValid) {
            setEmailError('Invalid Email')
        } else {
            setEmailError('')
        }
    }



    const handleSubmit = () => {
        const isEmailValid = EmailValidator.validate(email);
        if (!isEmailValid) {
            setEmailError('Invalid Email')
            return
        }
        navigation.navigate('SignIn')
    }



    return (
        <View className='flex-1 bg-purple-50'>
            <StatusBar style='dark' />
            <SafeAreaView className='flex-1'>
                <KeyboardAvoidingView behavior='height' className="flex-1 items-center justify-center px-4 py-12">
                    <View className='flex-1 mt-6'>
                        <Text className='text-xl font-poppinsBold text-purple-900 text-center'>Password Recovery</Text>
                        <Text className='text-base font-poppinsRegular text-purple-700 text-center'>Please enter your email address to recover your password</Text>
                        <View className='flex-row'>
                            <CustomInput
                                label='email'
                                icon={renderIcon(email, emailError)}
                                onChangeText={handleEmailChange}
                                error={emailError}
                            />
                        </View>
                    </View>

                    <View className='mt-5 w-full'>
                        <TouchableOpacity
                            disabled={email.trim() === ''}
                            className='w-full bg-purple-600 py-3 rounded-md' onPress={handleSubmit}>
                            <Text className='font-poppinsRegular text-center text-purple-50 text-lg'>
                                Send Email
                            </Text>
                        </TouchableOpacity>

                    </View>

                </KeyboardAvoidingView>
            </SafeAreaView>
        </View>
    )
}
export default RecoverPassword