import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import BlogPostForm from '../components/BlogPostForm';
import {Context} from '../context/BlogContext';

const CreateScreen = ({navigation}: any) => {
  const {addBlogPost}: any = useContext(Context);
  return (
    <BlogPostForm
      onSubmit={(title: any, content: any) => {
        addBlogPost(title, content, () => {
          navigation.navigate('Home');
        });
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default CreateScreen;
