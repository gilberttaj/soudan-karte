import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import RadioButtonRN from 'radio-buttons-react-native';
import { setAge, setPrefecture, setGender } from '../../redux/consultationSlice';
import { useDispatch, useSelector } from 'react-redux';



const prefectures = [
      "北海道",
      "青森県",
      "岩手県",
      "宮城県",
      "秋田県",
      "山形県",
      "福島県",
      "茨城県",
      "栃木県",
      "群馬県",
      "埼玉県",
      "千葉県",
      "東京都",
      "神奈川県",
      "新潟県",
      "富山県",
      "石川県",
      "福井県",
      "山梨県",
      "長野県",
      "岐阜県",
      "静岡県",
      "愛知県",
      "三重県",
      "滋賀県",
      "京都府",
      "大阪府",
      "兵庫県",
      "奈良県",
      "和歌山県",
      "鳥取県",
      "島根県",
      "岡山県",
      "広島県",
      "山口県",
      "德島県",
      "徳島県",
      "香川県",
      "愛媛県",
      "高知県",
      "福岡県",
      "佐賀県",
      "長崎県",
      "熊本県",
      "大分県",
      "宮崎県",
      "鹿児島県",
      "沖縄県",
]


const data = [
  {
    label: '男性'
   },
   {
    label: '女性'
   }
  ];

  let ages = [];
  for (let i = 18; i <= 80; i++){
    if(i == 18){
      ages.push(`${i}歳以下`)
    }if(i == 80){
      ages.push(`${i}歳以上`)
    }if(i != 18 && i != 80){
      ages.push(`${i}歳`)
    }
  }


const Step2 = () => {

  const prefecture = useSelector(state => state.consultation?.prefecture)
  const age = useSelector(state => state.consultation?.age)
  const gender = useSelector(state => state.consultation?.gender)

  const selectedPrefecture = prefecture ? prefecture : '北海道'; 

  const selectedAge = age ? age : '18歳以下'; 

  const selectedGender = gender ? gender : 1; 

  const dispatch = useDispatch();



  const [prefDefaultValue, setPrefDefaultValue] = useState(selectedPrefecture);

  const [ageDefaultValue, setAgeDefaultValue] = useState(selectedAge);

  const [genderDefaultValue, setGenderDefaultValue] = useState(selectedGender);

  const onSelectGender = (e) => {
    dispatch(setGender(data.indexOf(e) + 1));
  }

  // console.log(gender);
  // console.log(genderDefaultValue);


  return (
    <View>
      <View className='bg-white mb-0.5'>
        <Text className='pl-5 py-2.5 text-neutral-600 font-semibold'>あなたのことを教えて下さい</Text>
      </View>

      <View className='bg-white'>
        <View className='flex-row justify-between pt-4'>
          <View className='w-1/2 flex-row'>
            <Text className='pl-5' style={{ fontSize:12 }}>お住いの都道府県</Text>
            <Text className='text-xs tracking-widest text-gray-400'> ----------------</Text>
          </View>
          <View className='w-1/2 flex-row pl-2 pr-1'>
            <View className='w-11/12 rounded-sm -mt-1'>
                <SelectDropdown
                  data={prefectures}
                  onSelect={(selectedItem, index) => {
                    dispatch(setPrefecture(selectedItem));
                  }}
                  buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem
                  }}
                  rowTextForSelection={(item, index) => {
                    return item
                  }}
                  dropdownBackgroundColor='yellow'
                  buttonStyle={{ backgroundColor: '#EEEEEE', width:'100%', borderRadius:3, height:40 }}
                  buttonTextStyle={{ fontSize: 18 }}
                  defaultValue={prefDefaultValue}
                />
            </View>
          </View>
        </View>

        <View className='flex-row justify-between pt-4 mt-1.5'>
          <View className='w-1/2 flex-row'>
            <Text className='pl-5' style={{ fontSize:12 }}>おいくつですか?</Text>
            <Text className='text-xs tracking-widest text-gray-400'>  ----------------</Text>
          </View>
          <View className='w-1/2 flex-row pl-2 pr-1'>
            <View className='w-11/12 rounded-sm -mt-1'>
                <SelectDropdown
                  data={ages}
                  onSelect={(selectedItem, index) => {
                    dispatch(setAge(selectedItem));
                  }}
                  buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem
                  }}
                  rowTextForSelection={(item, index) => {
                    return item
                  }}
                  dropdownBackgroundColor='yellow'
                  buttonStyle={{ backgroundColor: '#EEEEEE', width:'100%', borderRadius:3, height:40 }}
                  buttonTextStyle={{ fontSize: 18 }}
                  defaultValue={ageDefaultValue}
                />
            </View>
          </View>
        </View>
        
        <View className='flex-row mt-5 mb-3'>
          <View className='w-1/2 mt-6 flex-row'>
            <Text className='pl-5' style={{ fontSize:12 }}>
              男性ですか? 女性ですか?
            </Text>
            <Text className='text-xs tracking-widest text-gray-400'>  -----</Text>
          </View>
          <View className='w-1/2'>
          <RadioButtonRN
            data={data}
            selectedBtn={onSelectGender}
            circleSize={12}
            activeColor='#17AAB1'
            box={false}
            initial={genderDefaultValue}
          />
          </View>
        </View>
      </View>
    </View>
  )
}

export default Step2