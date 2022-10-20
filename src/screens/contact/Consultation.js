import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { View, useWindowDimensions, TouchableOpacity, Text, Image } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { useDispatch, useSelector } from 'react-redux';
import { incrementIndex,decrementIndex, setCategoryName, resetIndex } from '../../redux/consultationSlice';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';



export default function Consultation() {

  const [ nextDisabled , setNextDisabled ] = useState(true);

  const index = useSelector(state => state.consultation?.index)
  const categoryName = useSelector(state => state.consultation?.categoryName)
  const step3Detail = useSelector(state => state.consultation?.step3Detail)
  // console.log(categoryName);

  const dispatch = useDispatch();

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

 
  const [ value1, setValue1 ] = useState(null);


  // const [index, setIndex] = useState(0);
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


  useEffect(() => {
    if(categoryName != null && index == 0){
      setNextDisabled(false);
    }
    }, [categoryName])
  


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
    // setIndex(prevState => prevState+1)
    }

    dispatch(incrementIndex());
  }

  const handleBack = () => {
    dispatch(decrementIndex());
  }

  useEffect(() => {
    // setIndex(0);
  },[])

  useEffect(() => {
    if(index < 0){
      dispatch(setCategoryName(null))
      dispatch(resetIndex())
      navigation.goBack();
    }

    if(categoryName != null && index == 0){
      setNextDisabled(false);
    }

    // if(step3Detail == false && index == 2){
    //   setNextDisabled(true);
    // }

  },[index])

  // useEffect(()=>{
  //   if(step3Detail == true  && index == 2){
  //     setNextDisabled(false);
  //   }
  // },[step3Detail ])




  return (
    <>
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      // onIndexChange={1}
      initialLayout={{ width: layout.width }}
      swipeEnabled={false}
      renderTabBar={renderTabBar}
    />
    { index != 2 &&
      <View className='flex-row justify-center gap-3.5 bg-white pb-2 px-3'>
        <TouchableOpacity onPress={handleBack} className='flex-1 py-1.5' style={{ backgroundColor: '#F2F2F2'}} disabled={false}>
          <Text className='text-center'>もどる</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNext} className='flex-1 py-1.5' style={{ backgroundColor: `${nextDisabled ? '#837D93' : '#17AAB1'}`}} disabled={nextDisabled}>
          <Text className='text-center text-white'>つぎへ</Text>
        </TouchableOpacity>
      </View>
    }
    </>
  );
}