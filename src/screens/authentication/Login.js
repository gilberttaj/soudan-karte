import { View, Text, TextInput,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { set } from 'react-native-reanimated';


const Login = () => {

    const [ isIdEmpty, setIsIdEmpty ] = useState(false);
    const [ isPasswordEmpty, setIsPasswordEmpty ] = useState(false);

    const [ id, onChangeId ] = useState('');
    const [ password, onChangePassword ] = useState('');

    const navigation = useNavigation();

    const handleShowForgot = () => {
        navigation.navigate('Forgot');
    }

    const handleShowRegister = () => {
        navigation.navigate('AuthRegister');
    }

    useState(() => {
        setIsIdEmpty(false)
        setIsPasswordEmpty(false)
    },[])

    const handleLogin = () => {
        if(!id.trim()){
            setIsIdEmpty(true)
        }else{
            setIsIdEmpty(false)
        }

        if(!password.trim()){
            setIsPasswordEmpty(true)
        }else{
            setIsPasswordEmpty(false)
        }
    }

    return (
        <View>
            <View className='relative'>
                <TextInput className='bg-white p-2 text-right pr-4 border-b border-gray-300' placeholder='メールアドレス、電話番号(ハイフン無し)'
                            onChangeText={onChangeId}
                            value={id}/>
                <Text className='absolute pl-4 top-3'>ID</Text>
                { isIdEmpty && 
                <View className='absolute top-3 right-0 pr-2'>
                    <Ionicons name='alert-circle-outline' size={25} color='red'/>
                </View>
                }   
            </View>
            <View className='relative'>
                <TextInput className='bg-white p-2 text-right pr-4 border-b border-gray-300' placeholder='6文字以上半角英数字'
                                onChangeText={onChangePassword}
                                value={password}
                                secureTextEntry={true}/>
                <Text className='absolute pl-4 top-3'>パスワード</Text>
                { isPasswordEmpty && 
                <View className='absolute top-3 right-0 pr-2'>
                    <Ionicons name='alert-circle-outline' size={25} color='red'/>
                </View>
                }
            </View>
            <View className='flex-row self-center items-center mt-4'>
                <TouchableOpacity className='py-1.5 w-11/12 bg-primary rounded-full' onPress={handleLogin}>
                    <Text className='text-white text-center'>ログイン</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity className='mt-6' onPress={handleShowForgot}>
                <Text className='text-center text-primary text-xs'>パスワードをお忘れの方はこちら</Text>
            </TouchableOpacity>
            <TouchableOpacity className='mt-7' onPress={handleShowRegister}>
                <Text className='text-center text-primary text-xs'>ユーザー登録はこちら</Text>
            </TouchableOpacity>

        </View>
    )
}

export default Login