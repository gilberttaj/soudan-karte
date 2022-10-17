import { View, Text, Image,TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { imageUrl } from '../../../assets/Icons';



const Step1 = () => {

  const [index, setIndex] = useState(null);

  const handleOption1 = () => { 
    setIndex(0);
  }

  const handleOption2 = () => {
    setIndex(1);
  }

  const handleOption3 = () => {
    setIndex(2);
  }

  const handleOption4 = () => {
    setIndex(3);
  }

  const handleOption5 = () => { 
    setIndex(4);
  }

  const handleOption6 = () => {
    setIndex(5);
  }

  const handleOption7 = () => {
    setIndex(6);
  }

  const handleOption8 = () => {
    setIndex(7);
  }

  const handleOption9 = () => {
    setIndex(8);
  }

  const handleOption10 = () => {
    setIndex(9);
  }

  const handleOption11 = () => {
    setIndex(10);
  }

  const handleOption12 = () => {
    setIndex(11);
  }

  const handleOption13 = () => {
    setIndex(12);
  }

  const handleOption14 = () => {
    setIndex(13);
  }

  const handleOption15 = () => {
    setIndex(14);
  }

  const handleOption16 = () => {
    setIndex(15);
  }

  const handleOption17 = () => {
    setIndex(16);
  }

  const handleOption18 = () => {
    setIndex(17);
  }

  const handleOption19 = () => {
    setIndex(18);
  }

  const handleOption20 = () => {
    setIndex(19);
  }

  const handleOption21 = () => {
    setIndex(20);
  }




  console.log(index);


  return (
    <View className=''>
      <View className='bg-white mb-0.5'>
        <Text className='pl-5 py-3 text-lg text-neutral-600 font-semibold'>カテゴリーを選んで下さい</Text>
      </View>
      
      {/* <Image source={{uri: imageUrl.steps}}
                    style={{ width:75, height:30}} tintColor='blue' /> */}
      <ScrollView>
        <View className='flex-row justify-around bg-white py-5 mb-0.5'>
          <TouchableOpacity onPress={handleOption1}>
            <View>
              <View className='self-center'>
                <Image source={require('../../../assets/broken_heart.png')} style={{ width:40, height:40,tintColor:`${index == 0? 'yellow' : '#AFAFAF'}` }}/>
              </View>
              <Text className={`text-xs font-semibold ${index == 0 ? 'text-yellow-500' : 'text-zinc-400'}`}>離婚・男女</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleOption2}>
            <View>
              <View className='self-center'>
                <Image source={require('../../../assets/child.png')} style={{ width:40, height:40,tintColor:`${index == 1? 'yellow' : '#AFAFAF'}` }}/>
              </View>
              <Text className={`text-xs font-semibold ${index == 1 ? 'text-yellow-500' : 'text-zinc-400'}`}>養育費</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleOption3}>
            <View>
              <View className='self-center'>
                <Image source={require('../../../assets/bill.png')} style={{ width:40, height:40,tintColor:`${index == 2? 'yellow' : '#AFAFAF'}` }}/>
              </View>
              <Text className={`text-xs font-semibold ${index == 2 ? 'text-yellow-500' : 'text-zinc-400'}`}>金銭トラブル</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleOption4}>
            <View>
              <View className='self-center'>
                <Image source={require('../../../assets/grenade.png')} style={{ width:40, height:40,tintColor:`${index == 3? 'yellow' : '#AFAFAF'}` }}/>
              </View>
              <Text className={`text-xs font-semibold ${index == 3 ? 'text-yellow-500' : 'text-zinc-400'}`}>借金・破産</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View className='flex-row justify-around bg-white py-5 mb-0.5'>
          <TouchableOpacity onPress={handleOption5}>
            <View>
              <View className='self-center'>
                <Image source={require('../../../assets/mana.png')} style={{ width:40, height:40,tintColor:`${index == 4? 'yellow' : '#AFAFAF'}` }}/>
              </View>
              <Text className={`text-xs font-semibold ${index == 4 ? 'text-yellow-500' : 'text-zinc-400'}`}>相続</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleOption6}>
            <View>
              <View className='self-center'>
                <Image source={require('../../../assets/car.png')} style={{ width:40, height:40,tintColor:`${index == 5? 'yellow' : '#AFAFAF'}` }}/>
              </View>
              <Text className={`text-xs font-semibold ${index == 5 ? 'text-yellow-500' : 'text-zinc-400'}`}>交通事故</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleOption7}>
            <View>
              <View className='self-center'>
                <Image source={require('../../../assets/house.png')} style={{ width:40, height:40,tintColor:`${index == 6? 'yellow' : '#AFAFAF'}` }}/>
              </View>
              <Text className={`text-xs font-semibold ${index == 6 ? 'text-yellow-500' : 'text-zinc-400'}`}>不動產</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleOption8}>
            <View>
              <View className='self-center'>
                <Image source={require('../../../assets/posas.png')} style={{ width:40, height:40,tintColor:`${index == 7? 'yellow' : '#AFAFAF'}` }}/>
              </View>
              <Text className={`text-xs font-semibold ${index == 7 ? 'text-yellow-500' : 'text-zinc-400'}`}>刑事事件</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View className='flex-row justify-around bg-white py-5 mb-0.5'>
          <TouchableOpacity onPress={handleOption9}>
            <View>
              <View className='self-center'>
                <Image source={require('../../../assets/crying.png')} style={{ width:40, height:40,tintColor:`${index == 8? 'yellow' : '#AFAFAF'}` }}/>
              </View>
              <Text className={`text-xs font-semibold ${index == 8 ? 'text-yellow-500' : 'text-zinc-400'}`}>相続</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleOption10}>
            <View>
              <View className='self-center'>
                <Image source={require('../../../assets/cart.png')} style={{ width:40, height:40,tintColor:`${index == 9? 'yellow' : '#AFAFAF'}` }}/>
              </View>
              <Text className={`text-xs font-semibold ${index == 9 ? 'text-yellow-500' : 'text-zinc-400'}`}>交通事故</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleOption11}>
            <View>
              <View className='self-center'>
                <Image source={require('../../../assets/worker.png')} style={{ width:40, height:40,tintColor:`${index == 10? 'yellow' : '#AFAFAF'}` }}/>
              </View>
              <Text className={`text-xs font-semibold ${index == 10 ? 'text-yellow-500' : 'text-zinc-400'}`}>不動產</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleOption12}>
            <View>
              <View className='self-center'>
                <Image source={require('../../../assets/calculator.png')} style={{ width:40, height:40,tintColor:`${index == 11? 'yellow' : '#AFAFAF'}` }}/>
              </View>
              <Text className={`text-xs font-semibold ${index == 11 ? 'text-yellow-500' : 'text-zinc-400'}`}>刑事事件</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View className='flex-row justify-around bg-white py-5 mb-0.5'>
          <TouchableOpacity onPress={handleOption13}>
            <View>
              <View className='self-center'>
                <Image source={require('../../../assets/office_person.png')} style={{ width:40, height:40,tintColor:`${index == 12? 'yellow' : '#AFAFAF'}` }}/>
              </View>
              <Text className={`text-xs font-semibold ${index == 12 ? 'text-yellow-500' : 'text-zinc-400'}`}>相続</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleOption14}>
            <View>
              <View className='self-center'>
                <Image source={require('../../../assets/envelope.png')} style={{ width:40, height:40,tintColor:`${index == 13? 'yellow' : '#AFAFAF'}` }}/>
              </View>
              <Text className={`text-xs font-semibold ${index == 13 ? 'text-yellow-500' : 'text-zinc-400'}`}>交通事故</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleOption15}>
            <View>
              <View className='self-center'>
                <Image source={require('../../../assets/time.png')} style={{ width:40, height:40,tintColor:`${index == 14? 'yellow' : '#AFAFAF'}` }}/>
              </View>
              <Text className={`text-xs font-semibold ${index == 14 ? 'text-yellow-500' : 'text-zinc-400'}`}>不動產</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleOption16}>
            <View>
              <View className='self-center'>
                <Image source={require('../../../assets/hammer.png')} style={{ width:40, height:40,tintColor:`${index == 15? 'yellow' : '#AFAFAF'}` }}/>
              </View>
              <Text className={`text-xs font-semibold ${index == 15 ? 'text-yellow-500' : 'text-zinc-400'}`}>刑事事件</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View className='flex-row justify-around bg-white py-5 mb-0.5'>
          <TouchableOpacity onPress={handleOption17}>
            <View>
              <View className='self-center'>
                <Image source={require('../../../assets/office_arrow.png')} style={{ width:40, height:40,tintColor:`${index == 16? 'yellow' : '#AFAFAF'}` }}/>
              </View>
              <Text className={`text-xs font-semibold ${index == 16 ? 'text-yellow-500' : 'text-zinc-400'}`}>相続</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleOption18}>
            <View>
              <View className='self-center'>
                <Image source={require('../../../assets/sahod.png')} style={{ width:40, height:40,tintColor:`${index == 17? 'yellow' : '#AFAFAF'}` }}/>
              </View>
              <Text className={`text-xs font-semibold ${index == 17 ? 'text-yellow-500' : 'text-zinc-400'}`}>交通事故</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleOption19}>
            <View>
              <View className='self-center'>
                <Image source={require('../../../assets/pen.png')} style={{ width:40, height:40,tintColor:`${index ==18 ? 'yellow' : '#AFAFAF'}` }}/>
              </View>
              <Text className={`text-xs font-semibold ${index == 18 ? 'text-yellow-500' : 'text-zinc-400'}`}>不動產</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleOption20}>
            <View>
              <View className='self-center'>
                <Image source={require('../../../assets/people.png')} style={{ width:40, height:40,tintColor:`${index == 19? 'yellow' : '#AFAFAF'}` }}/>
              </View>
              <Text className={`text-xs font-semibold ${index == 19 ? 'text-yellow-500' : 'text-zinc-400'}`}>刑事事件</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
 

    </View>
  )
}

export default Step1