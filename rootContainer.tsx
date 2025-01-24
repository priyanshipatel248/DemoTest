import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useDispatch, useSelector } from "react-redux";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Images } from './src/utils/constant';
import Search from './src/screens/dashboard/search'
import Event from './src/screens/dashboard/event';
import Favourite from './src/screens/dashboard/favourite';
import Login from './src/screens/auth/login';
import Profile from './src/screens/dashboard/profile';
import { RootState } from './src/redux/store';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();



  
  const  TabBarNavigation=() =>{
    return (
      <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          elevation: 4,
    
         

          
 
        

      
        },
      })}
    >
      <Tab.Screen
        name={"Search"}
        component={Search}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image
                source={Images.search}
                style={styles.icon}
                resizeMode="contain"
              />
            ) : (
              <Image
                source={Images.search}
                style={styles.icon}
                resizeMode="contain"
              />
            ),
        }}
      />
      <Tab.Screen
        name={"event"}
        component={Event}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image
                source={Images.calender}
                style={styles.icon}
                resizeMode="contain"
              />
            ) : (
              <Image
                source={Images.calender}
                style={styles.icon}
                resizeMode="contain"
              />
            ),
        }}
      />
      <Tab.Screen
        name={"favourite"}
        component={Favourite}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image
                source={Images.heartOutline}
                style={styles.icon}
                resizeMode="contain"
              />
            ) : (
              <Image
                source={Images.heartOutline}
                style={styles.icon}
                resizeMode="contain"
              />
            ),
        }}
      />
      <Tab.Screen
        name={"profile"}
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image
                source={Images.user}
                style={styles.icon}
                resizeMode="contain"
              />
            ) : (
              <Image
                source={Images.user}
                style={styles.icon}
                resizeMode="contain"
              />
            ),
        }}
      />
    </Tab.Navigator>
    );
  }

const RootContainer = () => {
  const isLogin = useSelector((state: RootState) => state.authReducer.isLogin);
  console.log("==isLogin",isLogin)
  return (
    <NavigationContainer>
      
    <Stack.Navigator>
    {!isLogin ?  (
       <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />

   ):(
    <Stack.Screen
        name="Dashboard"
        component={TabBarNavigation}
        options={{ headerShown: false }}
      />
   )}
      

    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootContainer

const styles =StyleSheet.create({
  icon:{
    width: 24,
height: 24,


  }
})

