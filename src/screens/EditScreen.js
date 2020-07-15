import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Context as BlogContext} from '../context/BlogContext';

const EditScreen = ({ navigation }) => {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { addBlogPost } = useContext(BlogContext);

  return (
    <View>
      <Text>Edit Screen - {navigation.getParam('id')}</Text>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)}/>
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput style={styles.input} value={content} onChangeText={(text) => setContent(text)}/>
      <Button title="Add Blog Post"
        onPress={() => addBlogPost(title, content, () => {
          navigation.navigate('Index')
        })}/>
    </View>
  );
};

const styles = StyleSheet.create({
  input:{
    fontSize: 20,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    padding: 5,
    margin: 5
  },
  label:{
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5
  }
});

export default EditScreen;
