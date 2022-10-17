import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'

const CreditCardInfo = () => {
  return (
    <>
      <View className="p-5">
        <Text className="text-center text-base">ご利用可能なクレジットカード</Text>
        <View className="flex-row mt-4 justify-between mx-6">
          <Image
            source={require('../../../assets/img_cc_visa.png')}
            className="w-11 h-11"
          />
          <Image
            source={require('../../../assets/img_cc_master.png')}
            className="w-11 h-11"
          />
          <Image
            source={require('../../../assets/img_cc_jcb.png')}
            className="w-11 h-11"
          />
          <Image
            source={require('../../../assets/img_cc_diners.png')}
            className="w-11 h-11"
          />
          <Image
            source={require('../../../assets/img_cc_discover.png')}
            className="w-11 h-11"
          />
        </View>
      </View>
      <View className="flex-1 bg-white py-6 px-4">
        <View className="mb-3">
          <Text>有効期限(月/年)</Text>
          <TextInput
              className="p-4 pl-1r text-gray-400 mt-3 rounded-md"
              placeholder="12/25"
              underlineColorAndroid="transparent"
              style={styles.input}
          />
        </View>
        <View className="flex-row gap-2">
          <View className="flex-auto w-60">
            <Text>カード番号</Text>
            <TextInput
                className="p-4 pl-1r text-gray-400 mt-3 rounded-md"
                placeholder="ハイフンやスペースを入れずに数字のみご入"
                underlineColorAndroid="transparent"
                style={styles.input}
            />
          </View>
          <View  className="flex-auto w-40">
            <Text>セキュリティコード</Text>
            <TextInput
                className="p-4 pl-1r text-gray-400 mt-3 rounded-md"
                underlineColorAndroid="transparent"
                style={styles.input}
            />
          </View>
        </View>
        <View className='flex-row justify-center mt-3.5 mb-3.5'>  
          <TouchableOpacity className='w-11/12 items-center rounded-full bg-primary'>
            <Text className='text-white py-3 font-semibold'>
            このクレジットカードを使用する
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      
    </>
  )
}

export default CreditCardInfo

const styles = StyleSheet.create({
  input: {
   backgroundColor: '#f2f2f2',
  },
});