import React from 'react'
import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer,
  createBottomTabNavigator,
} from 'react-navigation';

import tabBarIcon from '../utils/tabBarIcon';
import NewPostScreen from '../screens/NewPostScreen';
import SelectPhotoScreen from '../screens/SelectPhotoScreen';
import {Ionicons} from '@expo/vector-icons'
import LoginScreen from "../screens/LoginScreen";
import MainScreen from "../screens/MainScreen";
import FeedScreen from "../screens/FeedScreen"


const HomeStack = createBottomTabNavigator({
    DashboardScreen: MainScreen,
  
    Photo: {
      screen: SelectPhotoScreen,
      navigationOptions: {
        tabBarIcon: tabBarIcon('add-circle'),
        tabBarLabel: 'Submit an issue',
        title: "select a photo"
      },
    },
    Feed: {
      screen: FeedScreen,
      navigationOptions: {
        tabBarLabel: 'Open Issues',
      },
    },
  }, {
    defaultNavigationOptions: ({
      navigation
    }) => ({
      tabBarIcon: ({
        focused,
        horizontal,
        tintColor
      }) => {
        const {
          routeName
        } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'DashboardScreen') {
          iconName = `ios-home`;
        } else if (routeName === 'Photo') {
          iconName = `ios-build`;
        } else if (routeName === 'Feed') {
          iconName = `ios-clipboard`;
        }
        return <IconComponent name = {
          iconName
        }
        size = {
          25
        }
        color = {
          tintColor
        }
        />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#258CD5',
      inactiveTintColor: 'gray',
    },
  });
  
  const AppSwitchNavigator = createSwitchNavigator({
    LogInScreen: LoginScreen,
    Home: HomeStack,
  })
  
  AppSwitchNavigator.navigationOptions = ({navigation}) => {
    const header = null;
    return {
    // //   title: "Moj Grad",
    //   headerStyle: {
    //     backgroundColor: '#258CD5',
    //   },
    //   headerTintColor: '#fff',
    //   headerTitleStyle: {
    //     fontWeight: 'bold',
    //     fontFamily: 'pacifico',
    //   },
    // };
        header
    }};
  
  const AppNavigator = createAppContainer(createStackNavigator({
    SignIn: AppSwitchNavigator,
    NewPost: NewPostScreen,
  }))

  export default AppNavigator