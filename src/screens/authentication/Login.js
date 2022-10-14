import { View, Text, TextInput,TouchableOpacity, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { set } from 'react-native-reanimated';
import { useSelector, useDispatch } from 'react-redux';
import { login, reset } from '../../redux/userSlice';
import AppLoader from '../../components/AppLoader';


const Login = () => {

    const hasToken = useSelector(state => state.user?.token)

    const [ isIdEmpty, setIsIdEmpty ] = useState(false);
    const [ isPasswordEmpty, setIsPasswordEmpty ] = useState(false);

    const [ id, onChangeId ] = useState('');
    const [ password, onChangePassword ] = useState('');

    const {isError, message, isLoading, token, isLogInError , isLogInMessage} = useSelector(state => state.user)

    const navigation = useNavigation();
    const dispatch = useDispatch();

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


    useEffect(() => {
        if(isLogInError && isLogInMessage != null){
            console.log('error executed');
            Alert.alert('Oops!', message, [{text: 'Understood', onPress: () => {
            console.log('alert closed!');
            }}]);
        }
        dispatch(reset())
    }, [isLogInError, isLogInMessage])  


    useEffect(() => {
        if(hasToken){
            navigation.navigate('MypageAuth' , { screen: 'Contact' });
        }
    }, [hasToken])

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

        const formData = {
            email: id,
            password: password,
        }

        dispatch(login(formData));
    }

    if(isLoading){
        return <AppLoader/>
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