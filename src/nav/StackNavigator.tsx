import { createStackNavigator } from '@react-navigation/stack'
import { Login } from '../Screens/Login';
import { Inicio } from '../Screens/Inicio';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Login' component={Login}/>
      <Stack.Screen name='Inicio' component={Inicio}/>
    </Stack.Navigator>
  )
}
