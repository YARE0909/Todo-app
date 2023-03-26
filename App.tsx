import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/IndexScreen';
import {Provider} from './src/context/BlogContext';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import Feather from 'react-native-vector-icons/Feather';
import {TouchableOpacity} from 'react-native';
import EditScreen from './src/screens/EditScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            color: '#000',
          },
          headerTitleAlign: 'center',
          headerShadowVisible: false,
        }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={({navigation}) => ({
            title: 'Blogs',
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('Create')}
                hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}>
                <Feather
                  name="plus"
                  style={{
                    fontSize: 20,
                    color: 'black',
                  }}
                />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Show"
          component={ShowScreen}
          options={({route, navigation}) => ({
            title: 'Blog',
            headerRight: () => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Edit', {id: route.params});
                }}
                hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}>
                <Feather
                  name="edit"
                  style={{
                    fontSize: 20,
                    color: 'black',
                  }}
                />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Create"
          component={CreateScreen}
          options={{
            title: 'Blogs',
          }}
        />
        <Stack.Screen
          name="Edit"
          component={EditScreen}
          options={{
            title: 'Edit Blog',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
