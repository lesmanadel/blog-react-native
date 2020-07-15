import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen';
import EditScreen from './src/screens/EditScreen';
import CreateScreen from './src/screens/CreateScreen';
import ShowScreen from './src/screens/ShowScreen';
import { Provider as BlogProvider } from './src/context/BlogContext';
import { AppRegistry } from 'react-native';
AppRegistry.registerComponent('blog', ()  => App);

const navigator = createStackNavigator({
  Create: CreateScreen,
  Edit: EditScreen,
  Index: IndexScreen,
  Show: ShowScreen
}, {
  initialRouteName: 'Index',
  defaultNavigationOptions: {
    title: 'Blogs'
  }
});

const App = createAppContainer(navigator);
export default () => {
  return ( <BlogProvider>
    <App />
  </BlogProvider>
  )
}
