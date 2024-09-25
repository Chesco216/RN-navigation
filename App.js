import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './Screens/Home';
import { Sec1 } from './Screens/Sec1';
import { Sec2 } from './Screens/Sec2';

export default function App() {

  const Stack = createNativeStackNavigator()

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={Home}/>
          <Stack.Screen name='Profile' component={Sec1}/>
          <Stack.Screen name='Section2' component={Sec2}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

