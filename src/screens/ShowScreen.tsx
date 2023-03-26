import React, {useContext} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Context} from '../context/BlogContext';

const ShowScreen = ({route}: {route: any}) => {
  const {id} = route.params;
  const {state}: any = useContext(Context);
  const blogPost = state.find((blogPost: any) => blogPost.id === id);

  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          gap: 10,
        }}>
        <View>
          <Text style={styles.title}>{blogPost.title}</Text>
          <Text style={styles.footer}>{blogPost.date}</Text>
        </View>
        <Text style={styles.text}>{blogPost.content}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    padding: 15,
    flex: 1,
  },
  text: {
    fontSize: 16,
    fontWeight: '800',
    color: '#c8c5ca',
  },
  title: {
    color: 'white',
    fontSize: 25,
    fontWeight: '900',
  },
  footer: {
    color: '#5b5a5c',
    fontSize: 14,
    fontWeight: '800',
  },
});

export default ShowScreen;
