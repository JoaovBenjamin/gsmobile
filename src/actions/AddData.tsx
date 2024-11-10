import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { Label } from '@/components/Label'
import { firebaseConfig } from '@/services/firebaseConfig'
import { initializeApp } from 'firebase/app'
import { getDatabase, ref, push, set, child } from 'firebase/database'

const app = initializeApp(firebaseConfig)
const db = getDatabase(app)

const AddData
 = () => {
    const [title, setTitle] = useState<string>('')
    const [body, setBody] = useState<string>('')
    
    async function handleSubmit() {
        if (title !== '' && body !== '') {
            const newPostKey = push(child(ref(db), 'posts')).key
            const newPostDB = ref(db, 'posts/' + newPostKey)
            const newPost = {
                title,
                body
            }

            await set(newPostDB, newPost)
            console.log('Novo Post Cadastrado')

            setTitle('')
            setBody('')
        } else {
            console.log('Erro ao adicionar')
        }
    }

    return (
        <View className="flex-1 items-center justify-center text-center gap-3">
            <Text className="text-3xl mb-6">Criar Post</Text>
            <View className="w-60 space-y-4">
                <Label>Title:</Label>
                <Input
                    value={title}
                    onChangeText={setTitle}
                    placeholder="Email"
                    className="w-full text-center"
                />
                <Label>Body:</Label>
                <Input
                    value={body}
                    onChangeText={setBody}
                    placeholder="Password"
                    className="w-full text-center"
                />
                <Button 
                    className="rounded-2xl bg-blue-600 mt-6"
                    variant="secondary" 
                    size="lg" 
                    onPress={handleSubmit}
                >
                    <Text className="text-white uppercase">Criar Post</Text>
                </Button>
            </View>
        </View>
    )
}

export default AddData

