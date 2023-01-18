import * as React from "react"
import { useState } from "react"
import { Text, View, StyleSheet, Image, TextInput } from "react-native"
import { useReState } from "@raulpesilva/re-state"

export default function Albums() {
  const [textIn, setTextIn] = useState("")
  const [bgc] = useReState("bgc", "#7777ff")
  const [albums, setAlbums] = useReState("albums", [])
  return (
    <View style={[styles.container, { backgroundColor: bgc }]}>
      <TextInput
        style={{ width: "80%", height: "10%", borderWidth: 1 }}
        onChangeText={(t) => setTextIn(t)}
        onSubmitEditing={() => setAlbums([...albums, textIn])}
      ></TextInput>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
})
