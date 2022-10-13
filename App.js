import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Icon, TouchableOpacity, Easing, Animated } from 'react-native';
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import GlobalStyles from './src/GlobalStyles';
import Root from './src/components/Root';
import { store } from './src/redux/store';
import { Provider } from 'react-redux';


export default function App() {
  return (
    <TailwindProvider>
      <Provider store={store}>
        <SafeAreaView style={GlobalStyles.droidSafeArea}>
          <StatusBar backgroundColor='#675251'/>
          <NavigationContainer>
            <Root/>
          </NavigationContainer>
        </SafeAreaView>
      </Provider>
    </TailwindProvider>
  );
}

