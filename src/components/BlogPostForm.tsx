import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const BlogPostForm = ({onSubmit, initialValues}: any) => {
  const [title, setTitle]: any = useState(initialValues.title);
  const [content, setContent]: any = useState(initialValues.content);
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Title</Text>
        <TextInput
          onChangeText={text => {
            setTitle(text);
          }}
          value={title}
          placeholder="Whatchu writin bout?"
          placeholderTextColor="#a7a4a8"
          style={styles.textInput}
        />
      </View>
      <View>
        <Text style={styles.text}>Content</Text>
        <TextInput
          onChangeText={text => setContent(text)}
          value={content}
          placeholder="Write away......"
          placeholderTextColor="#a7a4a8"
          style={styles.textInput}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          onSubmit(title, content);
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

BlogPostForm.defaultProps = {
  initialValues: {
    title: '',
    content: '',
  },
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

export default BlogPostForm;
