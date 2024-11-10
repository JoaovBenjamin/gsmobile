import { View, Text, Alert } from 'react-native'
import React, { useState } from 'react'
import { Input } from '@/components/Input'
import { Label } from '@/components/Label'
import { Button } from '@/components/Button'
import {useNavigation} from '@react-navigation/native'
import { StackTypes } from '@/routes/stack.routes'
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth'
import { firebaseConfig } from '@/services/firebaseConfig'
import { initializeApp } from 'firebase/app'

const LoginForm = () => {

  const firebase = initializeApp(firebaseConfig)
  const auth = getAuth(firebase)

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const navigation = useNavigation<StackTypes>();

  async function handleSubmit() {
    if (email !== '' && senha !== '') {
      await signInWithEmailAndPassword(auth, email, senha)
        .then(() => {
          navigation.navigate('Home')
        })
        .catch((error) => {
          Alert.alert(error.code, error.message);
        });
    }
  }

  return (
   <View className="flex-1 items-center justify-center text-center gap-3">
        <Text className='text-3xl mb-6'>Seja Bem Vindo de Volta</Text>
        <View className="w-60 space-y-4">
            <Label>Email:</Label>
            <Input
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            className="w-full text-center"
            />
            <Label>Senha:</Label>
            <Input
            value={senha}
            onChangeText={setSenha}
            placeholder="Password"
            className="w-full text-center"
            />
            <Button 
                className='rounded-2xl bg-blue-600 mt-6'
                variant='secondary' 
                size='lg' 
                onPress={handleSubmit}>
              <Text className='text-white uppercase'>Login</Text>
            </Button>
        </View>
    </View>
  )
}

export default LoginForm;