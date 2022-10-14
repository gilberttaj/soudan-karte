import { View, Text } from 'react-native'
import React from 'react'

const PasswordChange = () => {
  return (
    <View>
      <View className='relative'>
        <TextInput className='bg-white py-4 text-right pr-4 border-b border-gray-300 mb-0.5' placeholder='6文字以上半角英数字'
          />
        <Text className='absolute pl-4 top-5'>パスワード</Text>
      </View>
      <View className='relative'>
        <TextInput className='bg-white py-4 text-right pr-4 border-b border-gray-300 mb-0.5' placeholder='6文字以上半角英数字'
          />
        <Text className='absolute pl-4 top-5'>新しいパスワード</Text>
      </View>
      <View className='relative'>
        <TextInput className='bg-white py-4 text-right pr-4 border-b border-gray-300 mb-0.5' placeholder='もう一度パスワードを入力し...'
          />
        <Text className='absolute pl-4 top-5'>確認用パスワード</Text>
      </View>
      <View className='flex-row self-center items-center mt-4'>
        <TouchableOpacity className='py-2 w-11/12 bg-primary rounded-full'>
            <Text className='text-white text-center'>変更する</Text>
        </TouchableOpacity>
      </View>
      <View className='mt-5'>
        <Text className='text-center'>パスワードをお忘れの方はこちら</Text>
      </View>
    </View>
  )
}

export default PasswordChange