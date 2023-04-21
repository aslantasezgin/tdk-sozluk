
import React from "react"
import {View, Text, Button} from "react-native"
import Box from "../components/box";
import BoxCenter from "../components/box-center";



function SearchView({navigation}) {
    return (
      <BoxCenter flex={1} justifyContent="center" alignItems="center">
        <Text>Ara</Text>
        <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detail')}
      />
    <Box size={20} bg="red" mt={20}></Box>
      </BoxCenter>
    );
  }




  export default SearchView