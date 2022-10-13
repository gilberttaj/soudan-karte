import { View, Text, TouchableOpacity, Share, Platform } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const user = null;

const Index = () => {
  const navigation = useNavigation();

  const handleShowRegister = () => {
    navigation.navigate('Register');
  }

  const handleShowLogin = () => {
    navigation.navigate('OptionLogin');
  }

  const handleShowNews = () => {
    navigation.navigate('News');
  }

  const handleShowFAQ = () => {
    navigation.navigate('FAQ');
  }

  const handleShowTerms = () => {
    navigation.navigate('Terms');
  }

  const handleShowPolicy = () => {
    navigation.navigate('Policy');
  }


  const handleShowExperts = () => {
    navigation.navigate('Experts');
  }

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
        Platform.OS === 'android' ? 'https://play.google.com/store/apps/details?id=com.soudankarte.nlinfo' : 'https://apps.apple.com/app/id1444264234',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };


  return (
    <>
    { !user ? 
      (
      <View className>
      <View className=''>
        <Text className='py-3 pl-3'>アカウント</Text>
      </View>

        <TouchableOpacity className='bg-white flex-row border-b mb-0.5 border-gray-300' onPress={handleShowRegister}>
          <Text className='py-3 pl-3 flex-1'>会員登録</Text>
          <View className='self-center pr-2'>
            <Ionicons  name='chevron-forward-outline' size={15} color='silver'/>
          </View>
        </TouchableOpacity>


      <TouchableOpacity className='bg-white flex-row border-b border-gray-300' onPress={handleShowLogin}>
        <Text className='py-3 pl-3 flex-1'>ログイン</Text>
        <View className='self-center pr-2'>
          <Ionicons  name='chevron-forward-outline' size={15} color='silver'/>
        </View>
      </TouchableOpacity>
      <View className=''>
        <Text className='py-3 pl-3'>情報</Text>
      </View>
      <TouchableOpacity className='bg-white border-b border-gray-300 mb-0.5' onPress={handleShowNews}>
        <Text className='py-3 pl-3'>お知らせ</Text>
      </TouchableOpacity>
      <TouchableOpacity className='bg-white flex-row border-b border-gray-300 mb-0.5' onPress={handleShowFAQ}>
        <Text className='py-3 pl-3 flex-1'>よくある質問</Text>
        <View className='self-center pr-2'>
          <Ionicons  name='chevron-forward-outline' size={15} color='silver'/>
        </View>
      </TouchableOpacity>
      <TouchableOpacity className='bg-white flex-row border-b border-gray-300 mb-0.5' onPress={handleShowTerms}>
        <Text className='py-3 pl-3 flex-1'>利用規約</Text>
        <View className='self-center pr-2'>
          <Ionicons  name='chevron-forward-outline' size={15} color='silver'/>
        </View>
      </TouchableOpacity>
      <TouchableOpacity className='bg-white flex-row border-b border-gray-300 mb-0.5' onPress={handleShowPolicy}>
        <Text className='py-3 pl-3 flex-1'>プライバシーポリシー</Text>
        <View className='self-center pr-2'>
          <Ionicons  name='chevron-forward-outline' size={15} color='silver'/>
        </View>
      </TouchableOpacity>
      <TouchableOpacity className='bg-white flex-row border-b border-gray-300' onPress={onShare}>
        <Text className='py-3 pl-3 flex-1'>相談カルテを友達にオススメする</Text>
        <View className='self-center pr-2'>
          <Ionicons  name='chevron-forward-outline' size={15} color='silver'/>
        </View>
      </TouchableOpacity>
      <View className=''>
        <Text className='py-3 pl-3'></Text>
      </View>
      <TouchableOpacity className='bg-white flex-row border-b border-gray-300 mb-0.5' onPress={handleShowExperts}>
        <Text className='py-3 pl-3 flex-1'>専門家の方はこちら</Text>
        <View className='self-center pr-2'>
          <Ionicons  name='chevron-forward-outline' size={15} color='silver'/>
        </View>
      </TouchableOpacity>
    </View>
      )
      :
      (
        <View>
          <Text>Test</Text>
        </View>
      )
    }
    </>
  )
}

export default Index