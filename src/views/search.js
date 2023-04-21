
import React from "react"
import {View, Text, Button} from "react-native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailView from "./detail";

const HomeStack = createNativeStackNavigator();


function SearchView({navigation}) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Ara</Text>
        <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detail')}
      />
      </View>
    );
  }


  function SearchStack() {
    return (
        <HomeStack.Navigator>
          <HomeStack.Screen name="Arama Yap" component={SearchView} />
          <HomeStack.Screen name="Detail" component={DetailView} />
        </HomeStack.Navigator>
      );
  }

  export default SearchStack