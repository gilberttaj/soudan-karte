import { View, Text, TextInput, ScrollView, KeyboardAvoidingView,Platform, Pressable, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import SelectDropdown from 'react-native-select-dropdown';
import { useHeaderHeight } from '@react-navigation/elements';
import * as ImagePicker from 'expo-image-picker';
import { useDispatch, useSelector } from 'react-redux';
import { decrementIndex, incrementIndex, pickImage, setDetail } from '../../redux/consultationSlice';
import { setPropertyValue, setNumberOfHeirs, setConsultationSummary, setIsDeceased } from '../../redux/category5Slice';
import RadioButtonRN from 'radio-buttons-react-native';
import CalendarPicker from 'react-native-calendar-picker';


// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const situations = [
  "3,000万円未満",
  "3,000万円~5,000万円",
  "5,000万円~1億円",
  "1億円以上",
  "負債",
  "わからない",
]

const relationshipDurations = [
  '1名',
  '2~7名',
  '8名以上',
  '0名',
  'わからない',
]

const consultationTypes = [
  '紛争解決',
  '分割協議書作成',
  '諸手続き',
  '相続税申告',
  '相続放棄',
  '限定承認',
  'その他'
]

const data1 = [
  {
    label: 'はい'
   },
   {
    label: 'まだ亡くなっていない'
   }
];

const data2 = [
  {
    label: 'はい'
   },
   {
    label: 'いいえ'
   }
];



const category5 = () => {

  const dispatch = useDispatch();

  const propertyValue = useSelector(state => state.category5?.propertyValue)
  const isDeceased = useSelector(state => state.category5?.isDeceased)
  const includeRealEstate = useSelector(state => state.category5?.includeRealEstate)
  const numberOfHeirs = useSelector(state => state.category5?.numberOfHeirs)
  const consultationSummary = useSelector(state => state.category5?.consultationSummary)
  const timeOfInheritance = useSelector(state => state.category5?.timeOfInheritance)
  const detail = useSelector(state => state.consultation?.detail)
  const index = useSelector(state => state.consultation?.index)
  const isEnabled = useSelector(state => state.consultation?.isEnabled)
  const uploadedImage = useSelector(state => state.consultation?.image)
  
  const selectedPropertyValue = propertyValue ? propertyValue : '未婚'; 
  const selectedNumberOfHeirs = numberOfHeirs ? numberOfHeirs : '2年未滿';
  const selectedConsultationSummary = consultationSummary ? consultationSummary : 'その他'
  const inputtedDetail = detail ? detail : '';


  const headerHeight = useHeaderHeight();
  const [image, setImage] = useState(uploadedImage);
  const [detailInput , setDetailInput] = useState(inputtedDetail);

  const [ propertyDefaultValue , setPropertyDefaultValue ] = useState(selectedPropertyValue);

  const [ numberOfHeirsDefaultValue, setNumberOfHeirsDefaultValue] = useState(selectedNumberOfHeirs);

  const [ consultationSummaryDefaultValue, setConsultationSummaryDefaultValue] = useState(selectedConsultationSummary);

  const [ inputtedDefaultValue, setInputtedDefaultValue ] = useState(inputtedDetail);

  const [ isDisabled, setIsDisabled ] = useState(true);

  const [vitalStatusDefaultValue, setVitalStatusDefaultValue] = useState(null)
  const [includeRealEstateDefaultValue, setIncludeRealEstateDefaultValue] = useState(null)

  const [selectedStartDate, setSelectedStartDate] = useState(null)


  const date = selectedStartDate
    ? selectedStartDate.format('YYYY/MM/DD').toString()
    : '';

  // console.log(isEnabled);

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

    if(vitalStatusDefaultValue == 1){
      dispatch(setIsDeceased('はい'))
    }

    if(vitalStatusDefaultValue == 2){
      dispatch(setIsDeceased('まだ亡くなっていない'))
    }

    if(includeRealEstateDefaultValue == 1){
      dispatch(setIsDeceased('はい'))
    }

    if(includeRealEstateDefaultValue == 2){
      dispatch(setIsDeceased('いいえ'))
    }
  }

  const handleBack = () => {
    dispatch(decrementIndex());
  }

  const handleChangeText = (text) => {
    setDetailInput(text);
  }


  const onSelectedVitalStatus = (e) => {
    setVitalStatusDefaultValue(data1.indexOf(e) + 1)
  }

  const onSelectedIncludeRealEstate = (e) => {
    setIncludeRealEstateDefaultValue(data2.indexOf(e) + 1)
  }

  useEffect(() => {
    if(vitalStatusDefaultValue == 1){
      if(detailInput != '' && date != '' && includeRealEstateDefaultValue > 0){
        setIsDisabled(false);
      }
    }

    if(vitalStatusDefaultValue == 2){
      if(detailInput != '' && includeRealEstateDefaultValue > 0){
        setIsDisabled(false);
      }
    }

  
  },[detailInput,date, vitalStatusDefaultValue, includeRealEstateDefaultValue])



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
                亡くなった方についてのご相談ですか?
                </Text>
                <View className="ml-4">
                  <RadioButtonRN
                    data={data1} 
                    selectedBtn={onSelectedVitalStatus}
                    circleSize={12}
                    activeColor='#17AAB1'
                    box={false}
                    initial={vitalStatusDefaultValue}
                  />
                </View>
            </View>
            { vitalStatusDefaultValue &&
            <>
            <View>
              <Text className='mt-12 pl-5 font-semibold text-xs'>
              資産価値に近い内容をご選択ください。
              </Text>
              <View className='flex-row justify-end'>
                <View className='w-1/2 mr-5 mt-2'>
                  <SelectDropdown
                          data={situations}
                          onSelect={(selectedItem, index) => {
                            dispatch(setPropertyValue(selectedItem));
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
                          defaultValue={propertyDefaultValue}
                        />
                </View>
                
              </View>
            </View>

            <View>
              <Text className='mt-12 pl-5 font-semibold text-xs'>
              遺産に不動産は含まれますか?
              </Text>
              <View className="ml-4">
                <RadioButtonRN
                  data={data2} 
                  selectedBtn={onSelectedIncludeRealEstate}
                  circleSize={12}
                  activeColor='#17AAB1'
                  box={false}
                  initial={includeRealEstateDefaultValue}
                />
              </View>
            </View>

            <View>
              <Text className='mt-10 pl-5 font-semibold text-xs'>
              相続人の人数をご選択ください。
              </Text>
              <View className='flex-row justify-end'>
                <View className='mr-5 mt-2'>
                  <SelectDropdown
                          data={relationshipDurations}
                          onSelect={(selectedItem, index) => {
                            dispatch(setNumberOfHeirs(selectedItem));
                          }}
                          buttonTextAfterSelection={(selectedItem, index) => {
                            return selectedItem
                          }}
                          rowTextForSelection={(item, index) => {
                            return item
                          }}
                          dropdownBackgroundColor='yellow'
                          buttonStyle={{ backgroundColor: '#EEEEEE', width:110, borderRadius:3, height:55 }}
                          buttonTextStyle={{ fontSize: 18 }}
                          defaultValue={numberOfHeirsDefaultValue}
                        />
                </View>
              </View>
            </View>

            <View>
              <Text className='mt-5 pl-5 font-semibold text-xs'>
              ご相談内容の概要をご選択ください。
              </Text>
              <View className='flex-row justify-end'>
                <View className='mr-5 mt-2'>
                  <SelectDropdown
                          data={consultationTypes}
                          onSelect={(selectedItem, index) => {
                            dispatch(setConsultationSummary(selectedItem));
                          }}
                          buttonTextAfterSelection={(selectedItem, index) => {
                            return selectedItem
                          }}
                          rowTextForSelection={(item, index) => {
                            return item
                          }}
                          dropdownBackgroundColor='yellow'
                          buttonStyle={{ backgroundColor: '#EEEEEE', width:135, borderRadius:3, height:55 }}
                          buttonTextStyle={{ fontSize: 18 }}
                          defaultValue={consultationSummaryDefaultValue}
                        />
                </View>
              </View>
            </View>
            </>
            }

          { vitalStatusDefaultValue == 1 &&
            <View>
              <Text className='mt-10 pl-5 font-semibold text-xs'>
              相続時期をご選択ください。
              </Text>
            <View className='mt-2'>
              <CalendarPicker onDateChange={setSelectedStartDate}
                selectedDayColor='#17AAB1' width={340}/>
              <Text className='ml-5'>Selected: {date}</Text>
            </View>
            </View>
          }
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