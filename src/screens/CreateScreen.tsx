import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Context} from '../context/BlogContext';

const CreateScreen = ({navigation}: any) => {
  const [title, setTitle]: any = useState('');
  const [content, setContent]: any = useState('');
  const {addBlogPost}: any = useContext(Context);
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Title</Text>
        <TextInput
          onChangeText={text => {
            setTitle(text);
          }}
          placeholder="Whatchu writin bout?"
          placeholderTextColor="#a7a4a8"
          style={styles.textInput}
        />
      </View>
      <View>
        <Text style={styles.text}>Content</Text>
        <TextInput
          onChangeText={text => setContent(text)}
          placeholder="Write away......"
          placeholderTextColor="#a7a4a8"
          style={styles.textInput}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          addBlogPost(title, content);
          navigation.goBack();
        }}>
        <Text
          style={{
            color: 'white',
            fontWeight: '800',
            fontSize: 20,
            alignSelf: 'center',
          }}>
          Post
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    padding: 15,
    gap: 10,
  },
  text: {
    color: '#747175',
    fontSize: 20,
    fontWeight: '900',
  },
  textInput: {
    borderRadius: 5,
    borderColor: '#9b12e6',
    borderWidth: 1,
    color: 'black',
    fontSize: 17,
    fontWeight: '800',
    padding: 5,
  },
  button: {
    color: 'black',
    backgroundColor: '#9b12e6',
    padding: 5,
    borderRadius: 5,
  },
});

export default CreateScreen;
