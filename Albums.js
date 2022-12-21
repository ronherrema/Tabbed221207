import * as React from "react"
import { Text, View, StyleSheet, ScrollView, Image } from "react-native"
const joni = (
  <Image
    source={require("./assets/blue.png")}
    resizeMode="contain"
    style={{ width: "100%", margin: 5, height: 180 }}
  ></Image>
)

export default function Albums() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={{ flexDirection: "row", height: "95%" }}>
        <ScrollView
          style={{ width: "45%", height: "90%", borderWidth: 0, margin: 5 }}
        >
          {joni}
          {joni}
          {joni}
          {joni}
        </ScrollView>
        <ScrollView
          style={{ width: "45%", height: "90%", borderWidth: 0, margin: 5 }}
        >
          {joni}
          {joni}
          {joni}
          {joni}
        </ScrollView>
      </View>
    </View>
  )
}
