import * as React from "react"
import { Text, View, StyleSheet, FlatList } from "react-native"

const data = [
  "Elton John: Yellowbrick Road",
  "Joni Mitchell: Blue",
  "Jackson Browne: Running on Empty",
  "Frank Sinatra: Mack the Knife",
]
export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={{ height: 50 }}></View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Text
            style={{
              fontSize: 18,
              color: "#f55",
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
      <View style={{ height: 50 }}></View>
    </View>
  )
}
