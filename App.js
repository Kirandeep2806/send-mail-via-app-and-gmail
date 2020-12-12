import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from "@react-navigation/drawer";
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import Root from "./screens/StackManager/HomeManager";
import MailsManager from "./screens/StackManager/MailsManager";

const Drawer = createDrawerNavigator();
const setCustomDrawerHeight = 80;


export default function App() {

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Root" drawerStyle={ styles.setDrawerStyle } overlayColor="rgba(245, 245, 245, 0.2)" drawerContentOptions={{ activeTintColor: '#331094', labelStyle: { left: -15, textAlignVertical: 'center', }, itemStyle: styles.setItemStyle }}  >

        <Drawer.Screen name="Home" component={Root} options={{
          drawerIcon: ({ color, size, focused }) => (
            <AntDesign name="home" size={size} color={color} />
          ),

        }} />
        <Drawer.Screen name="Mails" component={MailsManager} options={{
          drawerIcon: ({ color, size, focused }) => (
            <FontAwesome5 name="mail-bulk" size={size} color={color} />
          ),
          drawerLabel: "Mails",
        }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  setDrawerStyle : {
    width: '70%',
    marginTop: setCustomDrawerHeight + 0.25,
    overflow: 'scroll',
    borderRadius: 5,
  },

  setItemStyle : {
    marginVertical: 0,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(176, 176, 176, 0.5)',
  },

});