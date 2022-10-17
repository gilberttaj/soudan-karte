import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const CreditCardReg = () => {
  const navigation = useNavigation();
  const creditCardInfo = () => {
    navigation.navigate('CreditCardInfo');
  }
  
  return (
    <View>
     <TouchableOpacity className='p-4 flex-row items-center bg-white' onPress={creditCardInfo}>
        <Ionicons name='add-circle' size={40} color='#17AAB1'/>
        <Text className='text-center text-xs ml-2'>クレジットカードを登録する</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CreditCardReg