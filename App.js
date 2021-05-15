import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import readStoryScreen from './screen/readStoryScreen';
import writeStoryScreen from './screen/writeStoryScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context'

export default class App extends React.Component {
  render(){
    return (
      <SafeAreaProvider>
      
        <AppContainer />
        </SafeAreaProvider>
      
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  WriteStoryScreen: {screen: writeStoryScreen},
  ReadStoryScreen: {screen: readStoryScreen},
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      console.log(routeName)
      if(routeName === "writeStoryScreen"){
        return(
          <Image
          source={require("./assets/write.png")}
          style={{width:40, height:40}}
        />
        )
        
      }
      else if(routeName === "readStoryScreen"){
        return(
          <Image
          source={require("./assets/read.png")}
          style={{width:40, height:40}}
        />)
        
      }
    }
  })
}
);

const AppContainer =  createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});