import "react-native-gesture-handler"
import * as React from "react"
import {
  Button,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image,
} from "react-native"
import { createStackNavigator } from "@react-navigation/stack"

const Stack = createStackNavigator()

function Screen1({ navigation }) {
  return (
    <View style={styles.stack}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Item 1")}
        style={styles.button}
      >
        <Text style={{ fontSize: 28 }}>Item 1</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Item 2")}
        style={styles.button}
      >
        <Text style={{ fontSize: 28 }}>Item 2</Text>
      </TouchableOpacity>
    </View>
  )
}
function Screen2() {
  return (
    <View style={[styles.container, { backgroundColor: "#77777755" }]}>
      <Image source={require("./assets/blue.png")}></Image>
    </View>
  )
}
function Screen3() {
  return (
    <View style={[styles.container, { backgroundColor: "#77777755" }]}>
      <Image source={require("./assets/apple.png")}></Image>
    </View>
  )
}

export default function StackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Item List" component={Screen1}></Stack.Screen>
      <Stack.Screen name="Item 1" component={Screen2}></Stack.Screen>
      <Stack.Screen name="Item 2" component={Screen3}></Stack.Screen>
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: "40%",
    height: "15%",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "cornflowerblue",
  },
  stack: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
})
