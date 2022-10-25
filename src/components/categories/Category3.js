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
  setSituation, 
  setConsultationType, 
  setRelationshipDuration, 
  setCat1Image } from '../../redux/category1Slice';
import { setDisputes, setContentInquiry } from '../../redux/category3Slice';

// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const disputes = [
  "20万円未満",
  "20万円以上100万円未満 ",
  "100万円以上1,000万円未満",
  "1,000万円以上",
]

const contentInquiries = [
  "損害賠償請求",
  "返金交渉 ",
  "詐欺被害",
  "その他",
]

const Category3 = () => {

  const dispatch = useDispatch();

  const dispute = useSelector(state => state.category3?.dispute)
  const contentInquiry = useSelector(state => state.category3?.contentInquiry)
  const detail = useSelector(state => state.consultation?.detail)
  
  const index = useSelector(state => state.consultation?.index)
  const isEnabled = useSelector(state => state.consultation?.isEnabled)
  const uploadedImage = useSelector(state => state.consultation?.image)
  
  const selectedDispute = dispute ? dispute : '20万円未満'; 
  const inputtedDetail = detail ? detail : '';
  const selectedContentInquiry = contentInquiry ? contentInquiry: '損害賠償請求' 

  const headerHeight = useHeaderHeight();
  const [image, setImage] = useState(uploadedImage);
  const [detailInput , setDetailInput] = useState(inputtedDetail);

  const [ disputeDefaultValue , setDisputeDefaultValue ] = useState(selectedDispute);
  const [ contentInquiryDefaultValue, setContentInquiryDefaultValue ] = useState(selectedContentInquiry)
  // const [ inputtedDefaultValue, setInputtedDefaultValue ] = useState(inputtedDetail);

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
              争点金額をご選択ください
            </Text>
            <View className='flex-row justify-end'>
              <View className='w-2/6 mr-5 mt-2'>
                <SelectDropdown
                        data={disputes}
                        onSelect={(selectedItem, index) => {
                          dispatch(setDisputes(selectedItem));
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
                        defaultValue={disputeDefaultValue}
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
                        data={contentInquiries}
                        onSelect={(selectedItem, index) => {
                          dispatch(setContentInquiry(selectedItem));
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
                        defaultValue={contentInquiryDefaultValue}
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

export default Category3