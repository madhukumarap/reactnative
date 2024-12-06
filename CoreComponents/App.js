import { useState } from 'react';
import { StyleSheet, Text, View, Image,ScrollView, Button, Pressable,ActivityIndicator } from 'react-native';
const  screen = require("./Screen.png") 
import { Modal,Alert } from 'react-native';
import { StatusBar } from 'react-native-web';
export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <View style={{
      backgroundColor:"red",
      flex:1
    }}>
      {/* <ScrollView>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title="Submit" color="midnightblue" onPress={ () => setIsModalVisible(true) } />
      <Pressable onPress={ () => console.log("image pressed") }>
      <Image source={screen} style={{width:300, height:300}} />
     
      </Pressable>
      <Pressable >
      <Text>Hello</Text>
      </Pressable>


</ScrollView> */}
{/* <Modal visible={isModalVisible} onRequestClose={()=>setIsModalVisible(false)} animationType='slide'>
    <View style={{flex:1, backgroundColor:"lightblue", padding:60}}>
    <Text>
      Modal
    </Text>
    <Button color="red" title='Modal' onPress={()=>setIsModalVisible(false)}/>
    </View>
</Modal> */}
{/* <StatusBar backgroundColor="blue" barStyle="dark-content"  hidden/> */}
{/* <ActivityIndicator size="small"/>  //by default it is small
<ActivityIndicator size="large" />
<ActivityIndicator size="large" color="midnightblue" />  //it use default color
<ActivityIndicator size="large" color="midnightblue" animating={false} />  //it use default animation */}

<Button title='Alert' onPress={ ()=> Alert.alert("invalid data")} />
<Button title='Alert 2' onPress={ ()=> Alert.alert("invalid data", "DOB IS INCORRECT")} />
<Button title='Alert 3' onPress={ ()=> Alert.alert("invalid data", "DOB IS INCORRECT",
  [
    {
      text:"CANCEL",
      onPress: () => console.log("Button Cancel")
    },
    {
      text:"OK",
      onPress: () => console.log("Button OK")
    }
  ]
)} />

    </View>
  );
}


