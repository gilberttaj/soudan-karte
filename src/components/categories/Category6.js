import { View, Text, TextInput, ScrollView, KeyboardAvoidingView,Platform, Pressable, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import SelectDropdown from 'react-native-select-dropdown';
import { useHeaderHeight } from '@react-navigation/elements';
import * as ImagePicker from 'expo-image-picker';
import { useDispatch, useSelector } from 'react-redux';
import { decrementIndex, incrementIndex, pickImage, setDetail } from '../../redux/consultationSlice';
import { setPosition, setAccidentSituation, setAccidentType, setInjury, setInsuranceCoverageStatus, setDateOfAccident } from '../../redux/category6Slice';
import RadioButtonRN from 'radio-buttons-react-native';
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';



const selection1 = [
  "被害者",
  "加害者",
  "自損事故当事者",
]

const selection2 = [
  "自動車自動車",
  "自動車対二輪(自転車含む)",
  "自動車対歩行者",
  "二輪(自転車含む)対歩行者",
  "その他",
]

const selection3 = [
  "追突事故",
  "右折車と直進車の衝突",
  "駐車場での事故",
  "その他",
]

const selection4 = [
  "怪我有り: 後遺症無し",
  "怪我有り: 後遺症有り",
  "怪我無し",
  "被害者死亡",
  "その他",
]

const selection5 = [
  "弁護士特約付き",
  "弁護士特約無し",
  "未加入",
  "わからない",
]



const category5 = () => {

  const dispatch = useDispatch();

  const position = useSelector(state => state.category6?.position)
  const accidentSituation = useSelector(state => state.category6?.accidentSituation)
  const accidentType = useSelector(state => state.category6?.accidentType)
  const injury = useSelector(state => state.category6?.injury)
  const insuranceCoverageStatus = useSelector(state => state.category6?.insuranceCoverageStatus)
  const dateOfAccident = useSelector(state => state.category6?.dateOfAccident)
  const detail = useSelector(state => state.consultation?.detail)
  const index = useSelector(state => state.consultation?.index)
  const isEnabled = useSelector(state => state.consultation?.isEnabled)
  const uploadedImage = useSelector(state => state.consultation?.image)
  

  const selectedDate = dateOfAccident ? dateOfAccident : null;
  const selectedPosition = position ? position : '被害者'; 
  const selectedAccidentSituation = accidentSituation ? accidentSituation : '自動車自動車'; 
  const selectedAccidentType = accidentType ? accidentType : '追突事故';
  const selectedInjury = injury ? injury : '怪我有り: 後遺症無し';
  const selectedInsuranceCoverageStatus = insuranceCoverageStatus ? insuranceCoverageStatus: '弁護士特約付き';
  const inputtedDetail = detail ? detail : '';


  const headerHeight = useHeaderHeight();
  const [image, setImage] = useState(uploadedImage);
  const [detailInput , setDetailInput] = useState(inputtedDetail);

  const [ positionDefaultValue , setPositionDefaultValue ] = useState(selectedPosition);

  const [ accidentSituationDefaultValue, setAccidentSituationDefaultValue] = useState(selectedAccidentSituation);

  const [ accidentTypeDefaultValue, setAccidentTypeDefaultValue] = useState(selectedAccidentType);

  const [ injuryDefaultValue, setInjuryDefaultValue] = useState(selectedInjury);

  const [ insuranceCoverageStatusDefaultValue, setInsuranceCoverageStatusDefaultValue] = useState(selectedInsuranceCoverageStatus);

  const [ inputtedDefaultValue, setInputtedDefaultValue ] = useState(inputtedDetail);

  const [ isDisabled, setIsDisabled ] = useState(true);


  const [selectedStartDate, setSelectedStartDate] = useState(selectedDate)



  
  const onImagePick = () => {
    dispatch(pickImage());
  }

  useEffect(() => {
    if(isEnabled){
      setIsDisabled(false);
    }
  },[index, isEnabled])


  const handleNext = () => {
    dispatch(incrementIndex());
    dispatch(setDetail(detailInput))
    dispatch(setDateOfAccident(selectedStartDate));
  }

  const handleBack = () => {
    dispatch(decrementIndex());
  }

  const handleChangeText = (text) => {
    setDetailInput(text);
  }

  useEffect(() => {
      if(detailInput != '' && selectedStartDate){
        setIsDisabled(false);
      }
  },[detailInput, selectedStartDate])



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
              お立場をご選択ください
              </Text>
              <View className='flex-row justify-end'>
                <View className='w-2/6 mr-5 mt-2'>
                  <SelectDropdown
                          data={selection1}
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
              <Text className='mt-10 pl-5 font-semibold text-xs'>
                事故の状況に近い内容をご選択ください
              </Text>
              <View className='flex-row justify-end'>
                <View className='mr-5 mt-2'>
                  <SelectDropdown
                          data={selection2}
                          onSelect={(selectedItem, index) => {
                            dispatch(setAccidentSituation(selectedItem));
                          }}
                          buttonTextAfterSelection={(selectedItem, index) => {
                            return selectedItem
                          }}
                          rowTextForSelection={(item, index) => {
                            return item
                          }}
                          dropdownBackgroundColor='yellow'
                          buttonStyle={{ backgroundColor: '#EEEEEE', width:240, borderRadius:3, height:55 }}
                          buttonTextStyle={{ fontSize: 18 }}
                          defaultValue={accidentSituationDefaultValue}
                        />
                </View>
              </View>
            </View>

            <View>
              <Text className='mt-10 pl-5 font-semibold text-xs'>
              事故の種類に近い内容をご選択ください
              </Text>
              <View className='flex-row justify-end'>
                <View className='mr-5 mt-2'>
                  <SelectDropdown
                          data={selection3}
                          onSelect={(selectedItem, index) => {
                            dispatch(setAccidentType(selectedItem));
                          }}
                          buttonTextAfterSelection={(selectedItem, index) => {
                            return selectedItem
                          }}
                          rowTextForSelection={(item, index) => {
                            return item
                          }}
                          dropdownBackgroundColor='yellow'
                          buttonStyle={{ backgroundColor: '#EEEEEE', width:190, borderRadius:3, height:55 }}
                          buttonTextStyle={{ fontSize: 18 }}
                          defaultValue={accidentTypeDefaultValue}
                        />
                </View>
              </View>
            </View>

            <View>
              <Text className='mt-10 pl-5 font-semibold text-xs'>
              お怪我の状況に近い内容をご選択ください
              </Text>
              <View className='flex-row justify-end'>
                <View className='mr-5 mt-2'>
                  <SelectDropdown
                          data={selection4}
                          onSelect={(selectedItem, index) => {
                            dispatch(setInjury(selectedItem));
                          }}
                          buttonTextAfterSelection={(selectedItem, index) => {
                            return selectedItem
                          }}
                          rowTextForSelection={(item, index) => {
                            return item
                          }}
                          dropdownBackgroundColor='yellow'
                          buttonStyle={{ backgroundColor: '#EEEEEE', width:225, borderRadius:3, height:55 }}
                          buttonTextStyle={{ fontSize: 18 }}
                          defaultValue={injuryDefaultValue}
                        />
                </View>
              </View>
            </View>

            <View>
              <Text className='mt-10 pl-5 font-semibold text-xs'>
              保険のご加入状況をご選択ください
              </Text>
              <View className='flex-row justify-end'>
                <View className='mr-5 mt-2'>
                  <SelectDropdown
                          data={selection5}
                          onSelect={(selectedItem, index) => {
                            dispatch(setInsuranceCoverageStatus(selectedItem));
                          }}
                          buttonTextAfterSelection={(selectedItem, index) => {
                            return selectedItem
                          }}
                          rowTextForSelection={(item, index) => {
                            return item
                          }}
                          dropdownBackgroundColor='yellow'
                          buttonStyle={{ backgroundColor: '#EEEEEE', width:170, borderRadius:3, height:55 }}
                          buttonTextStyle={{ fontSize: 18 }}
                          defaultValue={insuranceCoverageStatusDefaultValue}
                        />
                </View>
              </View>
            </View>


            <View>
              <Text className='mt-10 pl-5 font-semibold text-xs'>
              相続時期をご選択ください。
              </Text>
            <View className='mt-5'>
              <CalendarPicker onDateChange={setSelectedStartDate}
                selectedDayColor='#17AAB1' width={340} selectedStartDate={dateOfAccident} initialDate={dateOfAccident? dateOfAccident: new Date()}/>
              <Text className='ml-5'>Selected: {selectedStartDate && moment(selectedStartDate).format('YYYY/MM/DD').toString()}</Text>
            </View>
            </View>
        </View>

        <View className='bg-white pb-8 mb-3'>
          <View className='mx-5 pt-4'>
            <TextInput style={{height:140, textAlignVertical:'top', fontSize:15 ,borderBottomWidth: 1, borderBottomColor: '#7E7E7E'}} placeholder={'ご相談内容を端的にご記入ください。(いつどこで 誰が誰に何をするのか、どうしたいのかを意識し てご記入いただけますとより具体的な回答が期待 できます。)'}
            multiline={true} onChangeText={handleChangeText}  defaultValue={inputtedDefaultValue}
            keyboardType="phone-pad"/>
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

export default category5