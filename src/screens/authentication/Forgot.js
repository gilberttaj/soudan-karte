import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const Forgot = () => {
  return (
    <View>
      <View className='relative'>
                <TextInput className='bg-white p-4 text-right pr-4 border-b border-gray-300' placeholder='メールアドレス'
                            />
                <Text className='absolute pl-4 top-3'>メールアドレス</Text>
      </View>
      <View className='flex-row self-center items-center mt-4'>
                <TouchableOpacity className='py-2 w-11/12 bg-primary rounded-full'>
                    <Text className='text-white text-center'>再設定</Text>
                </TouchableOpacity>
            </View>
    </View>
  )
}

export default Forgot