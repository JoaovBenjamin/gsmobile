import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { Button } from '@/components/Button';
import { useNavigation } from '@react-navigation/native';
import { getDatabase, ref, onValue, remove } from 'firebase/database';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '@/services/firebaseConfig';
import { StackTypes } from '@/routes/stack.routes';
import { Pencil, Trash, Plus } from 'lucide-react-native'; // Importa os ícones

interface Post {
  id: string;
  title: string;
  body: string;
}

const PostList = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const navigation = useNavigation<StackTypes>();
  const firebaseApp = initializeApp(firebaseConfig);
  const db = getDatabase(firebaseApp);

  useEffect(() => {
    const postsRef = ref(db, 'posts/');
    const unsubscribe = onValue(postsRef, (snapshot) => {
      const data = snapshot.val();
      const loadedPosts = data
        ? Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
          }))
        : [];
      setPosts(loadedPosts);
    });

    return () => unsubscribe();
  }, []);

  const goToUpdate = (postId: string) => {
    navigation.navigate('Update', { postId });
  };

  const deletePost = async (postId: string) => {
    const postRef = ref(db, `posts/${postId}`);
    await remove(postRef);
    console.log('Post deletado com sucesso');
  };

  const goToCreate = () => {
    navigation.navigate('Create'); 
  };

  return (
    <View className="flex-1 p-4">
      <View className="flex-row justify-end">
        <Button onPress={goToCreate} className="p-2 bg-green-500 rounded-full">
          <Plus color="white" size={24} />
        </Button>
      </View>
      
      <Text className="text-2xl font-bold mt-4 mb-4">Lista de Posts</Text>
      
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="p-4 mb-4 bg-white rounded-lg shadow-md">
            <Text className="text-xl font-semibold mb-2">Título: {item.title}</Text>
            <Text className="text-base mb-4">Conteúdo: {item.body}</Text>
            <View className="flex-row justify-end space-x-4">
              <Button
                onPress={() => goToUpdate(item.id)}
                className="p-2 bg-blue-500 rounded-full"
              >
                <Pencil color="white" size={20} />
              </Button>
              <Button
                onPress={() => deletePost(item.id)}
                className="p-2 bg-red-500 rounded-full"
              >
                <Trash color="white" size={20} />
              </Button>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default PostList;
