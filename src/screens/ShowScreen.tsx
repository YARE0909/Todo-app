import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Context} from '../context/BlogContext';

const ShowScreen = ({route}: {route: any}) => {
  const {id} = route.params;
  const {state}: any = useContext(Context);

  const blogPost = state.find((blogPost: any) => blogPost.id === id);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{blogPost.title}</Text>
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
  },
  text: {
    color: 'black',
  },
});

export default ShowScreen;
