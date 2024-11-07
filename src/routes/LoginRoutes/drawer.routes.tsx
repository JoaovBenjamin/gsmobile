import { createDrawerNavigator } from '@react-navigation/drawer';
import StackRoutes from './stack.routes';
import TabsRoutes from '../AuthRoutes/tabs.routes';
import HomeScreen from '@/screen/HomeScreen';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator initialRouteName='Login'screenOptions={{title: ''}}>
      <Drawer.Screen
        name='Home'
        component={HomeScreen}
      />
    </Drawer.Navigator>
  );
}