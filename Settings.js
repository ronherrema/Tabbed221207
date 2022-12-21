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
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: bgc,
      }}
    >
      <Text style={{ fontSize: 42, color: "#7777ff" }}>Settings</Text>
      <Button title="press" onPress={() => setValue(value + 1)}></Button>
      <Button title="green" onPress={() => setBgc("#00ff00")}></Button>
      <Button title="orange" onPress={() => setBgc("#ff7777")}></Button>
    </View>
  )
}
