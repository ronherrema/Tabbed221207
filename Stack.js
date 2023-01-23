import "react-native-gesture-handler"
import * as React from "react"
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image,
  Button,
} from "react-native"
import { createStackNavigator } from "@react-navigation/stack"
import { useReState } from "@raulpesilva/re-state"

const Stack = createStackNavigator()

let globalTotal = 0

function Screen1({ navigation }) {
  const [bcg] = useReState("bgc", "#fff")
  const [total, setTotal] = useReState("total", 0)
  return (
    <View style={[styles.stack, { backgroundColor: bcg }]}>
      <TouchableOpacity
        onPress={() => navigation.navigate("National League")}
        style={styles.button}
      >
        <Text style={{ fontSize: 28, color: "#fff", textAlign: "center" }}>
          National League
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("American League")}
        style={styles.button}
      >
        <Text style={{ fontSize: 28, color: "#fff", textAlign: "center" }}>
          American League
        </Text>
      </TouchableOpacity>
      <Button
        onPress={() => {
          globalTotal = 0
          setTotal(globalTotal)
        }}
        title="Clear"
      ></Button>
    </View>
  )
}
function Screen2() {
  const [total, setTotal] = useReState("total", 0)
  return (
    <View style={[styles.container, { backgroundColor: "#c1ffcc" }]}>
      <TouchableOpacity onPress={() => setTotal((globalTotal += 100))}>
        <Image
          source={require("./assets/gibson.jpeg")}
          style={{ width: 150, height: 225 }}
          resizeMode="contain"
        ></Image>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setTotal((globalTotal += 100))}>
        <Image
          source={require("./assets/flood.jpeg")}
          style={{ width: 150, height: 225 }}
          resizeMode="contain"
        ></Image>
      </TouchableOpacity>
    </View>
  )
}
function Screen3() {
  const [total, setTotal] = useReState("total", 0)
  return (
    <View style={[styles.container, { backgroundColor: "#c1ffcc" }]}>
      <TouchableOpacity onPress={() => setTotal((globalTotal += 100))}>
        <Image
          source={require("./assets/horton.jpeg")}
          style={{ width: 150, height: 225 }}
          resizeMode="contain"
        ></Image>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setTotal((globalTotal += 100))}>
        <Image
          source={require("./assets/lolich.jpeg")}
          style={{ width: 150, height: 225 }}
          resizeMode="contain"
        ></Image>
      </TouchableOpacity>
    </View>
  )
}

export default function StackScreen() {
  const [bcg] = useReState("bgc", "#fff")
  return (
    <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: bcg } }}>
      <Stack.Screen name="Purchase Cards" component={Screen1}></Stack.Screen>
      <Stack.Screen name="National League" component={Screen2}></Stack.Screen>
      <Stack.Screen name="American League" component={Screen3}></Stack.Screen>
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
    // borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#c1ccff",
  },
  stack: {
    flex: 1,
    // backgroundColor: "white",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
})
