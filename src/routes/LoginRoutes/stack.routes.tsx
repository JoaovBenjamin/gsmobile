import HomeScreen from '@/screen/HomeScreen';
import LoginScreen from '@/screen/LoginScreen';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

type StackNavigation = {
    Home: undefined;
    Login: undefined;

}

export type StackTypes = NativeStackNavigationProp<StackNavigation>
export default function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}