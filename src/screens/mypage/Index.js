import { View, Text, Pressable, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const Index = () => {

  const hasToken = useSelector(state => state.user?.token)

  const navigation = useNavigation();
  const showHandleLogin = () => {
    navigation.navigate('Login');
  }

  const handleShowConsultation = () => {
    navigation.navigate('Consultation');
  }


  return (
    <>
    {
    !hasToken ? 
    (
    <View className='flex-1 justify-center items-center'>
      <View>
        <Ionicons name='person-outline' size={65} color='gray'/>
      </View>
      <View>
        <Text className='text-gray-700'>ログイン</Text>
      </View>
      <View>
        <Text className='text-sm mt-2 text-gray-600'>ログインをして相談を始めましょう</Text>
      </View>
      <View className='w-3/5 bg-primary text-white mt-2 rounded'>
        <TouchableOpacity className='bg-button text-white' onPress={showHandleLogin}>
          <Text className='py-2 text-center text-white'>ログイン</Text>
        </TouchableOpacity>
      </View>
    </View>
    )
    :
    (
      <>
        <View className="border-b mt-4 pb-4 border-gray-400">
          <View className="flex-row ml-5 items-center">
            <Image
              source={require('../../../assets/profile.png')}
              className="w-28 h-28 rounded-full mr-5"
            />
            <Text>寺野慎太郎</Text>
          </View>
        </View>
        <View className='flex-1 justify-center items-center'>
          <View className="my-2">
            <Text className='text-base text-stone-500 font-bold'>作成したカルテはありません</Text>
          </View>
          <View className="mb-3">
            <Text className='text-stone-600 text-center'>相談カルテを作成してみましょう </Text>
          </View>
          <View className='w-3/5 bg-primary text-white mt-2 rounded'>
            <TouchableOpacity className='bg-button text-white' onPress={handleShowConsultation}>
              <Text className='py-2 text-center text-white'>相談カルテを作成する</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    )
    }
    </>
  )
}

export default Index