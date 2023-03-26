import React, {useContext} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Context} from '../context/BlogContext';

const ShowScreen = ({route}: {route: any}) => {
  const {id} = route.params;
  const {state}: any = useContext(Context);
  const blogPost = state.find((blogPost: any) => blogPost.id === id);

  return (
      <ScrollView style={styles.container}>
        <View>
          <Text style={styles.title}>{blogPost.title}</Text>
          <Text style={styles.footer}>Author</Text>
        </View>
        <Text style={styles.text}>{blogPost.content}</Text>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    padding: 15,
    gap: 20,
    flex: 1,
  },
  text: {
    fontSize: 16,
    fontWeight: '800',
    color: '#6a6f73',
  },
  title: {
    color: 'white',
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
