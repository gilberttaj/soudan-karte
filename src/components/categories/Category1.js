import { View, Text, TextInput, ScrollView, KeyboardAvoidingView,Platform, Pressable, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import SelectDropdown from 'react-native-select-dropdown';
import { useHeaderHeight } from '@react-navigation/elements';
import * as ImagePicker from 'expo-image-picker';
import { useDispatch, useSelector } from 'react-redux';
import { decrementIndex, incrementIndex, setDetail,setStep3Detail } from '../../redux/consultationSlice';
import { setSituation, setConsultationType, setRelationshipDuration, setCat1Image } from '../../redux/category1Slice';

// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const situations = [
  "未婚",
  "既婚",
  "谷口",
  "離婚済み",
  "内仕メ日",
  "浮気相談",
  "ストーカー被害",
]

const relationshipDurations = [
  '2年未滿',
  '2年以上10年未满',
  '10年以上',
]

const consultationTypes = [
  '浮気調查',
  '慰謝料請求',
  '婚約破棄',
  '結婚詐欺',
  'その他',
]



const category1 = () => {

  const dispatch = useDispatch();

  const situation = useSelector(state => state.category1?.situation)
  const relationshipDuration = useSelector(state => state.category1?.relationshipDuration)
  const consultationType = useSelector(state => state.category1?.consultationType)
  const detail = useSelector(state => state.consultation?.detail)
  const index = useSelector(state => state.consultation?.index)
  const step3Detail = useSelector(state => state.consultation?.step3Detail)
  
  const selectedSituation = situation ? situation : '未婚'; 
  const selectedRelationshipDuration = relationshipDuration ? relationshipDuration : '2年未滿';
  const selectedConsultationType = consultationType ? consultationType : 'その他'
  const inputtedDetail = detail ? detail : '';


  const headerHeight = useHeaderHeight();
  const [image, setImage] = useState(null);
  const [detailInput , setDetailInput] = useState('');

  const [ situationDefaultValue , setSituationDefaultValue ] = useState(selectedSituation);

  const [relationshipDurationDefaultValue, setRelationshipDurationDefaultValue] = useState(selectedRelationshipDuration);

  const [consultationTypeDefaultValue, setConsultationTypeDefaultValue] = useState(selectedConsultationType);

  const [ inputtedDefaultValue, setInputtedDefaultValue ] = useState(inputtedDetail);

  const [ isEnabled, setIsEnabled ] = useState(true);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
      setCat1Image(result.uri);
    }
  };

  function updateInputValueHandler(inputType, enteredValue) {
    switch (inputType) {
        case 'detailInput':
            setDetailInput(enteredValue);
                break;
    } 
  }


  useEffect(() =>{
    if(detailInput != ''){
      setIsEnabled(false);
    }

  },[detailInput])

  useEffect(() => {
    if(detail != ''){
      setIsEnabled(false);
    }
  },[index])


  const handleNext = () => {
    dispatch(incrementIndex());
    dispatch(setDetail(detailInput));
  }

  const handleBack = () => {
    dispatch(decrementIndex());
  }



  return (
    <KeyboardAvoidingView
    keyboardVerticalOffset={headerHeight}
    behavior={Platform.OS === "ios" ? "padding" : null}
    style={{ flex:1 }}
    >
      <View className='bg-white mb-0.5'>
        <Text className='pl-5 py-2.5 text-lg text-neutral-600 font-semibold'>困っていることを詳しく教えてください</Text>
      </View>

      <ScrollView className=''>
        <View className='bg-white pb-5 mb-0.5'>
          <View>
            <Text className='mt-5 pl-5 font-semibold text-xs'>
              ご状況をご選択ください
            </Text>
            <View className='flex-row justify-end'>
              <View className='w-2/6 mr-5 mt-2'>
                <SelectDropdown
                        data={situations}
                        onSelect={(selectedItem, index) => {
                          dispatch(setSituation(selectedItem));
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {
                          return selectedItem
                        }}
                        rowTextForSelection={(item, index) => {
                          return item
                        }}
                        dropdownBackgroundColor='yellow'
                        buttonStyle={{ backgroundColor: '#EEEEEE', width:'100%', borderRadius:3, height:55 }}
                        buttonTextStyle={{ fontSize: 18 }}
                        defaultValue={situationDefaultValue}
                      />
              </View>
              
            </View>
          </View>

          <View>
            <Text className='mt-5 pl-5 font-semibold text-xs'>
            交際期間をご選択ください
            </Text>
            <View className='flex-row justify-end'>
              <View className='mr-5 mt-2'>
                <SelectDropdown
                        data={relationshipDurations}
                        onSelect={(selectedItem, index) => {
                          dispatch(setRelationshipDuration(selectedItem));
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {
                          return selectedItem
                        }}
                        rowTextForSelection={(item, index) => {
                          return item
                        }}
                        dropdownBackgroundColor='yellow'
                        buttonStyle={{ backgroundColor: '#EEEEEE', width:145, borderRadius:3, height:55 }}
                        buttonTextStyle={{ fontSize: 18 }}
                        defaultValue={relationshipDurationDefaultValue}
                      />
              </View>
            </View>
          </View>

          <View>
            <Text className='mt-5 pl-5 font-semibold text-xs'>
            ご相談内容に近い内容をご選択ください
            </Text>
            <View className='flex-row justify-end'>
              <View className='mr-5 mt-2'>
                <SelectDropdown
                        data={consultationTypes}
                        onSelect={(selectedItem, index) => {
                          dispatch(setConsultationType(selectedItem));
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {
                          return selectedItem
                        }}
                        rowTextForSelection={(item, index) => {
                          return item
                        }}
                        dropdownBackgroundColor='yellow'
                        buttonStyle={{ backgroundColor: '#EEEEEE', width:120, borderRadius:3, height:55 }}
                        buttonTextStyle={{ fontSize: 18 }}
                        defaultValue={consultationTypeDefaultValue}
                      />
              </View>
            </View>
          </View>

        </View>



        <View className='bg-white pb-8 mb-3'>
          <View className='mx-5 pt-4'>
            <TextInput style={{height:140, textAlignVertical:'top', fontSize:15 ,borderBottomWidth: 1, borderBottomColor: '#7E7E7E'}} placeholder={'ご相談内容を端的にご記入ください。(いつどこで 誰が誰に何をするのか、どうしたいのかを意識し てご記入いただけますとより具体的な回答が期待 できます。)'}
            multiline={true} onChangeText={updateInputValueHandler.bind(this, 'detailInput')}  defaultValue={inputtedDefaultValue}/>
          </View>
          <View className='mt-6 flex-row justify-center'>
            <Pressable className='w-10/12 rounded-sm flex-row justify-center gap-2' style={{ backgroundColor: '#EEEEEE' }}
            onPress={pickImage}>
              <Image source={require('../../../assets/ic_media_upload.png')} style={{height:30, width:30}}/>
              <Text className='font-semibold self-center' style={{ color: '#858585' }}>
                画像を一緒に送る
              </Text>
            </Pressable>
          </View>

          <View className='ml-8 mt-2'>
            {image && <Image source={{ uri: image }} style={{ width: 150, height: 150 }} />}
          </View>
        </View>       
      </ScrollView>
      

      <View className='flex-row justify-center gap-3.5 bg-white pb-2 px-3'>
        <TouchableOpacity onPress={handleBack} className='flex-1 py-1.5' style={{ backgroundColor: '#F2F2F2'}} disabled={false}>
          <Text className='text-center'>もどる</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNext} className='flex-1 py-1.5' style={{ backgroundColor: `${isEnabled ? '#837D93' : '#17AAB1'}`}} disabled={isEnabled}>
          <Text className='text-center text-white'>つぎへ</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default category1