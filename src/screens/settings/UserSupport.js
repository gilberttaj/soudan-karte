import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const UserSupport = () => {
  return (
    <>
      <View>
        <Text className='py-3 pl-3'>メールアドレス</Text>
      </View>
  
      <View className='bg-white flex-row border-b mb-0.5 border-gray-300'>
        <Text className='py-3 pl-3 flex-1'>s.terano@gmail.com</Text>
      </View>
      <View>
        <Text className='py-3 pl-3'>お問い合わせ内容</Text>
      </View>
      <View>
        <TextInput
            multiline={true}
            numberOfLines={7}
            className="bg-white p-3 text-gray-400 mt-0.5 text-start "
            style={{textAlignVertical: 'top',}}
            placeholder="内容を入力してください"
            // underlineColorAndroid="transparent"
        />
      </View>
      <View className='flex items-center mt-3.5'>  
        <TouchableOpacity className='w-11/12 items-center rounded-full bg-primary'>
          <Text className='text-white py-3 font-semibold'>
            入力完了
          </Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default UserSupport