import { 
  View, 
  Text, 
  ScrollView, 
  TouchableOpacity, 
  Image } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementIndex, setIsEnabled } from '../../redux/consultationSlice'

const Confirm7 = () => {
  
  const dispatch = useDispatch();

    const prefecture = useSelector(state => state.consultation?.prefecture)
    const age = useSelector(state => state.consultation?.age)
    const gender = useSelector(state => state.consultation?.gender)
    const detail = useSelector(state => state.consultation?.detail)
    const image = useSelector(state => state.consultation?.image)
    
    const closestInquiry1 = useSelector(state => state.category7?.closestInquiry1)
    const position = useSelector(state => state.category7?.position)
    const closestInquiry2 = useSelector(state => state.category7?.closestInquiry2)
    const stayPeriod = useSelector(state => state.category7?.stayPeriod)
    const rentDuration = useSelector(state => state.category7?.rentDuration)
    
    const handleBack = () => {
        dispatch(decrementIndex());
        dispatch(setIsEnabled(true));
    }

    return (
        <View className='flex-1'>
            <View className='bg-white mb-0.5'>
                <Text className='pl-5 py-2.5 text-lg text-neutral-600 font-semibold'>内容を確認して送信してください</Text>
            </View>

            <ScrollView className=''>
                <View className='bg-white'>
                    <View className='pt-4 border mt-5 mb-3 mx-3'>
                        <View className='pl-5 mb-8'>
                            <Text className='text-primary'>都道府県</Text>
                            <Text>{prefecture}</Text>
                        </View>

                        <View className='pl-5 mb-8'>
                            <Text className='text-primary'>年齢</Text>
                            <Text>{age}</Text>
                        </View>

                        <View className='pl-5 mb-8'>
                            <Text className='text-primary'>性別</Text>
                            <Text>{gender}</Text>
                        </View>
                        
                        <View className='pl-5 mb-8'>
                            <Text className='text-primary'>相談内容</Text>
                            <Text>{closestInquiry1}</Text>
                        </View>
                        
                        <View className='pl-5 mb-8'>
                            <Text className='text-primary'>立場</Text>
                            <Text>{position}</Text>
                        </View>
                    
                        <View className='pl-5 mb-8'>
                            <Text className='text-primary'>相談内容</Text>
                            <Text>{closestInquiry2}</Text>
                        </View>
                        
                        <View className='pl-5 mb-8'>
                            <Text className='text-primary'>入居期間 </Text>
                            <Text>{stayPeriod}</Text>
                        </View>
                        
                        <View className='pl-5 mb-8'>
                            <Text className='text-primary'>滞納期間</Text>
                            <Text>{rentDuration}</Text>
                        </View>
                        
                        <View className='pl-5 mb-8'>
                            <Text className='text-primary'>詳細</Text>
                            <Text>{detail}</Text>
                        </View>

                        <View className='pl-5 mb-3'>
                            {image && <Image source={{ uri: image  }} style={{ width: 150, height: 150 }} />}
                        </View>
                    </View>
                </View>


                <View className='bg-white mt-1'>
                    <View className='ml-5 mt-5'>
                        <Text className='font-semibold'>カルテを登録しますか?</Text>
                    </View>
                    
                    <View className='ml-5 mt-3 mr-4'>
                        <Text className='text-xs text-neutral-600'>・送化後の修正・削除はできません</Text>
                        <Text className='text-xs text-neutral-600'>・1つのカルテにつき最大1人の専門家が回答できます</Text>
                        <Text className='text-xs text-neutral-600'>・専門家から回答があった際は、直接チャットにてやりとりをし てください</Text>
                    </View>

                    <View className='flex-row justify-center'>
                        <View className='bg-primary w-11/12 mt-4 rounded-sm'>
                            <TouchableOpacity>
                                    <Text className='text-center text-white py-1.5'>相談カルテを登録する</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
    
                    <View className='flex-row justify-center mb-3'>
                        <View className='w-11/12 mt-5 rounded-sm' style={{ backgroundColor: '#F2F2F2' }}>
                            <TouchableOpacity onPress={handleBack}>
                                    <Text className='text-center py-1.5 text-neutral-600'>もどる</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                
            </ScrollView>
        </View>
    )
}

export default Confirm7