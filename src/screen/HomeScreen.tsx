import AddData from '@/actions/AddData'
import PostList from '@/actions/GetData'
import React from 'react'
import { View } from 'react-native'

const HomeScreen = () => {
  return (
    <View>
      <PostList/>
    </View>
  )
}

export default HomeScreen