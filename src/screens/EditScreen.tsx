import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import BlogPostForm from '../components/BlogPostForm';
import {Context} from '../context/BlogContext';

const EditScreen = ({route, navigation}: any) => {
  const {state, editBlogPost}: any = useContext(Context);
  const {id} = route.params;
  const blogPost = state.find((blogPost: any) => blogPost.id === id.id);

  return (
    <BlogPostForm
      initialValues={{title: blogPost.title, content: blogPost.content}}
      onSubmit={(title: any, content: any) => {
        editBlogPost(id.id, title, content, () => {
          navigation.pop();
        });
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
