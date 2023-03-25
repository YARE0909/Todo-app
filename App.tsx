import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/IndexScreen';
import {Provider} from './src/context/BlogContext';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import Feather from 'react-native-vector-icons/Feather';
import {TouchableOpacity} from 'react-native';

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
            title: 'Blog',
            headerTitle: 'Blogs',
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Create')}>
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
          options={{title: 'Blogs'}}
        />
        <Stack.Screen
          name="Create"
          component={CreateScreen}
          options={{
            title: 'Blogs',
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
