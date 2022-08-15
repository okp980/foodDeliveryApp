import { useState } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, Pressable, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native'
import CustomInput from '../components/CustomInput'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as EmailValidator from 'email-validator';
import { useDispatch } from 'react-redux'
import { signInUser } from '../store/features/user/userSlice';
import { renderIcon } from '../util/helpers';


const Sigup = () => {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [usernameError, setUsernameError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [hidePassword, setHidePassword] = useState(true)
    const navigation = useNavigation()
    const dispatch = useDispatch()




    const handleEmailChange = (text) => {
        const isEmailValid = EmailValidator.validate(email);
        setEmail(text)
        if (!isEmailValid) {
            setEmailError('Invalid Email')
        } else {
            setEmailError('')
        }
    }



    const handleUsernameChange = (text) => {
        setUsername(text)
        if (username.trim().length < 3) {
            setUsernameError('username must be 3 or more characters')
        } else {
            setUsernameError('')
        }
    }
    const handlePasswordChange = (text) => {
        setPassword(text)
        if (password.trim().length < 8) {
            setPasswordError('Password must be more than 8 characters')
        } else {
            setPasswordError('')
        }
    }

    const handleSubmit = () => {
        const isEmailValid = EmailValidator.validate(email);
        if (!isEmailValid) {
            setEmailError('Invalid Email')
            return
        }
        if (password.length < 8) {
            setPasswordError('Password must be more than 8 characters')
            return
        }
        if (isEmailValid && password.length > 8) {
            // register user
            dispatch(signInUser({ email, password }))
        }
    }

    const showPasswordIcon = () => {
        return (
            <TouchableWithoutFeedback onPress={() => setHidePassword(prevState => !prevState)}>
                {hidePassword ? <Ionicons name="md-eye-off-outline" size={18} color="#666" />
                    : <Ionicons name="ios-eye-outline" size={18} color="black" />
                }
            </TouchableWithoutFeedback>
        )
    }


    return (
        <View className='flex-1 bg-purple-50'>
            <KeyboardAvoidingView behavior='height' className="flex-1">
                <SafeAreaView className='flex-1  items-center justify-center px-4'>
                    <Text className='text-xl font-poppinsBold text-purple-900'>Getting Started</Text>
                    <Text className='text-base font-poppinsRegular text-purple-700'>Create an account to continue!</Text>
                    <CustomInput
                        label='email'
                        icon={renderIcon(email, emailError)}
                        onChangeText={handleEmailChange}
                        error={emailError}
                    />
                    <CustomInput
                        label='username'
                        icon={renderIcon(username, usernameError)}
                        onChangeText={handleUsernameChange}
                        error={username.trim().length > 0 && usernameError}
                    />
                    <CustomInput
                        label='password'
                        icon={showPasswordIcon()}
                        error={passwordError}
                        onChangeText={handlePasswordChange}
                        secureTextEntry={hidePassword}
                    />

                    <View className='mt-5 w-full'>
                        <TouchableOpacity
                            disabled={email.trim() === '' || password.trim() === ''}
                            className='w-full bg-purple-600 py-3 rounded-md' onPress={handleSubmit}>
                            <Text className='text-center font-poppinsRegular text-purple-50 text-lg'>
                                Sign up
                            </Text>
                        </TouchableOpacity>

                    </View>
                    <View className='flex-row space-x-1 mt-1'>
                        <Text className='text-base text-gray-600 font-poppinsRegular'>
                            Already have an account?
                        </Text>
                        <Pressable onPress={() => navigation.navigate('SignIn')}>
                            <Text className='text-base text-purple-600 font-poppinsRegular'>Sign In</Text>
                        </Pressable>
                    </View>
                </SafeAreaView>
            </KeyboardAvoidingView>
        </View>
    )
}
export default Sigup