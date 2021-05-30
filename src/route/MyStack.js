import { createStackNavigator } from '@react-navigation/stack';
import  LoginScreen from './../screens/LoginScreen/LoginScreen';
import RegistrationScreen1 from './../screens/RegistrationScreen1/RegistrationScreen1';
import MainScreen from './../screens/MainScreen/MainScreen';
import RegistrationScreen from './../screens/RegistrationScreen/RegistrationScreen';
import EditUserProfileScreen from './../screens/EditUserProfileScreen/EditUserProfileScreen';
import UserProfileScreen  from './../screens/UserProfileScreen/UserProfileScreen';
import  ControlScreen from './../screens/ControlScreen/ControlScreen';
import  HomeStatusScreen  from './../screens/HomeStatusScreen/HomeStatusScreen';
import React from 'react';


const Stack = createStackNavigator();

const MyStack = () => {
    return (
    <Stack.Navigator initialRouteName='Registration'>
    <Stack.Screen name="Registration" component={MainScreen} />
      <Stack.Screen name="HomeOwner" title="Home Owner" component={RegistrationScreen} />
          <Stack.Screen name="Firefighter" title="Firefighter" component={RegistrationScreen1} options={{
headerStyle:{
backgroundColor:'#ff4500'
},
headerTintColor:'white',
headerTitleStyle:{
fontWeight:'bold'
}
}} />
         
         
            <Stack.Screen name="Login" component={LoginScreen} />
            
            <Stack.Screen name="UserProfile" component={UserProfileScreen} />
    </Stack.Navigator>
    )
    }

 /*   const EditStack = () =>{
        return( <Stack.Navigator>
        
        <Stack.Screen name="EditUserProfile" component={EditUserProfileScreen} />
        </Stack.Navigator>
        )
    }

    const HomeStack = () =>{
        return(
            <Stack.Navigator>
        
        
        <Stack.Screen name="HomeStatus" component={HomeStatusScreen} />
        </Stack.Navigator>)
    }
    const ControlStack = () =>{
        return(
            <Stack.Navigator>
        
        
        <Stack.Screen name="Control" component={ControlScreen} />
        </Stack.Navigator>
        )
    }*/
    export default {MyStack}