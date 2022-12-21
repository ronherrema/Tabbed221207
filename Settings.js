import * as React from "react"
import { Text, View, StyleSheet, Button } from "react-native"
import { useReState } from "@raulpesilva/re-state"

export default function SettingsScreen() {
  const [value, setValue] = useReState("value", 0)
  const [bgc, setBgc] = useReState("bgc", "#7777ff")
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: bgc,
      }}
    >
      <Text style={{ fontSize: 42, color: "#7777ff" }}>Settings</Text>
      <View style={{ height: "40%", justifyContent: "space-evenly" }}>
        <Button title="Add 1" onPress={() => setValue(value + 1)}></Button>
        <Text style={{ fontSize: 24, textAlign: "center" }}>{value}</Text>
        <Button title="Gray" onPress={() => setBgc("#aaaaaa")}></Button>
        <Button title="Orange" onPress={() => setBgc("#ff7777")}></Button>
        <Button title="White" onPress={() => setBgc("#fff")}></Button>
      </View>
    </View>
  )
}
