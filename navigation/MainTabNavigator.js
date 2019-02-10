import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import { LinearGradient } from 'expo';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ResourceScreen from '../screens/ResourceScreen';

export const HomeFeedStack = createStackNavigator({
  Feed: {
    screen: HomeScreen,
  },
  Details: {
    screen: ResourceScreen,
  },
});

HomeFeedStack.navigationOptions = {
  header: () => (
    <View style={styles.shadow}>
    <LinearGradient
              colors={['#FB9DA0', '#FACDC3']}
              style={[styles.header, styles.shadow]}
              end={[1, 0.8]}>
              <Text
                style={{
                  backgroundColor: 'transparent',
                  fontSize:18,
                  color: '#fff',
                  fontWeight: 'bold',
                }}>
                Qloak
              </Text>
    </LinearGradient>
    </View>
    )
}

const HomeStack = createStackNavigator({
  Home: HomeFeedStack,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

const ResourceStack = createStackNavigator({
  Resource: ResourceScreen,
});

ResourceStack.navigationOptions = {
  tabBarLabel: 'Resource',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};


const styles = StyleSheet.create({
  shadow: {
    shadowOffset:{  width: 0,  height: 3,  },
    shadowColor: 'black',
    shadowOpacity: 0.1, 
    shadowRadius: 1.5,
  },
  header: {
    alignItems: 'center', 
    borderRadius: 0, 
    width: '100%', 
    paddingTop: 60, 
    paddingBottom: 16, 
  },
    headerContainer: {
    alignItems: 'center',
    zIndex: 10,  
  },
});

export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
  ResourceStack,
});
