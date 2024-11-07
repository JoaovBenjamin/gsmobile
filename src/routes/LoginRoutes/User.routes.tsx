import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import DrawerRoutes from '../LoginRoutes/drawer.routes'

const UserRoutes = () => {
  return (
    <>
      <NavigationContainer>
         <DrawerRoutes/>
      </NavigationContainer>
    </>
  )
}
export default UserRoutes