import { View, Text } from 'react-native'
import React from 'react'
import { Input } from '@/components/Input'
import { Label } from '@/components/Label'

const LoginForm = () => {
  return (
   <View className="flex items-center justify-center text-center gap-3">
        <Text className='text-3xl mb-6'>Seja Bem Vindo de Volta</Text>
        <View className="w-60 space-y-4">
            <Label>Email:</Label>
            <Input
            placeholder="email"
            className="w-full text-center"
            />
            <Label>Senha:</Label>
            <Input
            placeholder="password"
            className="w-full text-center"
            />
        </View>
    </View>
  )
}

export default LoginForm;