import HomeScreen from '@/screen/HomeScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home, User } from 'lucide-react-native';
import TabsRoutes from './tabs.routes';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator screenOptions={{ title: '' }}>
      <Drawer.Screen
        name='Login'
        component={TabsRoutes}
        options={{
          drawerIcon: ({ color, size }) => (
            <User color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name='Home'
        component={HomeScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Home color={color} size={size} />
          )
        }}
      />
    </Drawer.Navigator>
  );
}