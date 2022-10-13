import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Icon, TouchableOpacity, Easing, Animated } from 'react-native';
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import GlobalStyles from './src/GlobalStyles';
// import { createNativeStackNavigator, TransitionPresets } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MedicalRecordScreen from './src/screens/medicalRecords/Index';
import ContactScreen from './src/screens/contact/Index';
import MypageScreen from './src/screens/mypage/Index';
import OptionScreen from './src/screens/settings/Index';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { createStackNavigator, TransitionPresets, } from '@react-navigation/stack';
import Modal from 'react-native-modal';
import LoginScreen from './src/screens/authentication/Login';
import RegisterScreen from './src/screens/authentication/Register';
import NewsScreeen from './src/screens/settings/News';
import FAQScreen from './src/screens/settings/FAQ';
import TermsScreen from './src/screens/settings/Terms';
import PolicyScreen from './src/screens/settings/Policy';
import RecommendScreen from './src/screens/settings/Recommend';
import ExpertsScreen from './src/screens/settings/Experts';
import ForgotScreen from './src/screens/authentication/Forgot';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator(); 

const user = null;


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
    </Stack.Navigator>
  )
}


const BottomNavigator = () => {
  const navigation = useNavigation();

  const handleShowOptions = () => {
    navigation.navigate('OptionStack')
  }
  return (
    <Tab.Navigator
      initialRouteName= {!user? 'MedicalRecordsStack' : 'MypageStack'}
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
        <Tab.Screen name="MypageStack" component={MypageStack} options={{
                      tabBarIcon: ({color, size}) => (<Ionicons name="person" color={color} size={size}></Ionicons>),
                      title: 'マイページ',
                      headerRight: (props) => (
                        <TouchableOpacity
                        android_ripple={{
                          color: '#fff',
                          foreground: true,
                          borderless: true,
                        }} onPress={handleShowOptions}>
                        <Ionicons
                          style={{paddingRight: 15}}
                          name='settings'
                          size={20}
                          color='#fff'
                        />
                      </TouchableOpacity>
                      )
                  }}/>
    </Tab.Navigator>
  );
}




export default function App() {
  return (
    <TailwindProvider>
      <SafeAreaView style={GlobalStyles.droidSafeArea}>
        <StatusBar backgroundColor='#675251'/>
        <NavigationContainer>
          <AuthStack/>
        </NavigationContainer>
      </SafeAreaView>
    </TailwindProvider>
  );
}

