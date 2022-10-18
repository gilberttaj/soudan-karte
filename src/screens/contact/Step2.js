import { View, Text } from 'react-native';
import React, { useState } from 'react';
import SelectDropdown from 'react-native-select-dropdown';



const countries = ["Egypt", "Canada", "Australia", "Ireland","Ireland2","Ireland3","Ireland4","Ireland5","Ireland6","Ireland7","Ireland8","Ireland9","Ireland10",]

const fruits = ["mango", "banana", "orange", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", ] 




const Step2 = () => {

  const [defaultText , setDefaultText] = useState('mango');

  const [defaultValue, setDefaultValue] = useState(null);

  return (
    <View>
      <View className='bg-white mb-0.5'>
        <Text className='pl-5 py-2.5 text-lg text-neutral-600 font-semibold'>あなたのことを教えて下さい</Text>
      </View>
      <View className='flex-row bg-white justify-between pt-4'>
        <View className='w-1/2 flex-row'>
          <Text className='pl-5' style={{ fontSize:14 }}>お住いの都道府県</Text>
          <Text className='text-xs tracking-widest text-gray-400'> ------------</Text>
        </View>
        <View className='w-1/2 flex-row pl-2'>
          <View className='w-11/12 pr-2 mr-5'>
            <SelectDropdown
              className='pr-2 bg-yellow-500'
              data={countries}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem
              }}
              rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item
              }}
              dropdownBackgroundColor='yellow'
              buttonStyle={{ backgroundColor: 'yellow', marginRight:5 }}
            />
          </View>

        </View>
      </View>
      
      <View className=''>
      <SelectDropdown
              className='pr-2 bg-yellow-500 w-11/12'
              dropdownBackgroundColor='yellow'
              data={fruits}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem
              }}
              rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item
              }}

              defaultButtonText={defaultText}
              defaultValueByIndex={0}
              defaultValue={'mango'}
              buttonStyle={{ backgroundColor: 'yellow', paddingLeft:5 }}
            />
      </View>
     
    </View>
  )
}

export default Step2