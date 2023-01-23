import * as React from "react"
import { Text, View, StyleSheet, Button } from "react-native"
import { useReState } from "@raulpesilva/re-state"

export default function SettingsScreen() {
  const [value, setValue] = useReState("value", 0)
  const [bgc, setBgc] = useReState("bgc", "#7777ff")
  return (
    <View style={[styles.container, { backgroundColor: bgc }]}>
      <Text style={{ fontSize: 42, color: "#aaaaff" }}>Set background</Text>
      <View style={{ height: "40%", justifyContent: "space-evenly" }}>
        <Button title="Blue" onPress={() => setBgc("#c1ccff")}></Button>
        <Button title="Bubblegum" onPress={() => setBgc("#ffc1cc")}></Button>
        <Button title="White" onPress={() => setBgc("#fff")}></Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
})
