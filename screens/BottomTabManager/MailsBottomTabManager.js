import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import SendMails from "../screens/SendMails";
import SentMails from "../screens/SentMails";

const BottomTab = createBottomTabNavigator();

let MailsBottomTabManager = ({ navigation }) => {
    return (
        <BottomTab.Navigator initialRouteName="Mail" tabBarOptions={{activeTintColor: 'tomato', inactiveTintColor: 'gray'}} >
            <BottomTab.Screen name="Mail" component={SendMails} options={{
                tabBarIcon : ({ color, size, focused }) => (
                    <MaterialCommunityIcons name="email" size={size} color={color} />
                  ),
                tabBarLabel: "Send Mail",
            }} />
            <BottomTab.Screen name="Sent" component={SentMails} options={{
                tabBarIcon : ({ color, size, focused }) => (
                    <MaterialCommunityIcons name="send" size={size} color={color} />
                  ),
                tabBarLabel: "Sent",
            }} />
        </BottomTab.Navigator>
    )
}

export default MailsBottomTabManager;