import { View, Text, StyleSheet } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import React from 'react'

const Index = () => {
  const navigation = useNavigation();
  const functionName = () => {
    console.log('gwapito')
  }

  return (
    <View className='flex-1 justify-center items-center'>
      <View className="flex-row ml-8">
        <Ionicons name='person-outline' size={80} color='gray'/>
        <Ionicons name="chatbox-outline" style={styles.chat} size={55} color="gray"/>
      </View>
      <View className="my-2">
        <Text className='text-base text-stone-500 font-bold'>まだ相談中のトークはありません</Text>
      </View>
      <View className="mb-3">
        <Text className='text-stone-600 text-center'>相談カルテを作成すると </Text>
        <Text className='text-stone-600 text-center'>専門家からメッセージが届きます</Text>
      </View>
      <View className='w-3/5 bg-primary text-white mt-2 rounded'>
        <TouchableOpacity className='bg-button text-white' onPress={functionName}>
          <Text className='py-2 text-center text-white'>相談カルテを作成する</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Index


const styles = StyleSheet.create({
  chat:{
    marginTop: -15,
    marginLeft: -15,
  }
});
