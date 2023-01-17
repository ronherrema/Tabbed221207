import "react-native-gesture-handler"
import * as React from "react"
import { Button, StyleSheet, View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

const Stack = createStackNavigator()

function Screen1({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "red",
        justifyContent: "space-evenly",
      }}
    >
      <Button
        title="Thing 2"
        onPress={() => navigation.navigate("Thing 2")}
      ></Button>
      <Button
        title="Thing 3"
        onPress={() => navigation.navigate("Thing 3")}
      ></Button>
    </View>
  )
}
function Screen2() {
  return <View style={{ flex: 1, backgroundColor: "blue" }}></View>
}
function Screen3() {
  return <View style={{ flex: 1, backgroundColor: "green" }}></View>
}

export default function StackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Thing 1" component={Screen1}></Stack.Screen>
      <Stack.Screen name="Thing 2" component={Screen2}></Stack.Screen>
      <Stack.Screen name="Thing 3" component={Screen3}></Stack.Screen>
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
})
