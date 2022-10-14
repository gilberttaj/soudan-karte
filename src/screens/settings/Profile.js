import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'

const Profile = () => {
  return (
    <View>
      <View className='relative'>
        <TextInput className='bg-white py-4 text-right pr-4 border-b border-gray-300 mb-0.5' placeholder='寺野'
          />
        <Text className='absolute pl-4 top-5'>姓</Text>
      </View>
      <View className='relative'>
        <TextInput className='bg-white py-4 text-right pr-4 border-b border-gray-300 mb-0.5' placeholder='慎太郎'
          />
        <Text className='absolute pl-4 top-5'>名</Text>
      </View>
      <View className='bg-white py-4 border-b border-gray-300 mb-0.5'>
        <Text className='pl-4'>写真を変更する</Text>
      </View>
      <View className='flex-row self-center items-center mt-4'>
        <TouchableOpacity className='py-2 w-11/12 bg-primary rounded-full'>
            <Text className='text-white text-center'>変更</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Profile