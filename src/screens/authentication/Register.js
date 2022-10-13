import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import Checkbox from 'expo-checkbox';
import { useNavigation } from '@react-navigation/native';

const Register = () => {
  const navigation = useNavigation();
  const [isChecked, setChecked] = useState(false);

  const handleShowTerms = () => {
    navigation.navigate('AuthTerms');
  }

  const handleShowLogin = () => {
    navigation.navigate('Login');
  }

  return (
    <View>
      <View>
        <Text className='pl-4 py-2'>アカウント情報(必須)</Text>
      </View>
      <View className='relative'>
        <TextInput className='bg-white py-4 text-right pr-4 border-b border-gray-300 mb-0.5' placeholder='姓'
          />
        <Text className='absolute pl-4 top-5'>姓</Text>
      </View>
      <View className='relative'>
        <TextInput className='bg-white py-4 text-right pr-4 border-b border-gray-300 mb-0.5' placeholder='名'
          />
        <Text className='absolute pl-4 top-5'>名</Text>
      </View>
      <View className='relative'>
        <TextInput className='bg-white py-4 text-right pr-4 border-b border-gray-300 mb-0.5' placeholder='メールアドレス、電話番号 (ハイフン無し)'
          />
        <Text className='absolute pl-4 top-5'>ID</Text>
      </View>
      <View className='relative'>
        <TextInput className='bg-white py-4 text-right pr-4 border-b border-gray-300 mb-0.5' placeholder='6文字以上半角英数字'
          />
        <Text className='absolute pl-4 top-5'>パスワード</Text>
      </View>
      <View className='relative'>
        <TextInput className='bg-white py-4 text-right pr-4 border-b border-gray-300 mb-0.5' placeholder='もう一度パスワードを入力し...'
          />
        <Text className='absolute pl-4 top-5'>確認用パスワード</Text>
      </View>
      <View>
        <Text className='pl-4 py-2'>入会コード(任意)</Text>
      </View>
      <View className='relative'>
        <TextInput className='bg-white py-4 text-right pr-4' placeholder='半角英数字'
          />
        <Text className='absolute pl-4 top-5'>相談ID/専門家ID</Text>
      </View>
      <View>
        <Text className='pl-4 pt-2 pb-5 text-xs'>※入会コードを入力いただくことで全機能をご利用いただけます</Text>
      </View>
      <View className='bg-white'>
        <View className='flex-row py-4'>
          <Checkbox className='ml-4 mr-5' value={isChecked} onValueChange={setChecked} />
          <Text className='underline text-primary' onPress={handleShowTerms}>利用規約</Text>
          <Text>に同意する</Text>
        </View>
      </View>
      <View className='flex-row self-center items-center mt-4'>
                <TouchableOpacity className='py-2 w-11/12 bg-primary rounded-full'>
                    <Text className='text-white text-center'>登録する</Text>
                </TouchableOpacity>
      </View>
      <View className='mt-5'>
        <Text className='text-center' onPress={handleShowLogin}>アカウントをお持ちの方はこちら</Text>
      </View>
    </View>

  )
}

export default Register