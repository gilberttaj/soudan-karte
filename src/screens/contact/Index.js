import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import Modal from "react-native-modal";
import { useSelector } from 'react-redux';



const Index = () => {
  const navigation = useNavigation();

  const hasToken = useSelector(state => state.user?.token)

  const [ isVisible, setIsVisible ] = useState(false);

  const handleCloseModal = () => {
    setIsVisible(false);
  }

  const handleShowLogin = () => {
    navigation.navigate('Login');
    setIsVisible(false);
  }

  const handleShowRegister = () => {
    navigation.navigate('AuthRegister');
    setIsVisible(false);
  }

  const handleShowModal= () => {
    if(!hasToken){
      setIsVisible(true);
    }else{
      navigation.navigate('Consultation');
    }
  }

  return (
    <>
    <View className='flex-1 justify-center items-center'>
      <View className="flex-row">
        <Image source={require('../../../assets/img_placeholder_chat.png')} style={{height:80, width:160}}/>
      </View>
      <View className="my-2">
        <Text className='text-base text-stone-500 font-bold'>まだ相談中のトークはありません</Text>
      </View>
      <View className="mb-3">
        <Text className='text-stone-600 text-center'>相談カルテを作成すると </Text>
        <Text className='text-stone-600 text-center'>専門家からメッセージが届きます</Text>
      </View>
      <View className='w-3/5 bg-primary text-white mt-2 rounded'>
        <TouchableOpacity className='bg-button text-white' onPress={handleShowModal}>
          <Text className='py-2 text-center text-white'>相談カルテを作成する</Text>
        </TouchableOpacity>
      </View>
    </View>
    <View className='justify-center items-center relative'>
      <Modal isVisible={isVisible}  onDismiss={handleCloseModal}>
        <View className='flex-row bg-neutral-100 justify-center'>
          <View className='absolute top-2 left-0'>
            <TouchableOpacity className='pl-3' onPress={handleCloseModal}>
              <Ionicons name='close-outline' size={35} color='gray'/>
            </TouchableOpacity>
          </View>
          <View className='self-center py-4'>
            <Text className='text-center text-gray-500 font-bold'>ログインが必要です</Text>
          </View>
        </View>
        <View className='bg-white'>
        <View className='mt-6'>
          <Text className='text-center'>ログイン後はすべての機能が</Text>
        </View>
        <View>
          <Text className='text-center'>お使いいただけます</Text>
        </View>

        <View className='flex-row justify-center'>  
          <TouchableOpacity className='bg-primary mt-5 w-11/12 items-center rounded' onPress={handleShowLogin}>
            <Text className='text-white py-3'>
                        ログイン
            </Text>
          </TouchableOpacity>
        </View>

        <View className='flex-row justify-center mt-3.5 mb-3.5'>  
          <TouchableOpacity className='bg-neutral-100 w-11/12 items-center rounded' onPress={handleShowRegister}>
            <Text className='text-gray-500 py-3 font-semibold'>
                      ユーザー登録する
            </Text>
          </TouchableOpacity>
        </View>
        </View>
      </Modal>
    </View>
</>
  )
}

export default Index


// const styles = StyleSheet.create({
//   chat:{
//     marginTop: -15,
//     marginLeft: -15,
//   }
// });
