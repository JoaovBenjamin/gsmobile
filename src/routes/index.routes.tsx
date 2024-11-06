import { View, Text } from 'react-native'
import React from 'react'
import TabsRoutes from './tabs.routes'
import { NavigationContainer } from '@react-navigation/native'

const Routes = () => {
  return (
    <>
      <NavigationContainer>
         <TabsRoutes/>
      </NavigationContainer>
    </>
  )
}
export default Routes