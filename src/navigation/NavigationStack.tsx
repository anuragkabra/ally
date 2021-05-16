import * as React from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppConstants } from '../constants/AppConstants';
import HomeScreen from '../components/screens/HomeScreen';
import { Colors } from '../styles/Colors';

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function NavigationStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={AppConstants.Navigation.HomeScreen}
          component={HomeScreen}
          initialParams={{ title: "All OKRs" }}
          options={({ route }) => ({
            title: route.params.title,
            headerStyle: {
              backgroundColor: Colors.theme,
            },
            headerTintColor: Colors.white,
          })
          } />
        <Stack.Screen name={AppConstants.Navigation.DetailScreen} component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default NavigationStack;