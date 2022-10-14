import { View, Text, Pressable } from 'react-native'
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
      <View>
        <Text>Test</Text>
      </View>
    )
    }
    </>
  )
}

export default Index