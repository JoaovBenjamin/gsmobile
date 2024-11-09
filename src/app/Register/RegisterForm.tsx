import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { Label } from '@/components/Label'
import { StackTypes } from '@/routes/LoginRoutes/stack.routes'
import { firebaseConfig } from '@/services/firebaseConfig'
import { useNavigation } from '@react-navigation/native'
import { initializeApp } from 'firebase/app'
import {
  createUserWithEmailAndPassword,
  getAuth,
} from 'firebase/auth'
import React, { useState } from 'react'
import { Text, View } from 'react-native'

const RegisterForm = () => {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const navigation = useNavigation<StackTypes>();

  const firebase = initializeApp(firebaseConfig);
  const auth = getAuth(firebase);

  async function singUp() {
    await createUserWithEmailAndPassword(auth, email, senha)
      .then(() => {
        console.log('User account created & signed in!');
        navigation.navigate('Login')
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
        console.error(error);
      });
  }

  return (
    <View className="flex-1 items-center justify-center text-center gap-3">
      <Text className='text-3xl mb-6'>Crie sua conta</Text>
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
          onPress={singUp}>
          <Text className='text-white uppercase'>Criar Conta</Text>
        </Button>
      </View>
    </View>
  )
}

export default RegisterForm;