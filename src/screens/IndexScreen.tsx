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
      {state.length === 0 ? (
        <View
          style={{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Create')}
            hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}
            style={{
              padding: 15,
              paddingHorizontal: 25,
              borderWidth: 2,
              borderColor: '#cbc9cf',
              borderRadius: 10,
              borderStyle: 'dashed',
            }}>
            <Text
              style={{
                alignSelf: 'center',
                fontWeight: '900',
                color: '#cbc9cf',
                fontSize: 20,
              }}>
              New Note +
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
        showsVerticalScrollIndicator={false}
          data={state}
          keyExtractor={blogPost => blogPost.id}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
              style={{
                padding: 5,
                borderWidth: 2,
                borderColor: '#cbc9cf',
                borderRadius: 10,
                borderStyle: 'solid',
                marginVertical: 10
              }}
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
                      color: 'white',
                      fontSize: 18,
                      fontWeight: '900',
                    }}>
                    {item.title}
                  </Text>
                  <TouchableOpacity
                    hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}
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
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    padding: 15,
  },
  text: {
    color: 'black',
  },
});

export default Home;
