import AddData from '@/actions/AddData';
import UpdateData from '@/actions/UpdateData';
import RecoveryPass from '@/app/RecoveryPass/RecoveryPass';
import HomeScreen from '@/screen/HomeScreen';
import LoginScreen from '@/screen/LoginScreen';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SafeAreaFrameContext } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();


export type StackNavigation = {
  Home: undefined;
  Login: undefined;
  Create: undefined;
  Recovery: undefined;
  Update: { postId: string }; 
};

export type StackTypes = NativeStackNavigationProp<StackNavigation>;


export default function StackRoutes() {
  return (
    <Stack.Navigator  screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Login' component={LoginScreen}/>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name='Recovery' component={RecoveryPass}/>
      <Stack.Screen name='Create' component={AddData}/>
      <Stack.Screen name="Update" component={UpdateData} />
    </Stack.Navigator>
  );
}
