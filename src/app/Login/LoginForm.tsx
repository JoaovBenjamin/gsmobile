import { View, Text } from 'react-native'
import React from 'react'
import { Input } from '@/components/Input'
import { Label } from '@/components/Label'
import { Button } from '@/components/Button'
import {useNavigation} from '@react-navigation/native'
import { StackTypes } from '@/routes/stack.routes'

const LoginForm = () => {
  const navigation = useNavigation<StackTypes>();
  return (
   <View className="flex-1 items-center justify-center text-center gap-3">
        <Text className='text-3xl mb-6'>Seja Bem Vindo de Volta</Text>
        <View className="w-60 space-y-4">
            <Label>Email:</Label>
            <Input
            placeholder="Email"
            className="w-full text-center"
            />
            <Label>Senha:</Label>
            <Input
            placeholder="Password"
            className="w-full text-center"
            />
            <Button 
                className='rounded-2xl bg-blue-600 mt-6'
                variant='secondary' 
                size='lg' 
                onPress={() => 
                  {console.log('testando')
                  navigation.navigate('Home')
                }}>
              <Text className='text-white uppercase'>Login</Text>
            </Button>
        </View>
    </View>
  )
}

export default LoginForm;