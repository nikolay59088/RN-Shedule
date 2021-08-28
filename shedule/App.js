import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Welcome from './Pages/Welcome/Welcome'
import Shedule from './Pages/Main/Shedule/Shedule'
import AddShedule from './Pages/Main/AddShedule/AddShedule'
import Profile from './Pages/Main/Profile/Profile'
import Settings from './Pages/Main/Settings/Settings'


const Stack = createStackNavigator()
const App = () => {


  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false, }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Shedule" component={Shedule} />
        <Stack.Screen name="AddShedule" component={AddShedule} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>)
}

export default App
