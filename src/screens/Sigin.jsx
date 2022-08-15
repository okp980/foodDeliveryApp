import { useState } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, Pressable, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native'
import CustomInput from '../components/CustomInput'
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import CustomToggle from '../components/CustomToggle';
import { useNavigation } from '@react-navigation/native';
import * as EmailValidator from 'email-validator';
import { useDispatch } from 'react-redux'
import { signInUser } from '../store/features/user/userSlice';
import { renderIcon } from '../util/helpers';


const Sigin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [hidePassword, setHidePassword] = useState(true)
    const [isEmptyFields, setIsEmptyFields] = useState(true)
    const [save, setSave] = useState(false)
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
                    <Text className='text-xl font-poppinsBold text-purple-900'>Let's Sign You in</Text>
                    <Text className='text-base font-poppinsLight text-purple-700'>Welcome back, you've been missed</Text>
                    <CustomInput
                        label='email'
                        icon={renderIcon(email, emailError)}
                        onChangeText={handleEmailChange}
                        error={emailError}
                    />
                    <CustomInput
                        label='password'
                        icon={showPasswordIcon()}
                        error={passwordError}
                        onChangeText={handlePasswordChange}
                        secureTextEntry={hidePassword}
                    />
                    <View className='flex-row justify-between w-full items-center'>
                        <CustomToggle
                            save={save}
                            onSetSave={setSave}
                        />
                        <TouchableWithoutFeedback onPress={() => navigation.navigate('Recover Password')}>
                            <Text className='text-base text-gray-700 font-poppinsRegular'>
                                Forgot Password
                            </Text>
                        </TouchableWithoutFeedback>
                    </View>
                    <View className='mt-5 w-full'>
                        <TouchableOpacity
                            disabled={email.trim() === '' || password.trim() === ''}
                            className='w-full bg-purple-600 py-3 rounded-md' onPress={handleSubmit}>
                            <Text className='text-center font-poppinsRegular text-purple-50 text-lg'>
                                Sign in
                            </Text>
                        </TouchableOpacity>

                    </View>
                    <View className='flex-row space-x-1 mt-1'>
                        <Text className='font-poppinsRegular text-base text-gray-600 '>
                            Don't have an account?
                        </Text>
                        <Pressable onPress={() => navigation.navigate('SignUp')}>
                            <Text className='text-base text-purple-600 font-poppinsRegular'>Sign Up</Text>
                        </Pressable>
                    </View>
                </SafeAreaView>
            </KeyboardAvoidingView>
        </View>
    )
}
export default Sigin