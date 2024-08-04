import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { StackNavigator } from './src/nav/StackNavigator';
import { StyleSheet, View } from 'react-native';

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  );
}

export default App;

