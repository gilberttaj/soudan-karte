import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { View, useWindowDimensions, TouchableOpacity, Text, Image } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import { imageUrl } from '../../../assets/Icons';


export default function Consultation() {

  const FirstRoute = () => (
    <Step1/>
  );
  
  const SecondRoute = () => (
    <Step2/>
  );
  
  const ThirdRoute = () => (
    <Step3/>
  );
  
  const FourthRoute = () => (
    <Step4/>
  );
  
  
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
    fourth: FourthRoute,
  });
  

  const layout = useWindowDimensions();

  const navigation = useNavigation();

  const [ nextDisabled , setNextDisabled ] = useState(false);
  const [ value1, setValue1 ] = useState(null);





  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'STEP 1' },
    { key: 'second', title: 'STEP 2' },
    { key: 'third', title: 'STEP 3' },
    { key: 'fourth', title: 'STEP 4' },
  ]);


  const stepImg1 = index == 0? require('../../../assets/img_karte_progress_active.9.png') : require('../../../assets/img_karte_progress_deactive.9.png');
  const stepImg2 = index == 1? require('../../../assets/img_karte_progress_active.9.png') : require('../../../assets/img_karte_progress_deactive.9.png');
  const stepImg3 = index == 2? require('../../../assets/img_karte_progress_active.9.png') : require('../../../assets/img_karte_progress_deactive.9.png');
  const stepImg4 = index == 3? require('../../../assets/img_karte_progress_active.9.png') : require('../../../assets/img_karte_progress_deactive.9.png');



  const renderTabBar = () => {
    return(
      <View className='flex-row justify-between mx-5 pb-2.5'>
        <View className=''>
          <View className='mt-2.5'>
            <Image source={stepImg1}
                      style={{ width:74, height:30}} tintColor={index == 0 ? '#675251' : 'gray'} />
          </View>
          <Text className={`mt-4 font-bold absolute -top-0.5 left-2.5 ${index == 0? 'text-white': 'text-gray-600'}`}>STEP 1</Text>
        </View>
        <View className='relative'>
          <View className='mt-2.5'>
            <Image source={stepImg2}
                      style={{ width:74, height:30}} tintColor={index == 1 ? '#675251' : 'gray'} />
          </View>
          <Text className={`mt-4 font-bold absolute -top-0.5 left-2.5 ${index == 1? 'text-white': 'text-gray-600'}`}>STEP 2</Text>
        </View>
        <View className='relative'>
          <View className='mt-2.5'>
            <Image source={stepImg3}
                      style={{ width:74, height:30}} tintColor={index == 2 ? '#675251' : 'gray'} />
          </View>
          <Text className={`mt-4 font-bold absolute -top-0.5 left-2.5 ${index == 2? 'text-white': 'text-gray-600'}`}>STEP 3</Text>
        </View>
        <View className='relative'>
          <View className='mt-2.5'>
            <Image source={stepImg4}
                      style={{ width:74, height:30}} tintColor={index == 3 ? '#675251' : 'gray'} />
          </View>
          <Text className={`mt-4 font-bold absolute -top-0.5 left-2.5 ${index == 3? 'text-white': 'text-gray-600'}`}>STEP 4</Text>
        </View>
      </View>

    )
  };



  const handleNext = () => {
    if(index != 3){
    setIndex(prevState => prevState+1)
    }
  }

  const handleBack = () => {
    setIndex(prevState => prevState-1)
  }

  useEffect(() => {
    setIndex(0);
  },[])

  useEffect(() => {
    if(index < 0){
      navigation.goBack();
    }
  },[index])


  // console.log(index);
  return (
    <>
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      swipeEnabled={false}
      renderTabBar={renderTabBar}
    />
    <View className='flex-row justify-center gap-3'>
      <TouchableOpacity onPress={handleBack} className='flex-1 bg-gray-300' disabled={false}>
        <Text className='text-center'>Back</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleNext} className='flex-1 bg-violet-300' disabled={nextDisabled}>
        <Text className='text-center'>Next</Text>
      </TouchableOpacity>
    </View>

    </>
  );
}