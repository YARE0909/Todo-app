import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Context} from '../context/BlogContext';

const ShowScreen = ({route}: {route: any}) => {
  const {id} = route.params;
  const {state}: any = useContext(Context);
  const blogPost = state.find((blogPost: any) => blogPost.id === id);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{blogPost.title}</Text>
        <Text style={styles.footer}>Author</Text>
      </View>
      <Text style={styles.text}>{blogPost.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    padding: 15,
    gap: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: '800',
    color: '#6a6f73',
  },
  title: {
    color: 'black',
    fontSize: 25,
    fontWeight: '900',
  },
  footer: {
    color: '#cbc9cf',
    fontSize: 14,
    fontWeight: '900',
  },
});

export default ShowScreen;
