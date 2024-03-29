import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  KeyboardAvoidingView, 
  Linking,
  Platform,
  TouchableOpacity } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useEffect, useLayoutEffect, useState } from 'react'
import Modal from "react-native-modal";
import { useSelector } from 'react-redux';
import { useIsFocused, useNavigation } from '@react-navigation/native';


const Index = () => {

  const navigation = useNavigation();

  const hasToken = useSelector(state => state.user?.token)

  const [ isVisible, setIsVisible ] = useState(false);

  const isFocused = useIsFocused();

  useEffect(() => {
    if(!hasToken && isFocused){
      setIsVisible(true);
    }
  },[isFocused])

  console.log(isVisible);

  const handleCloseModal = () => {
    setIsVisible(false);
    setIsModal(false);
    setIsModalNumber(false);
  }

  const handleShowLogin = () => {
    navigation.navigate('Login');
    setIsVisible(false);
  }

  const handleShowRegister = () => {
    navigation.navigate('AuthRegister');
    setIsVisible(false);
  }

  const handleShowConsultation = () => {
    if(!hasToken){
      setIsVisible(true);
    }else{
      navigation.navigate('Consultation');
    }
  }
  
  
  const handleShowModal = () => {
    setIsModal(true);
  }
  
  const [ isModal, setIsModal ] = useState(false);
  
  const [isModalNumber, setIsModalNumber] = useState(false);
  
  const handleShowModalNumber = () => {
    setIsModalNumber(true);
  }
  
  const onPressMobileNumberClick = (number) => {

    let phoneNumber = '';
    if (Platform.OS === 'android') {
      phoneNumber = `tel:${number}`;
    } else {
      phoneNumber = `telprompt:${number}`;
    }

    Linking.openURL(phoneNumber);
}
  
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
          <TouchableOpacity className='py-2 w-full bg-primary rounded' onPress={handleShowModal}>
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
            <TouchableOpacity onPress={handleShowModalNumber}>
              <Text className="text-primary text-center underline">
                0120-542-063（相談サポートセンター）
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        
        <View className='flex-row self-center items-center mt-4'>
          <TouchableOpacity className='w-full bg-primary rounded' onPress={handleShowConsultation}>
              <Text className='text-white text-center py-2'>専門家IDを指定しない</Text>
          </TouchableOpacity>
        </View>

        <View className='bg-white justify-center items-center flex-1 relative'>
            <Modal isVisible={isVisible}  onDismiss={handleCloseModal}>
              <View className='items-center flex-row bg-neutral-100 py-3 justify-center'>
                <TouchableOpacity className='pl-3 ml-auto absolute left-0' onPress={handleCloseModal}>
                  <Ionicons name='close-outline' size={35} color='gray'/>
                </TouchableOpacity>
                <View className='self-center items-center'>
                  <Text className='text-gray-500 font-bold'>ログインが必要です</Text>
                </View>
              </View>
              <View className='bg-white'>
                <View className='mt-6'>
                  <Text className='text-center'>ログイン後はすべての機能が</Text>
                </View>
                <View>
                  <Text className='text-center'>お使いいただけます</Text>
                </View>

                <View className='flex-row justify-center'>  
                  <TouchableOpacity className='bg-primary mt-5 w-11/12 items-center rounded' onPress={handleShowLogin}>
                    <Text className='text-white py-3'>
                      ログイン
                    </Text>
                  </TouchableOpacity>
                </View>

                <View className='flex-row justify-center mt-3.5 mb-3.5'>  
                  <TouchableOpacity className='bg-neutral-100 w-11/12 items-center rounded' onPress={handleShowRegister}>
                    <Text className='text-gray-500 py-3 font-semibold'>
                    ユーザー登録する
                    </Text>
                  </TouchableOpacity>
                </View>
      
              </View>
          </Modal>
      </View>
      </View>
      
      <Modal isVisible={isModal}  onDismiss={handleCloseModal}>
        <View className='bg-white p-5'>
          <View className="">
            <Text className="text-lg">入力したIDの専門家は見つかりませ んでした。</Text>
            <Text className="text-lg mt-2">IDをお確かめの上、再度入力くださ い。</Text>
          </View>
          <View className="flex-row justify-end mt-6">
            <TouchableOpacity onPress={handleCloseModal}>
              <Text className="text-base text-primary">OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      
      <Modal isVisible={isModalNumber}  onDismiss={handleCloseModal}>
        <View className='bg-white p-5'>
          <View className="">
            <Text className="text-xl font-bold">0120542063</Text>
            <Text className="text-lg mt-2">発信すると通話アプリが起動します</Text>
          </View>
          <View className="flex-row justify-end mt-6">
            <TouchableOpacity onPress={handleCloseModal}>
              <Text className="text-base mr-8 text-primary">キャンセル</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { onPressMobileNumberClick("0120542063") }}>
              <Text className="text-base text-primary">発信</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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