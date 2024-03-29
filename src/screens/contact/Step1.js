import { View, Text, Image,TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { imageUrl } from '../../../assets/Icons';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryName } from '../../redux/consultationSlice';




const Step1 = () => {

  const categoryName = useSelector(state => state.consultation?.categoryName)

  const dispatch = useDispatch();

  const [index, setIndex] = useState(categoryName);

  useEffect(() => {
    dispatch(setCategoryName(index));
  }, [index])

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


  return (
    <View className=''>
      <View className='bg-white mb-0.5'>
        <Text className='pl-5 py-2.5 text-lg text-neutral-600 font-semibold'>カテゴリーを選んで下さい</Text>
      </View>
      <ScrollView className='mb-14'>
        <View className='flex-row justify-around bg-white pt-5 pb-4 pb mb-0.5'>
          <TouchableOpacity onPress={handleOption1} className='w-1/4'>
            <View>
              <View className='self-center'>
                <Image source={require('../../../assets/broken_heart.png')} style={{ width:40, height:40,tintColor:`${index == 0? '#E15A64' : '#AFAFAF'}` }}/>
              </View>
              <Text style={{fontSize:12, color: `${index == 0 ? '#E15A64': '#AFAFAF'}`}} className='text-center font-semibold'>離婚・男女</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleOption2} className='w-1/4'>
            <View>
              <View className='self-center'>
                <Image source={require('../../../assets/child.png')} style={{ width:40, height:40,tintColor:`${index == 1? '#10A88A' : '#AFAFAF'}` }}/>
              </View>
              <Text style={{fontSize:12, color: `${index == 1 ? '#10A88A': '#AFAFAF'}`}} className='text-center font-semibold'>養育費</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleOption3} className='w-1/4'>
            <View>
              <View className='self-center'>
                <Image source={require('../../../assets/bill.png')} style={{ width:40, height:40,tintColor:`${index == 2? '#89A92B' : '#AFAFAF'}` }}/>
              </View>
              <Text style={{fontSize:12, color: `${index == 2 ? '#89A92B': '#AFAFAF'}`}} className='text-center font-semibold'>金銭トラブル</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleOption4} className='w-1/4'>
            <View>
              <View className='self-center'>
                <Image source={require('../../../assets/grenade.png')} style={{ width:40, height:40,tintColor:`${index == 3? '#C23A3F' : '#AFAFAF'}` }}/>
              </View>
              <Text style={{fontSize:12, color: `${index == 3 ? '#C23A3F': '#AFAFAF'}`}} className='text-center font-semibold'>借金・破産</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View className='flex-row justify-around bg-white pt-5 pb-4 mb-0.5'>
          <TouchableOpacity onPress={handleOption5} className='w-1/4'>
            <View>
              <View className='self-center'>
                <Image source={require('../../../assets/mana.png')} style={{ width:40, height:40,tintColor:`${index == 4? '#E87348' : '#AFAFAF'}` }}/>
              </View>
              <Text style={{fontSize:12, color: `${index == 4 ? '#E87348': '#AFAFAF'}`}} className='text-center font-semibold'>相続</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleOption6} className='w-1/4'>
            <View>
              <View className='self-center'>
                <Image source={require('../../../assets/car.png')} style={{ width:40, height:40,tintColor:`${index == 5? '#4487DA' : '#AFAFAF'}` }}/>
              </View>
              <Text style={{fontSize:12, color: `${index == 5 ? '#4487DA': '#AFAFAF'}`}} className='text-center font-semibold'>交通事故</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleOption7} className='w-1/4'>
            <View>
              <View className='self-center'>
                <Image source={require('../../../assets/house.png')} style={{ width:40, height:40,tintColor:`${index == 6? '#8A6B55' : '#AFAFAF'}` }}/>
              </View>
              <Text style={{fontSize:12, color: `${index == 6 ? '#8A6B55': '#AFAFAF'}`}} className='text-center font-semibold'>不動產</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleOption8} className='w-1/4'>
            <View>
              <View className='self-center'>
                <Image source={require('../../../assets/posas.png')} style={{ width:40, height:40,tintColor:`${index == 7? '#96568B' : '#AFAFAF'}` }}/>
              </View>
              <Text style={{fontSize:12, color: `${index == 7 ? '#96568B': '#AFAFAF'}`}} className='text-center font-semibold'>刑事事件</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View className='flex-row justify-around bg-white pt-5 pb-4 mb-0.5'>
          <TouchableOpacity onPress={handleOption9} className='w-1/4'>
            <View>
              <View className='self-center'>
                <Image source={require('../../../assets/crying.png')} style={{ width:40, height:40,tintColor:`${index == 8? '#65BDE3' : '#AFAFAF'}` }}/>
              </View>
              <Text style={{fontSize:12, color: `${index == 8 ? '#65BDE3': '#AFAFAF'}`}} className='text-center font-semibold'>近隣トラブル/いじめ
じめ</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleOption10} className='w-1/4'>
            <View>
              <View className='self-center'>
                <Image source={require('../../../assets/cart.png')} style={{ width:40, height:40,tintColor:`${index == 9? '#3E6048' : '#AFAFAF'}` }}/>
              </View>
              <Text style={{fontSize:12, color: `${index == 9 ? '#3E6048': '#AFAFAF'}`}} className='text-center font-semibold'>消費者トラブル</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleOption11} className='w-1/4'>
            <View>
              <View className='self-center'>
                <Image source={require('../../../assets/worker.png')} style={{ width:40, height:40,tintColor:`${index == 10? '#214464' : '#AFAFAF'}` }}/>
              </View>
              <Text style={{fontSize:12, color: `${index == 10 ? '#214464': '#AFAFAF'}`}} className='text-center font-semibold'>労働問題</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleOption12} className='w-1/4'>
            <View>
              <View className='self-center'>
                <Image source={require('../../../assets/calculator.png')} style={{ width:40, height:40,tintColor:`${index == 11? '#EB8000' : '#AFAFAF'}` }}/>
              </View>
              <Text style={{fontSize:12, color: `${index == 11 ? '#EB8000': '#AFAFAF'}`}} className='text-center font-semibold'>確定申告</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View className='flex-row justify-around bg-white pt-5 pb-4 mb-0.5'>
          <TouchableOpacity onPress={handleOption13} className='w-1/4'>
            <View>
              <View className='self-center'>
                <Image source={require('../../../assets/office_person.png')} style={{ width:40, height:40,tintColor:`${index == 12? '#808996' : '#AFAFAF'}` }}/>
              </View>
              <Text style={{fontSize:12, color: `${index == 12 ? '#808996': '#AFAFAF'}`}} className='text-center font-semibold'>企業法務</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleOption14} className='w-1/4'>
            <View>
              <View className='self-center'>
                <Image source={require('../../../assets/envelope.png')} style={{ width:40, height:40,tintColor:`${index == 13? '#295C6E' : '#AFAFAF'}` }}/>
              </View>
              <Text style={{fontSize:12, color: `${index == 13 ? '#295C6E': '#AFAFAF'}`}} className='text-center font-semibold'>税務会計</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleOption15} className='w-1/4'>
            <View>
              <View className='self-center'>
                <Image source={require('../../../assets/time.png')} style={{ width:40, height:40,tintColor:`${index == 14? '#EDB700' : '#AFAFAF'}` }}/>
              </View>
              <Text style={{fontSize:12, color: `${index == 14 ? '#EDB700': '#AFAFAF'}`}} className='text-center font-semibold'>労務(企業)</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleOption16} className='w-1/4'>
            <View>
              <View className='self-center'>
                <Image source={require('../../../assets/hammer.png')} style={{ width:40, height:40,tintColor:`${index == 15? '#3A508F' : '#AFAFAF'}` }}/>
              </View>
              <Text style={{fontSize:12, color: `${index == 15 ? '#3A508F': '#AFAFAF'}`}} className='text-center font-semibold'>リーガルチェック</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View className='flex-row justify-around bg-white pt-5 pb-4 mb-0.5'>
          <TouchableOpacity onPress={handleOption17} className='w-1/4'>
            <View>
              <View className='self-center'>
                <Image source={require('../../../assets/office_arrow.png')} style={{ width:40, height:40,tintColor:`${index == 16? '#7FBF4A' : '#AFAFAF'}` }}/>
              </View>
              <Text style={{fontSize:12, color: `${index == 16 ? '#7FBF4A': '#AFAFAF'}`}} className='text-center font-semibold'>事業承継・M&A</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleOption18} className='w-1/4'>
            <View>
              <View className='self-center'>
                <Image source={require('../../../assets/sahod.png')} style={{ width:40, height:40,tintColor:`${index == 17? '#DF6AAB' : '#AFAFAF'}` }}/>
              </View>
              <Text style={{fontSize:12, color: `${index == 17 ? '#DF6AAB': '#AFAFAF'}`}} className='text-center font-semibold'>助成金・資金調達</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleOption19} className='w-1/4'>
            <View>
              <View className='self-center'>
                <Image source={require('../../../assets/pen.png')} style={{ width:40, height:40,tintColor:`${index ==18 ? '#AF70D4' : '#AFAFAF'}` }}/>
              </View>
              <Text style={{fontSize:12, color: `${index == 18 ? '#AF70D4': '#AFAFAF'}`}} className='text-center font-semibold'>行政手続き</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleOption20} className='w-1/4'>
            <View>
              <View className='self-center'>
                <Image source={require('../../../assets/people.png')} style={{ width:40, height:40,tintColor:`${index == 19? '#EA4C36' : '#AFAFAF'}` }}/>
              </View>
              <Text style={{fontSize:12, color: `${index == 19 ? '#EA4C36': '#AFAFAF'}`}} className='text-center font-semibold'>会社設立</Text>
            </View>
          </TouchableOpacity>
        </View>
        
        <View className='flex-row justify-around mb-0.5'>
          <TouchableOpacity onPress={handleOption21} className='w-1/4 bg-white py-4'>
            <View>
              <View className='self-center'>
                <Image source={require('../../../assets/card.png')} style={{ width:40, height:40,tintColor:`${index == 20? '#595FC2' : '#AFAFAF'}` }}/>
              </View>
              <Text style={{fontSize:12, color: `${index == 20 ? '#595FC2': '#AFAFAF'}`}} className='text-center font-semibold'>事業承継・M&A</Text>
            </View>
          </TouchableOpacity>
          <View className='w-1/4'>
          </View>
          <View className='w-1/4'>
          </View>
          <View className='w-1/4'>
          </View>
        </View>
      </ScrollView>

    </View>
  )
}

export default Step1