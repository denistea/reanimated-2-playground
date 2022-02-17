import React from 'react';
import Screen from './Screen';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SearchIcon from './assets/search.svg';

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Screen}
        options={{
          tabBarIcon: ({focused}) => (
            <SearchIcon height={25} width={25} stroke="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Root() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}
