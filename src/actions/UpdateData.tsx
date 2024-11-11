import { View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Label } from '@/components/Label';
import { getDatabase, ref, get, set } from 'firebase/database';
import { useRoute, RouteProp } from '@react-navigation/native';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '@/services/firebaseConfig';
import { StackNavigation } from '@/routes/stack.routes'; // Certifique-se de que o caminho está correto

// Define o tipo para a rota `Update`, que inclui o `postId`
type UpdateDataRouteProp = RouteProp<StackNavigation, 'Update'>;

const UpdateData = () => {
    const firebase = initializeApp(firebaseConfig);
    const db = getDatabase(firebase);
    const route = useRoute<UpdateDataRouteProp>();
    const { postId } = route.params; // Acessa o postId dos parâmetros de rota

    const [title, setTitle] = useState<string>('');
    const [body, setBody] = useState<string>('');

    // Função para buscar os dados do post atual
    useEffect(() => {
        const fetchPost = async () => {
            const postRef = ref(db, `posts/${postId}`);
            const snapshot = await get(postRef);
            if (snapshot.exists()) {
                const postData = snapshot.val();
                setTitle(postData.title);
                setBody(postData.body);
            } else {
                console.log('Post não encontrado.');
            }
        };
        fetchPost();
    }, [db, postId]);

    // Função para atualizar o post no Firebase
    async function handleUpdate() {
        if (title !== '' && body !== '') {
            const postRef = ref(db, `posts/${postId}`);
            await set(postRef, { title, body });
            console.log('Post atualizado com sucesso');

            setTitle('');
            setBody('');
        } else {
            console.log('Erro ao atualizar');
        }
    }

    return (
        <View className="flex-1 items-center justify-center text-center gap-3">
            <Text className="text-3xl mb-6">Editar Post</Text>
            <View className="w-60 space-y-4">
                <Label>Title:</Label>
                <Input
                    value={title}
                    onChangeText={setTitle}
                    placeholder="Digite o título"
                    className="w-full text-center"
                />
                <Label>Body:</Label>
                <Input
                    value={body}
                    onChangeText={setBody}
                    placeholder="Digite o conteúdo"
                    className="w-full text-center"
                />
                <Button 
                    className="rounded-2xl bg-blue-600 mt-6"
                    variant="secondary" 
                    size="lg" 
                    onPress={handleUpdate}
                >
                    <Text className="text-white uppercase">Atualizar Post</Text>
                </Button>
            </View>
        </View>
    );
};

export default UpdateData;
