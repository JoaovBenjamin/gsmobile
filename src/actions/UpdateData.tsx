import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Label } from '@/components/Label';
import { getDatabase, ref, update } from 'firebase/database';
import { useRoute } from '@react-navigation/native'; 


interface RouteParams {
  postId: string;
  title: string;
  body: string;
}

const UpdatePost = () => {
  const route = useRoute(); 
  const { postId, title: initialTitle, body: initialBody } = route.params as RouteParams; 

  const [title, setTitle] = useState(initialTitle);
  const [body, setBody] = useState(initialBody);
  const db = getDatabase();

  async function handleUpdate() {
    if (postId && title !== '' && body !== '') {
      const postRef = ref(db, 'posts/' + postId);
      const updatedPost = { title, body };

      await update(postRef, updatedPost);
      console.log('Post atualizado com sucesso!');
    } else {
      console.log('Erro ao atualizar');
    }
  }

  return (
    <View>
      <Text>Atualizar Post</Text>
      <Label>Título:</Label>
      <Input value={title} onChangeText={setTitle} />
      <Label>Conteúdo:</Label>
      <Input value={body} onChangeText={setBody} />
      <Button onPress={handleUpdate}>
        <Text>Atualizar</Text>
      </Button>
    </View>
  );
};

export default UpdatePost;
