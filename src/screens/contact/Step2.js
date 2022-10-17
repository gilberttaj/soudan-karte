import { View, Text } from 'react-native';
import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';


const Step2 = () => {

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'}
  ]);



  return (
    <View>
      <View className='bg-white mb-0.5'>
        <Text className='pl-5 py-2.5 text-lg text-neutral-600 font-semibold'>あなたのことを教えて下さい</Text>
      </View>
      <View>
        <View>
          <Text>お住いの都道府県 ----------------</Text>
        </View>
        <View>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />
        </View>
      </View>
    </View>
  )
}

export default Step2