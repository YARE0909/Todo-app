import React, {useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from 'react-native';
import {Context} from '../context/BlogContext';
import Feather from 'react-native-vector-icons/Feather';

const Home = ({navigation}: {navigation: any}) => {
  const {state, deleteBlogPost}: any = useContext(Context);
  console.log(state);
  return (
    <View style={styles.container}>
      <FlatList
        data={state}
        keyExtractor={blogPost => blogPost.id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Show', {id: item.id})}>
              <View
                style={{
                  flexDirection: 'row',
                  padding: 10,
                  justifyContent: 'space-between',
                  paddingVertical: 15,
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 18,
                    fontWeight: '700',
                  }}>
                  {item.title}
                </Text>
                <TouchableOpacity
                  hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}
                  onPress={() => {
                    deleteBlogPost(item.id);
                  }}>
                  <Feather
                    name="trash-2"
                    style={{
                      color: 'red',
                      fontSize: 24,
                    }}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
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

export default Home;
