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
  const [value] = useReState("value", 0)
  const [bcg] = useReState("bgc", "#fff")
  const [albums] = useReState("albums", [])
  return (
    <View style={[styles.container, { backgroundColor: bcg }]}>
      <View style={{ height: 50 }}></View>
      <FlatList
        data={albums}
        renderItem={({ item }) => (
          <Text
            style={[
              styles.text,
              { color: bcg === "#fff" ? "#ff7777" : "#fff" },
            ]}
          >
            {item}
          </Text>
        )}
        style={styles.list}
      ></FlatList>
      <View style={{ height: 50 }}></View>
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
