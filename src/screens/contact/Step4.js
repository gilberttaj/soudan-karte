import { View, Text } from 'react-native'
import React from 'react'
import Confirm1 from '../../components/confirmation/Confirm1'
import Confirm2 from '../../components/confirmation/Confirm2'
import Confirm3 from '../../components/confirmation/Confirm3'
import Confirm4 from '../../components/confirmation/Confirm4'
import Confirm5 from '../../components/confirmation/Confirm5'
import Confirm6 from '../../components/confirmation/Confirm6'
import Confirm7 from '../../components/confirmation/Confirm7'
import Confirm8 from '../../components/confirmation/Confirm8'
import Confirm9 from '../../components/confirmation/Confirm9'
import Confirm10 from '../../components/confirmation/Confirm10'
import Confirm11 from '../../components/confirmation/Confirm11'
import Confirm12 from '../../components/confirmation/Confirm12'
import Confirm13 from '../../components/confirmation/Confirm13'
import Confirm14 from '../../components/confirmation/Confirm14'
import Confirm15 from '../../components/confirmation/Confirm15'
import Confirm16 from '../../components/confirmation/Confirm16'
import Confirm17 from '../../components/confirmation/Confirm17'
import Confirm18 from '../../components/confirmation/Confirm18'
import Confirm19 from '../../components/confirmation/Confirm19'
import Confirm20 from '../../components/confirmation/Confirm20'
import Confirm21 from '../../components/confirmation/Confirm21'

import { useSelector } from 'react-redux'

const Step4 = () => {

  const categoryName = useSelector(state => state.consultation?.categoryName)

  return (
    <>
      {
        categoryName == 0 ? <Confirm1/>
        :
        categoryName == 1 ? <Confirm2/>
        :
        categoryName == 2 ? <Confirm3/>
        :
        categoryName == 3 ? <Confirm4/>
        :
        categoryName == 4 ? <Confirm5/>
        :
        categoryName == 5 ? <Confirm6/>
        :
        categoryName == 6 ? <Confirm7/>
        :
        categoryName == 7 ? <Confirm8/>
        :
        categoryName == 8 ? <Confirm9/>
        :
        categoryName == 9 ? <Confirm10/>
        :
        categoryName == 10 ? <Confirm11/>
        :
        categoryName == 11 ? <Confirm12/>
        :
        categoryName == 12 ? <Confirm13/>
        :
        categoryName == 13 ? <Confirm14/>
        :
        categoryName == 14 ? <Confirm15/>
        :
        categoryName == 15 ? <Confirm16/>
        :
        categoryName == 16 ? <Confirm17/>
        :
        categoryName == 17 ? <Confirm18/>
        :
        categoryName == 18 ? <Confirm19/>
        :
        categoryName == 19 ? <Confirm20/>
        :
        <Confirm21/>
        
      }
    </>
  )
}

export default Step4