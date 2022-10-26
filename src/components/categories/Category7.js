import { 
  View, 
  Text, 
  TextInput, 
  ScrollView, 
  KeyboardAvoidingView,
  Platform, 
  Pressable, 
  Image, 
  TouchableOpacity 
} from 'react-native'
import React, { useEffect, useState } from 'react'
import SelectDropdown from 'react-native-select-dropdown';
import { useHeaderHeight } from '@react-navigation/elements';
import * as ImagePicker from 'expo-image-picker';
import { useDispatch, useSelector } from 'react-redux';
import { 
  decrementIndex, 
  incrementIndex, 
  pickImage, 
  setDetail 
} from '../../redux/consultationSlice';
import { 
  setClosestInquiry1, 
  setPosition,
  setClosestInquiry2,
  setStayPeriod,
  setRentDuration
} from '../../redux/category7Slice';

// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const closestInquiries1 = [
  "賃貸トラブル",
  "所有不動産",
  "不動產登記",
  "不動產相統",
  "任意売却",
  "その他",
]

const positions = [
  "借主",
  "貸主",
  "仲介者"
]

const closestInquiries2 = [
  "家賃滞納",
  "建物明渡し",
  "敷金返還",
  "賃貸契約",
  "その他",
]

const stayOfperiod = [
  "2年未満",
  "2年以上4年未満",
  "4年以上8年未満",
  "8年以上",
]

const rentDurations = [
  "3か月未満",
  "3か月以上5か月未満",
  "6か月以上",
  "滞納なし",
]

const Category7 = () => {

  const dispatch = useDispatch();

  const detail = useSelector(state => state.consultation?.detail)
  const index = useSelector(state => state.consultation?.index)
  const isEnabled = useSelector(state => state.consultation?.isEnabled)
  const uploadedImage = useSelector(state => state.consultation?.image)
  
  const closestInquiry1 = useSelector(state => state.category7?.closestInquiry1)
  const position = useSelector(state => state.category7?.position)
  const closestInquiry2 = useSelector(state => state.category7?.closestInquiry2)
  const stayPeriod = useSelector(state => state.category7?.stayPeriod)
  const rentDuration = useSelector(state => state.category7?.rentDuration)
  
  const selectedClosestInquiry1 = closestInquiry1 ? closestInquiry1 : '賃貸トラブル'; 
  const selectedPosition = position ? position : '借主'; 
  const selectedClosestInquiry2 = closestInquiry2 ? closestInquiry2 : '家賃滞納'; 
  const selectedStayPeriod = stayPeriod ? stayPeriod : '家賃滞納'; 
  const inputtedDetail = detail ? detail : '';
  const selectedRentDuration = rentDuration ? rentDuration : '3か月未満'

  const headerHeight = useHeaderHeight();
  const [image, setImage] = useState(uploadedImage);
  const [detailInput , setDetailInput] = useState(inputtedDetail);
  const [ closestInquiry1DefaultValue , setClosestInquiry1DefaultValue ] = useState(selectedClosestInquiry1);
  const [ closestInquiry2DefaultValue , setClosestInquiry2DefaultValue ] = useState(selectedClosestInquiry2);
  const [ positionDefaultValue , setPositionDefaultValue ] = useState(selectedPosition);
  const [ stayPeriodDefaultValue , setStayPeriodDefaultValue ] = useState(selectedStayPeriod);
  const [ rentDurationDefaultValue , setRentDurationDefaultValue ] = useState(selectedRentDuration);

  const [ isDisabled, setIsDisabled ] = useState(true);

  const onImagePick = () => {
    dispatch(pickImage());
  }

  useEffect(() =>{
    if(detailInput != ''){
      setIsDisabled(false);
    }
  },[detailInput])

  useEffect(() => {
    if(isEnabled){
      setIsDisabled(false);
    }
  },[index, isEnabled])


  const handleNext = () => {
    dispatch(incrementIndex());
    dispatch(setDetail(detailInput))
  }

  const handleBack = () => {
    dispatch(decrementIndex());
  }

  const handleChangeText = (text) => {
    setDetailInput(text);
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
              ご相談内容に近いものご選択ください
            </Text>
            <View className='flex-row justify-end'>
              <View className='w-2/5 mr-5 mt-2'>
                <SelectDropdown
                        data={closestInquiries1}
                        onSelect={(selectedItem, index) => {
                          dispatch(setClosestInquiry1(selectedItem));
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
                        defaultValue={closestInquiry1DefaultValue}
                      />
              </View>
              
            </View>
          </View>
          <View>
            <Text className='mt-5 pl-5 font-semibold text-xs'>
              お立場をご選択ください
            </Text>
            <View className='flex-row justify-end'>
              <View className='w-1/4 mr-5 mt-2'>
                <SelectDropdown
                        data={positions}
                        onSelect={(selectedItem, index) => {
                          dispatch(setPosition(selectedItem));
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
                        defaultValue={positionDefaultValue}
                      />
              </View>
              
            </View>
          </View>
          <View>
            <Text className='mt-5 pl-5 font-semibold text-xs'>
              ご相内容に近いものご選択ください
            </Text>
            <View className='flex-row justify-end'>
              <View className='w-2/5 mr-5 mt-2'>
                <SelectDropdown
                  data={closestInquiries2}
                  onSelect={(selectedItem, index) => {
                    dispatch(setClosestInquiry2(selectedItem));
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
                  defaultValue={closestInquiry2DefaultValue}
                />
              </View>
            </View>
          </View>
          <View>
            <Text className='mt-5 pl-5 font-semibold text-xs'>
              入居期間をご選択ください
            </Text>
            <View className='flex-row justify-end'>
              <View className='w-1/2 mr-5 mt-2'>
                <SelectDropdown
                        data={stayOfperiod}
                        onSelect={(selectedItem, index) => {
                          dispatch(setStayPeriod(selectedItem));
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
                        defaultValue={stayPeriodDefaultValue}
                      />
              </View>
            </View>
          </View>
          <View>
            <Text className='mt-5 pl-5 font-semibold text-xs'>
            家賃の滞納についてご選択ください
            </Text>
            <View className='flex-row justify-end'>
              <View className='w-3/5 mr-5 mt-2'>
                <SelectDropdown
                  data={rentDurations}
                  onSelect={(selectedItem, index) => {
                    dispatch(setRentDuration(selectedItem));
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
                  defaultValue={rentDurationDefaultValue}
                />
              </View>
            </View>
          </View>
        </View>
        <View className='bg-white pb-8 mb-3'>
          <View className='mx-5 pt-4'>
            <TextInput style={{height:140, textAlignVertical:'top', fontSize:15 ,borderBottomWidth: 1, borderBottomColor: '#7E7E7E'}} placeholder={'ご相談内容を端的にご記入ください。(いつどこで 誰が誰に何をするのか、どうしたいのかを意識し てご記入いただけますとより具体的な回答が期待 できます。)'}
            multiline={true} onChangeText={handleChangeText}  defaultValue={detailInput}
            />
          </View>
          <View className='mt-6 flex-row justify-center'>
            <Pressable className='w-10/12 rounded-sm flex-row justify-center gap-2' style={{ backgroundColor: '#EEEEEE' }}
            onPress={onImagePick}>
              <Image source={require('../../../assets/ic_media_upload.png')} style={{height:30, width:30}}/>
              <Text className='font-semibold self-center' style={{ color: '#858585' }}>
                画像を一緒に送る
              </Text>
            </Pressable>
          </View>

          <View className='ml-8 mt-2'>
            {uploadedImage && <Image source={{ uri: uploadedImage }} style={{ width: 150, height: 150 }} />}
          </View>
        </View>      
        
      </ScrollView>
      
      <View className='flex-row justify-center gap-3.5 bg-white pb-2 px-3'>
        <TouchableOpacity onPress={handleBack} className='flex-1 py-1.5' style={{ backgroundColor: '#F2F2F2'}} disabled={false}>
          <Text className='text-center'>もどる</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNext} className='flex-1 py-1.5' style={{ backgroundColor: `${isDisabled ? '#837D93' : '#17AAB1'}`}} disabled={isDisabled}>
          <Text className='text-center text-white'>つぎへ</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default Category7