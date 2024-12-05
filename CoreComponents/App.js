import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,ScrollView, Button } from 'react-native';
const  screen = require("./Screen.png") 
export default function App() {
  return (
    <View style={{
      backgroundColor:"red",
      flex:1
    }}>
      <ScrollView>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Hello</Text>
      <Button title="Submit" color="midnightblue" disabled onPress={() => console.log("Button was pressed")} />
      <Image source={screen} style={{width:300, height:300}} />
</ScrollView>
    </View>
  );
}


