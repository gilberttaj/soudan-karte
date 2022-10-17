import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';

const PaidPlans = () => {
  const navigation = useNavigation();
  const paidPlanSignup = () => {
    navigation.navigate('PaidPlanSignup');
  }
  const paidPlanInfo = () => {
    navigation.navigate('PaidPlanInfo')
  }
  return (
    <>
      <View className=''>
        <Text className='py-3 pl-3'>ステータス(定期購読の購読状態)</Text>
      </View>
  
      <View className='bg-white flex-row border-b mb-0.5 border-gray-300'>
        <Text className='py-3 pl-3 flex-1'>未設定</Text>
      </View>
      <View className=''>
        <Text className='py-3 pl-3'>有料プランの案内</Text>
      </View>
      <TouchableOpacity className='bg-white flex-row border-b border-gray-300 mb-0.5' onPress={paidPlanSignup}>
        <Text className='py-3 pl-3 flex-1'>有料プランに登録する</Text>
        <View className='self-center pr-2'>
          <Ionicons  name='chevron-forward-outline' size={15} color='silver'/>
        </View>
      </TouchableOpacity>
      <TouchableOpacity className='bg-white flex-row border-b border-gray-300 mb-0.5' onPress={paidPlanInfo}>
        <Text className='py-3 pl-3 flex-1'>有料プランとは?</Text>
        <View className='self-center pr-2'>
          <Ionicons  name='chevron-forward-outline' size={15} color='silver'/>
        </View>
      </TouchableOpacity>
    </>
  )
}

export default PaidPlans