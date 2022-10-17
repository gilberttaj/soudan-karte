import React, { useLayoutEffect } from 'react'
import { SafeAreaView, StyleSheet, Text, View, Icon, TouchableOpacity, Easing, Animated, Image } from 'react-native';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MedicalRecordScreen from '../screens/medicalRecords/Index';
import ContactScreen from '../screens/contact/Index';
import MypageScreen from '../screens/mypage/Index';
import OptionScreen from '../screens/settings/Index';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createStackNavigator, TransitionPresets, } from '@react-navigation/stack';
import LoginScreen from '../screens/authentication/Login';
import RegisterScreen from '../screens/authentication/Register';
import NewsScreeen from '../screens/settings/News';
import FAQScreen from '../screens/settings/FAQ';
import TermsScreen from '../screens/settings/Terms';
import PolicyScreen from '../screens/settings/Policy';
import RecommendScreen from '../screens/settings/Recommend';
import ExpertsScreen from '../screens/settings/Experts';
import ForgotScreen from '../screens/authentication/Forgot';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react';
import { checkHasToken } from '../redux/userSlice';
import ProfileScreen from '../screens/settings/Profile';
import EmailChangeScreen from '../screens/settings/EmailChange';
import PasswordChangeScreen from '../screens/settings/PasswordChange';
import CreditCardRegScreen from '../screens/settings/CreditCardReg';
import PaidPlanScreen from '../screens/settings/PaidPlans';
import PaidPlanInfoScreen from '../screens/settings/PaidPlanInfo';
import PaidPlanSignupScreen from '../screens/settings/PaidPlanSignup';
import ConsultationScreen from '../screens/contact/Consultation';
import CreditCardInfoScreen from '../screens/settings/CreditCardInfo';
import { imageUrl } from '../../assets/Icons';




const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();



const MedicalRecordsStack = () => {
    return(
    <Stack.Navigator
        options={{ 
        gestureEnabled: true,
        gestureDirection: "horizontal",
        ...TransitionPresets.SlideFromRightIOS
    }}>
        <Stack.Screen name="MedicalRecordScreen" component={MedicalRecordScreen} options={{headerShown:false}}/>
    </Stack.Navigator>
    )
}

const ContactStack = () => {
    return(
    <Stack.Navigator
        options={{ 
        gestureEnabled: true,
        gestureDirection: "horizontal",
        ...TransitionPresets.SlideFromRightIOS
        }}
    >
        <Stack.Screen name="ContactScreen" component={ContactScreen} options={{headerShown:false}}/>
    </Stack.Navigator>
    )
}


const MypageStack = () => {
    return(
    <Stack.Navigator
    options={{ 
        gestureEnabled: true,
        gestureDirection: "horizontal",
        ...TransitionPresets.SlideFromRightIOS
    }}>
        <Stack.Screen name="MypageScreen" component={MypageScreen} options={{headerShown:false}}/>
    </Stack.Navigator>
    )
}

const OptionStack = () => {
    return(
    <Stack.Navigator
    screenOptions={{ 
        gestureEnabled:true,
        gestureDirection: 'horizontal',
        ...TransitionPresets.SlideFromRightIOS,
        headerStyle: {
        backgroundColor: '#675251',
        },
        headerTintColor: '#fff'
    }}
    >
        <Stack.Screen name="Settings" component={OptionScreen} options={{ title: '設定' }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ title: '会員登録' }} />
        <Stack.Screen name="OptionLogin" component={LoginScreen} options={{ title: 'ログイン' }} />
        <Stack.Screen name="News" component={NewsScreeen} options={{ title: 'お知らせ' }} />
        <Stack.Screen name="FAQ" component={FAQScreen} options={{ title: 'よくある質問' }} />
        <Stack.Screen name="Terms" component={TermsScreen} options={{ title: '利用規約' }} />
        <Stack.Screen name="Policy" component={PolicyScreen} options={{ title: 'プライバシーポリシー' }} />
        <Stack.Screen name="Recommend" component={RecommendScreen} options={{ title: '相談カルテを友達にオススメする' }} />
        <Stack.Screen name="Experts" component={ExpertsScreen} options={{ title: '専門家の方はこちら' }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'プロフィール設定' }} />
        <Stack.Screen name="EmailChange" component={EmailChangeScreen} options={{ title: 'メールアドレス変更' }} />
        <Stack.Screen name="PasswordChange" component={PasswordChangeScreen} options={{ title: 'パスワード変更' }} />
        <Stack.Screen name="CreditCardReg" component={CreditCardRegScreen} 
            options={{ 
                title: 'クレジットカード登録',
                    headerRight: () => (
                    <Text className="text-white mr-2">編集</Text>
                  ),
            }} 
            
        />
        <Stack.Screen name="CreditCardInfo" component={CreditCardInfoScreen} options={{ title: 'クレジットカードの追加' }} />
        <Stack.Screen name="PaidPlans" component={PaidPlanScreen} options={{ title:'有料プラン' }} />
        <Stack.Screen name="PaidPlanSignup" component={PaidPlanSignupScreen} options={{ title:'有料プラン登録' }} />
        <Stack.Screen name="PaidPlanInfo" component={PaidPlanInfoScreen} options={{ title:'' }} />
        <Stack.Screen name="BottomNav" component={BottomNavigator}  options={{headerShown:false}}/>
    </Stack.Navigator>
    )
}



const AuthStack = () => {

    return(
    <Stack.Navigator 
    screenOptions={{ 
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        ...TransitionPresets.SlideFromRightIOS,
        headerStyle: {
        backgroundColor: '#675251',
        },
        headerTintColor: '#fff'
    }}>
        <Stack.Screen name="MypageAuth" component={BottomNavigator}  options={{headerShown:false}}/>
        <Stack.Screen name="OptionStack" component={OptionStack}  options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={LoginScreen}  options={{ title: 'ログイン' }} />
        <Stack.Screen name="AuthRegister" component={RegisterScreen}  options={{ title: '会員登録' }} />
        <Stack.Screen name="Forgot" component={ForgotScreen}  options={{ title: 'パスワード再設定' }} />
        <Stack.Screen name="AuthTerms" component={TermsScreen}  options={{ title: 'パスワードをお忘れの方はこちら' }} />
        <Stack.Screen name="Consultation" component={ConsultationScreen} options={{ title: '相談カルテを作成' }}/>
    </Stack.Navigator>
    )
}


const BottomNavigator = () => {
    const navigation = useNavigation();
    const route = useRoute();


    const handleShowOptions = () => {
    navigation.navigate('OptionStack')
    }

    
    

    
    const token = useSelector(state => state.user?.token)

    useEffect(() => {
        if(token){
            console.log('naay token');
            navigation.navigate('MedicalRecords');
        }
    },[token])

    console.log(token);

    return (
            <Tab.Navigator
                initialRouteName='Mypage'
                screenOptions={{
                tabBarActiveTintColor: "#17AAB1",
                tabBarInactiveTintColor: "silver",
                headerStyle: {
                    backgroundColor: '#675251',
                },
                tabBarStyle:{
                    height:65
                },
                tabBarItemStyle: {
                    paddingBottom: 10
                },
                tabBarIconStyle:{
                    marginBottom:-15
                },
                headerTintColor: "#fff",
                gestureEnabled: true,
                gestureDirection: "horizontal",
                ...TransitionPresets.SlideFromRightIOS
            }}>
                <Tab.Screen name="MedicalRecords" component={MedicalRecordsStack} options={{
                            tabBarIcon: ({color, size}) => (<Ionicons name="create" color={color} size={size}></Ionicons>),
                            title: '相談力ルテ作成',
                            tabBarLabel: 'カルテ登録'
                }}/>
                <Tab.Screen name="Contact" component={ContactStack} options={{
                            tabBarIcon: ({color, size}) => (<Ionicons name="chatbox-ellipses" color={color} size={size}></Ionicons>),
                            title: '専門家連絡',
                }}/>
                <Tab.Screen name="Mypage" component={MypageStack} options={{
                            tabBarIcon: ({color, size}) => (<Ionicons name="person" color={color} size={size}></Ionicons>),
                            title: 'マイページ',
                            headerRight: (props) => (
                            <TouchableOpacity
                                android_ripple={{
                                color: '#fff',
                                foreground: true,
                                borderless: true,
                                }} onPress={handleShowOptions}>
                                <View className='pr-3'>
                                <Image source={require('../../assets/ic_nav_cog.png')} style={{width:24, height:24}}/>
                                </View> 
                                
                            </TouchableOpacity>
                            )
                }}/>
            </Tab.Navigator>

    );
}




const Root = () => {

    const hasToken = useSelector(state => state.user.token)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(checkHasToken());
    }, [hasToken]);


    return (
        <AuthStack/>
    )
}

export default Root