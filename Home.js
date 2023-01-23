import * as React from "react"
import { Text, View, StyleSheet, FlatList } from "react-native"
import { useReState } from "@raulpesilva/re-state"

const data = [
  "Elton John: Yellowbrick Road",
  "Joni Mitchell: Blue",
  "Jackson Browne: Running on Empty",
  "Frank Sinatra: Mack the Knife",
]

export default function HomeScreen() {
  const [total] = useReState("total", 0)
  const [bcg] = useReState("bgc", "#fff")

  return (
    <View style={[styles.container, { backgroundColor: bcg }]}>
      <Text style={{ fontSize: 36, margin: 20 }}>Total Spent</Text>
      <Text style={{ fontSize: 36 }}>${total}.00</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    width: "80%",
    height: "60%",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#777",
  },
  text: {
    fontSize: 18,
    paddingLeft: 10,
    paddingTop: 15,
    fontWeight: "bold",
  },
})
