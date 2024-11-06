import LoginScreen from '@/screen/LoginScreen';
import RegisterScreen from '@/screen/RegisterScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { User, UserPlus } from 'lucide-react-native';


const Tab = createBottomTabNavigator();

export default function TabsRoutes() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen 
            name="Login" 
            component={LoginScreen} 
            options={{
                tabBarIcon: ({color, size}) => (
                    <User color={color} size={size}/>
                )
            }}
            />
      <Tab.Screen 
            name="Register" 
            component={RegisterScreen} 
            options={{
                tabBarIcon: ({color, size}) => (
                    <UserPlus color={color} size={size}/>
                )
            }}
            />
    </Tab.Navigator>
  );
}