import UpdateData from '@/actions/UpdateData';
import HomeScreen from '@/screen/HomeScreen';
import LoginScreen from '@/screen/LoginScreen';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


export type StackNavigation = {
  Home: undefined;
  Login: undefined;
  Update: { postId: string }; // Define `postId` como um parâmetro da rota `Update`
};

export type StackTypes = NativeStackNavigationProp<StackNavigation>;


export default function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Update" component={UpdateData} />
    </Stack.Navigator>
  );
}