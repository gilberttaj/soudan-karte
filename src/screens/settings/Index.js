import { 
  View, 
  Text, 
  TouchableOpacity, 
  Share, 
  Platform, 
  ScrollView, 
  Switch 
} from 'react-native'
import React, { useState, useEffect } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { logout } from '../../redux/userSlice';
import { useSelector, useDispatch } from 'react-redux';
import Modal from "react-native-modal";


const Index = () => {

  const hasToken = useSelector(state => state.user?.token)
  
  const dispatch = useDispatch();
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

  const handleShowProfile = () => {
    navigation.navigate('Profile');
  }

  const handleShowEmailChange = () => {
    navigation.navigate('EmailChange');
  }

  const handleShowPasswordChange = () => {
    navigation.navigate('PasswordChange');
  }

  const handleShowCreditCardReg = () => {
    navigation.navigate('CreditCardReg');
  }

  const handleShowPaidPlans = () => {
    navigation.navigate('PaidPlans');
  }
  
  const handleShowUserSupport= () => {
    navigation.navigate('UserSupport');
  }



  const handleLogout = () => {
    dispatch(logout());
    navigation.navigate('MypageAuth' , { screen: 'Contact' });
  }

  const handleCloseModal = () => {
    setIsVisible(false);
  }
  
  const handleShowModal = () => {
    setIsVisible(true);
  }
  
  const [ isVisible, setIsVisible ] = useState(false);
  
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const onShare = async () => {
    const iOS = 'https://apps.apple.com/app/id1444264234';
    const android = 'https://play.google.com/store/apps/details?id=com.soudankarte.nlinfo';
    try {
      const result = await Share.share({
        message: `for iOS ${iOS}
for Android ${android}`
    
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
    { !hasToken ? 
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
      <ScrollView className>
        <View className=''>
          <Text className='py-3 pl-3'>アカウント</Text>
        </View>
  
          <TouchableOpacity className='bg-white flex-row border-b mb-0.5 border-gray-300' onPress={handleShowProfile}>
            <Text className='py-3 pl-3 flex-1'>プロフィール設定</Text>
            <View className='self-center pr-2'>
              <Ionicons  name='chevron-forward-outline' size={15} color='silver'/>
            </View>
          </TouchableOpacity>
  
  
        <TouchableOpacity className='bg-white flex-row border-b border-gray-300 mb-0.5' onPress={handleShowEmailChange}>
          <Text className='py-3 pl-3 flex-1'>メールアドレス変更</Text>
          <View className='self-center pr-2'>
            <Ionicons  name='chevron-forward-outline' size={15} color='silver'/>
          </View>
        </TouchableOpacity>

        <TouchableOpacity className='bg-white flex-row border-b border-gray-300 mb-0.5' onPress={handleShowPasswordChange}>
          <Text className='py-3 pl-3 flex-1'>パスワード変更</Text>
          <View className='self-center pr-2'>
            <Ionicons  name='chevron-forward-outline' size={15} color='silver'/>
          </View>
        </TouchableOpacity>

        <View className='bg-white flex-row border-b border-gray-300 mb-0.5' onPress={handleShowLogin}>
          <Text className='py-3 pl-3 flex-1'>Push通知を受け取る</Text>
          <View className='self-center pr-2'>
          <Switch
              trackColor={{ false: "#767577", true: "#C3E9EB" }}
              thumbColor={isEnabled ? "#17A7AE" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>

        <TouchableOpacity className='bg-white flex-row border-b border-gray-300 mb-0.5' onPress={handleShowCreditCardReg}>
          <Text className='py-3 pl-3 flex-1'>クレジットカード登録</Text>
          <View className='self-center pr-2'>
            <Ionicons  name='chevron-forward-outline' size={15} color='silver'/>
          </View>
        </TouchableOpacity>

        <TouchableOpacity className='bg-white flex-row border-b border-gray-300 mb-0.5' onPress={handleShowPaidPlans}>
          <Text className='py-3 pl-3 flex-1'>有料プラン</Text>
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
        <TouchableOpacity className='bg-white flex-row border-b border-gray-300 mb-0.5' onPress={handleShowUserSupport}>
          <Text className='py-3 pl-3 flex-1'>ユーザーサポート</Text>
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
          <Text className='py-2.5 pl-3'>その他</Text>
        </View>
  
        <TouchableOpacity className='bg-white flex-row border-b border-gray-300 mb-0.5' onPress={handleLogout}>
          <Text className='py-3 pl-3 flex-1'>ログアウト</Text>
          <View className='self-center pr-2'>
            <Ionicons  name='chevron-forward-outline' size={15} color='silver'/>
          </View>
        </TouchableOpacity>

        <View className=''>
          <Text className='py-2.5 pl-3'></Text>
        </View>

        <TouchableOpacity className='bg-white flex-row border-b border-gray-300 mb-1' onPress={handleShowModal}>
          <Text className='py-3 pl-3 flex-1'>相談カルテを削除する</Text>
          <View className='self-center pr-2'>
            <Ionicons  name='chevron-forward-outline' size={15} color='silver'/>
          </View>
        </TouchableOpacity>
      </ScrollView>
      )
    }
     
        <Modal isVisible={isVisible}  onDismiss={handleCloseModal}>
          <View className='bg-white p-5'>
            <View className="">
              <Text className="text-lg">本当に相談カルテを削除します か?</Text>
              <Text className="text-lg mt-2">これまでのトーク履歴が消えてしま いますのでご注意ください。</Text>
            </View>
            <View className="flex-row justify-between mt-6">
              <TouchableOpacity onPress={handleCloseModal}>
                <Text className="text-base text-primary">キャンセル</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleCloseModal}>
                <Text className="text-base text-primary">削除</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
    </>
  )
}

export default Index