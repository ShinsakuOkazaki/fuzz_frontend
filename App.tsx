/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./screen/HomeScreen";
import UserCreateScreen from "./screen/UserCreateScreen";
import {store, persistor} from './store/store'
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";


const Stack = createNativeStackNavigator();

const linking = {
  prefixes: ['fuzz://'], 
  config: {
    screens: {
      Home: 'home', 
      UserCreate: 'user'
    }, 
  }, 
};


const App = () => {
  
  
  return (
    <Provider store = {store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer linking={linking}>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="UserCreate" component={UserCreateScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>  
  )
}
 
export default App;