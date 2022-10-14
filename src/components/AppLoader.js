import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Lottie from 'lottie-react-native';

const AppLoader = () => {
    return (
        <View className='justify-center items-center' style={StyleSheet.absoluteFillObject}>
            <Lottie source={require('../../assets/loading.json')} autoPlay loop />
        </View>
    )
}

export default AppLoader