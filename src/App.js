import React from "react"
import {View, Text} from "react-native"
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchView from "./views/search";
import FavoriteView from "./views/favorite";
import HistoryView from "./views/history";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailView from "./views/detail";


const HomeStack = createNativeStackNavigator();

  
  function SettingsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Çok Seviyorum!</Text>
      </View>
    );
  }
  const Tab = createBottomTabNavigator();


  function SearchStack() {
    return (
        <HomeStack.Navigator>
          <HomeStack.Screen name="Arama Yap" component={SearchView} />
          <HomeStack.Screen name="Detail" component={DetailView} />
        </HomeStack.Navigator>
      );
  }

const App = () => {
    return(
        
        <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Favorite" component={FavoriteView} />
        <Tab.Screen name="Search" component={SearchStack} />
        <Tab.Screen name="History" component={HistoryView} />

      </Tab.Navigator>
     
        </NavigationContainer>

    )
}

export default App