import { View, Text } from 'react-native'
import React from 'react'
import Category1 from '../../components/categories/Category1'
import Category2 from '../../components/categories/Category2'
import Category3 from '../../components/categories/Category3'
import Category4 from '../../components/categories/Category4'
import Category5 from '../../components/categories/Category5'
import Category6 from '../../components/categories/Category6'
import Category7 from '../../components/categories/Category7'
import Category8 from '../../components/categories/Category8'
import Category9 from '../../components/categories/Category9'
import Category10 from '../../components/categories/Category10'
import Category11 from '../../components/categories/Category11'
import Category12 from '../../components/categories/Category12'
import Category13 from '../../components/categories/Category13'
import Category14 from '../../components/categories/Category14'
import Category15 from '../../components/categories/Category15'
import Category16 from '../../components/categories/Category16'
import Category17 from '../../components/categories/Category17'
import Category18 from '../../components/categories/Category18'
import Category19 from '../../components/categories/Category19'
import Category20 from '../../components/categories/Category20'
import Category21 from '../../components/categories/Category21'
import { useSelector } from 'react-redux'



const Step3 = () => {

  const categoryName = useSelector(state => state.consultation?.categoryName)


  return (
    <>
      {
        categoryName == 0 ? <Category1/>
        :
        categoryName == 1 ? <Category2/>
        :
        categoryName == 2 ? <Category3/>
        :
        categoryName == 3 ? <Category4/>
        :
        categoryName == 4 ? <Category5/>
        :
        categoryName == 5 ? <Category6/>
        :
        categoryName == 6 ? <Category7/>
        :
        categoryName == 7 ? <Category8/>
        :
        categoryName == 8 ? <Category9/>
        :
        categoryName == 9 ? <Category10/>
        :
        categoryName == 10 ? <Category11/>
        :
        categoryName == 11 ? <Category12/>
        :
        categoryName == 12 ? <Category13/>
        :
        categoryName == 13 ? <Category14/>
        :
        categoryName == 14 ? <Category15/>
        :
        categoryName == 15 ? <Category16/>
        :
        categoryName == 16 ? <Category17/>
        :
        categoryName == 17 ? <Category18/>
        :
        categoryName == 18 ? <Category19/>
        :
        categoryName == 19 ? <Category20/>
        :
        <Category21/>
      }
    </>
  )
}

export default Step3