import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { firebaseConfig } from '@/services/firebaseConfig';
import { useNavigation } from '@react-navigation/native';
import { initializeApp } from 'firebase/app';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react';
import { Alert, Text, View } from 'react-native';

export default function RecoveryPass() {
  const [email, setEmail] = useState('');
  const navigation = useNavigation()
  const firebase = initializeApp(firebaseConfig)
  const auth = getAuth(firebase)

  const handlePasswordReset = async () => {
    if (email === '') {
      Alert.alert('Erro', 'Por favor, insira seu email.');
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      Alert.alert(
        'Verifique seu Email',
        'Um link para redefinir sua senha foi enviado para o endereço de e-mail fornecido.'
      );
      navigation.goBack();
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível enviar o email de recuperação.');
    }
  };

  return (
    <View className="flex-1 justify-center items-center p-4 bg-gray-100">
      <Text className="text-2xl font-bold mb-6 text-gray-800">Recuperação de Senha</Text>

      <View className="w-full max-w-md space-y-4">
        <Text className="text-gray-600">Insira o e-mail associado à sua conta para recuperar sua senha:</Text>

        <Input
          placeholder="Digite seu e-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          className="h-12 border rounded-lg px-4 bg-white shadow-sm border-gray-300 text-gray-700"
        />

        <Button
          onPress={handlePasswordReset}
          className="bg-blue-600 rounded-lg p-3 items-center mt-4"
        >
          <Text className="text-white text-lg font-semibold">Recuperar Senha</Text>
        </Button>
      </View>
    </View>
  );
}
