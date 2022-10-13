import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  KeyboardAvoidingView, 
  TouchableOpacity } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react'

const Index = () => {
  return (
    <>
      <View className="w-11/12 " style={styles.mrContainer}>
        <View className="py-5 mx-auto">
          <Text className="font-bold text-sm">専門家IDを指定して相談カルテを作成する</Text>
          <Text>専門家IDをお持ちの場合</Text>
        </View>
        <View className="flex-1 flex-row justify-center items-center bg-white">
          <View className="p-4">
            <Ionicons className="text-gray-400" name="ios-search" size={20} color="#000"/>
          </View>
          <TextInput
              className="flex-1 p-4 pl-1 border-b border-gray-400 text-gray-400"
              style={styles.input}
              placeholder="専門家のIDで検索する"
              underlineColorAndroid="transparent"
          />
        </View>
        
        <View className='flex-row self-center items-center mt-4'>
          <TouchableOpacity className='py-2 w-full bg-primary rounded'>
              <Text className='text-white text-center'>専門家IDを指定する</Text>
          </TouchableOpacity>
        </View>
        
        <View className="my-5 border-b border-gray-400"></View>
        
        <View className="mx-auto">
          <Text className="font-bold text-sm">ジャンルから相談カルテを作成する </Text>
          <Text>専門家IDをお持ちでない場合</Text>
        </View>
        
        <View className="bg-white p-2 mt-5">
          <View >
            <Text className="text-gray-400">
            専門家IDをお持ちでない方は相談カルテを作成していた だいたあと、当社で対応できる専門家をお探しし、ご回 答をいたします。お電話でも専門家検索を無料でお手伝 いしております。
            </Text>
          </View>
          <View className="my-5">
            <Text className="text-primary text-center underline">
              0120-542-063（相談サポートセンター）
            </Text>
          </View>
        </View>
        
        <View className='flex-row self-center items-center mt-4'>
          <TouchableOpacity className='py-2 w-full bg-primary rounded'>
              <Text className='text-white text-center'>専門家IDを指定しない</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

export default Index

const styles = StyleSheet.create({
  mrContainer: {
    marginLeft: 'auto',
    marginRight: 'auto'
  },
});