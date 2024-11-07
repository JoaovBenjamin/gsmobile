import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import StackRoutes from './stack.routes'
import TabsRoutes from './tabs.routes'

const AuthRoutes = () => {
  return (
    <>
        <NavigationContainer>
            <TabsRoutes/>
        </NavigationContainer>
    </>
  )
}

export default AuthRoutes