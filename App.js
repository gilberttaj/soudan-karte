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





const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator(); 


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
    </Stack.Navigator>
  )
}



const AuthStack = () => {
  return(
    <Stack.Navigator 
    screenOptions={{ 
      gestureEnabled: true,
      gestureDirection: 'horizontal',
      ...TransitionPresets.SlideFromRightIOS
    }}>
      <Stack.Screen name="MypageAuth" component={BottomNavigator}  options={{headerShown:false}}/>
      <Stack.Screen name="OptionStack" component={OptionStack}  options={{headerShown:false}}/>
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
      initialRouteName='MypageStack'
      screenOptions={{
        tabBarActiveTintColor: "#17AAB1",
        tabBarInactiveTintColor: "silver",
        headerStyle: {
          backgroundColor: '#675251',
        },
        // headerTitleStyle:  {
        //   color: '#fff',
        // },
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

