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
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: bcg,
      }}
    >
      <View style={{ height: 50 }}></View>
      <FlatList
        data={albums}
        renderItem={({ item }) => (
          <Text
            style={{
              fontSize: 18,
              color: bcg === "#fff" ? "#ff7777" : "#fff",
              paddingLeft: 10,
              paddingTop: 15,
              fontWeight: "bold",
            }}
          >
            {item}
          </Text>
        )}
        style={{
          width: "80%",
          height: "60%",
          borderWidth: 1,
          borderRadius: 5,
          borderColor: "#777",
        }}
      ></FlatList>
      <View style={{ height: 50 }}>
        <Text style={{ fontSize: 24 }}>{value}</Text>
      </View>
    </View>
  )
}
