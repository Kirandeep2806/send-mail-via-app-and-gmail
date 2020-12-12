import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { Feather } from '@expo/vector-icons';
import HomeScreen from "../screens/Home";
import DetailsScreen from "../screens/Details";

const Stack = createStackNavigator();
const setCustomDrawerHeight = 80;

export default function Root({ navigation }) {
    // console.log({props})
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} options={{
                headerStyle: { height: setCustomDrawerHeight },
                headerTitle: () =>
                    <View style={{ flexDirection: 'row', alignItems: "baseline" }}>
                        <Feather name="menu" size={22} color="#000" onPress={() => navigation.toggleDrawer()} />
                        <Text style={{ marginLeft: 15, fontSize: 17 }} >Home</Text>
                    </View>
            }} />

            <Stack.Screen name="Details" component={DetailsScreen} options={{
          headerStyle: { height: setCustomDrawerHeight },
        }} />
        </Stack.Navigator>
    );
}