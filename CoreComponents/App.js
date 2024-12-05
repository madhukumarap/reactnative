import { useState } from 'react';
import { StyleSheet, Text, View, Image,ScrollView, Button, Pressable } from 'react-native';
const  screen = require("./Screen.png") 
import { Modal } from 'react-native';
export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <View style={{
      backgroundColor:"red",
      flex:1
    }}>
      <ScrollView>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title="Submit" color="midnightblue" onPress={ () => setIsModalVisible(true) } />
      <Pressable onPress={ () => console.log("image pressed") }>
      <Image source={screen} style={{width:300, height:300}} />
     
      </Pressable>
      <Pressable >
      <Text>Hello</Text>
      </Pressable>


</ScrollView>
<Modal visible={isModalVisible} onRequestClose={()=>setIsModalVisible(false)} animationType='slide'>
    <View style={{flex:1, backgroundColor:"lightblue", padding:60}}>
    <Text>
      Modal
    </Text>
    <Button color="red" title='Modal' onPress={()=>setIsModalVisible(false)}/>
    </View>
</Modal>
    </View>
  );
}


