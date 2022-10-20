import { 
  View, 
  Text, 
  TextInput, 
  ScrollView, 
  KeyboardAvoidingView,
  Platform, 
  Pressable, 
  Image
} from 'react-native'
import React, { useEffect, useState } from 'react'
import SelectDropdown from 'react-native-select-dropdown';
import { useHeaderHeight } from '@react-navigation/elements';
import * as ImagePicker from 'expo-image-picker';
import { useDispatch, useSelector } from 'react-redux';
import { setStep3Detail } from '../../redux/consultationSlice';
import { 
  setSituation, 
  setHouseholdAnnual, 
  setRelationshipDuration, 
  setMap, 
  setChildren, 
  setDetail, 
  setCat1Image,
  setEssentials,
} from '../../redux/category1Slice';
import RadioButtonRN from 'radio-buttons-react-native';

const Category2 = () => {
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
  
  const annualIncome = [
    '300万円未満',
    '2年以上10年未满',
    '10年以上',
  ]
  const maps = [
    '不良行為',
    '2年以上10年未满',
    '10年以上',
  ]
  
  const children = [
    'いない',
    '2年以上10年未满',
    '10年以上',
  ]
  const essentials = [
    '養育費を取り決めたい',
    '2年以上10年未满',
    '10年以上',
  ]
  
  const data1 = [
    {
      label: '同居中'
     },
     {
      label: '別居中'
     }
  ];
  
  const data2 = [
    {
      label: '持っている'
     },
     {
      label: '持っていない'
     }
  ];
  
  const data3 = [
    {
      label: '知っている'
     },
     {
      label: '知らない'
     }
  ];
  
  const dispatch = useDispatch();

  const situation = useSelector(state => state.category1?.situation)
  const relationshipDuration = useSelector(state => state.category1?.relationshipDuration)
  const consultationType = useSelector(state => state.category1?.consultationType)
  const detail = useSelector(state => state.category1?.detail)
  const step3Detail = useSelector(state => state.consultation?.step3Detail)
  const houseHoldAnnual = useSelector(state => state.householdAnnual?.householdAnnual)
  const map = useSelector(state => state.map?.map)
  const child = useSelector(state => state.child?.child)
  const essential =useSelector(state => state.essential?.essential)
  
  const selectedSituation = situation ? situation : '未婚'; 
  const selectedRelationshipDuration = relationshipDuration ? relationshipDuration : '2年未滿';
  const selectedConsultationType = consultationType ? consultationType : 'その他'
  const selectedHouseHoldAnnual = houseHoldAnnual ? houseHoldAnnual : '300万円未満'
  const selectedMap = map ? map : '不良行為'
  const selectedChild = child ? child: 'いない'
  const selectedEssential = essential ? essential : '養育費を取り決めたい'

  const inputItem = step3Detail ? step3Detail : '';

  const headerHeight = useHeaderHeight();
  
  const [image, setImage] = useState(null);
  const [detailInput , setDetailInput] = useState(inputItem);
  const [ situationDefaultValue , setSituationDefaultValue ] = useState(selectedSituation);
  const [relationshipDurationDefaultValue, setRelationshipDurationDefaultValue] = useState(selectedRelationshipDuration);
  const [consultationTypeDefaultValue, setConsultationTypeDefaultValue] = useState(selectedConsultationType);
  const [mapDefaultValue, setMapDefaultValue] = useState(selectedMap);
  const [houseHoldAnnualDefaultValue , setHouseHoldAnnualDefaultValue ] = useState(selectedHouseHoldAnnual);
  const [childrenDefaultValue , setChildrenDefaultValue ] = useState(selectedChild);
  const [essentialDefaultValue, setEssentialDefaultValue] = useState(selectedEssential)
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
    if(detailInput.length > 0){
      dispatch(setStep3Detail(true))
    }

  },[detailInput])
  return (
    <KeyboardAvoidingView
    keyboardVerticalOffset={headerHeight}
    behavior={Platform.OS === "ios" ? "padding" : null}
    style={{ flex:1 }}
    >
      <View className='bg-white mb-0.5'>
        <Text className='pl-5 py-2.5 text-lg text-neutral-600 font-semibold'>困っていることを詳しく教えてください</Text>
      </View>

      <ScrollView className='mb-4'>
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
              同居中ですか?別居中ですか?
            </Text>
            <View className="ml-4">
              <RadioButtonRN
                data={data1}
                // selectedBtn={}
                circleSize={12}
                activeColor='#17AAB1'
                box={false}
              />
            </View>
          </View>
          
          <View>
            <Text className='mt-5 pl-5 font-semibold text-xs'>
              世帯年収をご選択ください
            </Text>
            <View className='flex-row justify-end'>
              <View className='mr-5 mt-2'>
                <SelectDropdown
                        data={annualIncome}
                        onSelect={(selectedItem, index) => {
                          dispatch(setHouseholdAnnual(selectedItem));
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {
                          return selectedItem
                        }}
                        rowTextForSelection={(item, index) => {
                          return item
                        }}
                        dropdownBackgroundColor='yellow'
                        buttonStyle={{ backgroundColor: '#EEEEEE', width:200, borderRadius:3, height:55 }}
                        buttonTextStyle={{ fontSize: 18 }}
                        defaultValue={houseHoldAnnualDefaultValue}
                      />
              </View>
            </View>
          </View>
          <View>
            <Text className='mt-5 pl-5 font-semibold text-xs'>
              地図をご選択ください
            </Text>
            <View className='flex-row justify-end'>
              <View className='mr-5 mt-2'>
                <SelectDropdown
                        data={maps}
                        onSelect={(selectedItem, index) => {
                          dispatch(setMap(selectedItem));
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
                        defaultValue={mapDefaultValue}
                      />
              </View>
            </View>
          </View>
            
          <View>
            <Text className='mt-5 pl-5 font-semibold text-xs'>
              不動産はお持ちですか?
            </Text>
            <View className="ml-4">
              <RadioButtonRN
                data={data2}
                // selectedBtn={}
                circleSize={12}
                activeColor='#17AAB1'
                box={false}
              />
            </View>
          </View>
          
          <View>
            <Text className='mt-5 pl-5 font-semibold text-xs'>
              ご状況をご選択ください
            </Text>
            <View className='flex-row justify-end'>
              <View className='w-2/6 mr-5 mt-2'>
                <SelectDropdown
                        data={children}
                        onSelect={(selectedItem, index) => {
                          dispatch(setChildren(selectedItem));
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
                        defaultValue={childrenDefaultValue}
                      />
              </View>
              
            </View>
          </View>
          
          <View>
            <Text className='mt-5 pl-5 font-semibold text-xs'>
              地図をご選択ください
            </Text>
            <View className='flex-row justify-end'>
              <View className='mr-5 mt-2'>
                <SelectDropdown
                        data={essentials}
                        onSelect={(selectedItem, index) => {
                          dispatch(setEssentials(selectedItem));
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {
                          return selectedItem
                        }}
                        rowTextForSelection={(item, index) => {
                          return item
                        }}
                        dropdownBackgroundColor='yellow'
                        buttonStyle={{ backgroundColor: '#EEEEEE', width:275, borderRadius:3, height:55 }}
                        buttonTextStyle={{ fontSize: 18 }}
                        defaultValue={essentialDefaultValue}
                      />
              </View>
            </View>
          </View>
          
          <View>
            <Text className='mt-5 pl-5 font-semibold text-xs'>
              養育費安心サポートをご存知ですか? 
            </Text>
            <View className="ml-4">
              <RadioButtonRN
                data={data3}
                // selectedBtn={}
                circleSize={12}
                activeColor='#17AAB1'
                box={false}
              />
            </View>
          </View>
          
        </View>
        <View className='bg-white pb-8'>
          <View className='mx-5 pt-4'>
            <TextInput style={{height:140, textAlignVertical:'top', fontSize:15 ,borderBottomWidth: 1, borderBottomColor: '#7E7E7E'}} placeholder={'ご相談内容を端的にご記入ください。(いつどこで 誰が誰に何をするのか、どうしたいのかを意識し てご記入いただけますとより具体的な回答が期待 できます。)'}
            multiline={true} onChangeText={updateInputValueHandler.bind(this, 'detailInput')} />
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

    </KeyboardAvoidingView>
  )
}

export default Category2