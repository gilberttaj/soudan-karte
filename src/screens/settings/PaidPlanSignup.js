import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const PaidPlanSignup = () => {
  return (
    <>
      <View className="px-4 py-6 bg-white">
        <View>
          <Text className="text-base">相談カルテを利用して専門家とのチャットを行う場 合は相談カルテのデータ保管料として月額1,000円 が必要となります。</Text>
        </View>
        <View className="flex-col justify-center items-center my-5">
          <Text className="text-primary text-lg font-medium">データ保管料(定期購読)</Text>
          <Text className="text-lg font-bold">月額1,000円(税別)</Text>
        </View>
        <View className='flex-row self-center items-center mt-4'>
          <TouchableOpacity className='py-3 w-full bg-primary rounded-xl'>
              <Text className='text-white text-center'>定期購読を購入する</Text>
          </TouchableOpacity>
        </View>
        <View className='flex-row self-center items-center mt-4'>
          <TouchableOpacity className='py-3 w-full bg-primary rounded-xl'>
              <Text className='text-white text-center'>復元する</Text>
          </TouchableOpacity>
        </View>
        <View className="mt-6">
          <Text className="text-center text-sm">※定期購読解除は<Text className="text-gray-400">⌈</Text>設定<Text className="text-gray-400">|</Text>アプリより行えます</Text>
        </View>
      </View>
    </>
   
  )
}

export default PaidPlanSignup