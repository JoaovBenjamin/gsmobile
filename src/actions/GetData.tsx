import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getDatabase, ref, onValue } from 'firebase/database';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '@/services/firebaseConfig';
import { StackTypes } from '@/routes/stack.routes';

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
      const loadedPosts = data ? Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      })) : [];
      setPosts(loadedPosts);
    });

    return () => unsubscribe();
  }, []);

  const goToUpdate = (postId: string) => {
    navigation.navigate("Update", { postId });
  };
  

  return (
    <View>
      <Text>Lista de Posts</Text>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 20 }}>
            <Text>Título: {item.title}</Text>
            <Text>Conteúdo: {item.body}</Text>
            <Button title="Editar" onPress={() => goToUpdate(item.id)} />
          </View>
        )}
      />
    </View>
  );
};

export default PostList;
