import { View, Text } from 'react-native'
import React from 'react'
import { Slot } from 'expo-router'

const Layout = () => {
  return(<View className='mt-5'>
    <Text>hello layout</Text>
    <Slot />
  </View>)
}

export default Layout