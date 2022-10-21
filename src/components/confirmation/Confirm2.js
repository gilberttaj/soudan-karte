import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'



const Confirm2 = () => {

  const civilStatus = useSelector(state => state.category2?.civilStatus)
  const haveRealEstate = useSelector(state => state.category2?.haveRealEstate)
  const childSupport = useSelector(state => state.category2?.childSupport)

  return (
    <View>
      <Text>{civilStatus}</Text>
      <Text>{haveRealEstate}</Text>
      <Text>{childSupport}</Text>
    </View>
  )
}

export default Confirm2