import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { Feather } from '@expo/vector-icons';
import MailsBottomTabManager from "../BottomTabManager/MailsBottomTabManager";

const Stack = createStackNavigator();
const setCustomDrawerHeight = 80;

let MailsManager = ({ navigation }) => {
    // console.log(navigation)
  return (
    <Stack.Navigator>
      <Stack.Screen name="Mails" component={MailsBottomTabManager} options={{
        headerStyle: { height: setCustomDrawerHeight },
        headerTitle: () =>
          <View style={{ flexDirection: 'row', alignItems: "center" }}>
            <Feather name="menu" size={22} color="#000" onPress={() => navigation.openDrawer()} />
            <Text style={{ marginLeft: 15, fontSize: 17 }} >Mails</Text>
          </View>
      }}/>
    </Stack.Navigator>
  );
}

export default MailsManager;
