import React from "react"
import {View, Text} from "react-native"
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchView from "./views/search";
import FavoriteView from "./views/favorite";
import HistoryView from "./views/history";
import SearchStack from "./views/search";



  
  function SettingsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Çok Seviyorum!</Text>
      </View>
    );
  }
  const Tab = createBottomTabNavigator();


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