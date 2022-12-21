import * as React from "react"
import { useState } from "react"
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
} from "react-native"
import { useReState } from "@raulpesilva/re-state"

const joni = (
  <Image
    source={require("./assets/blue.png")}
    resizeMode="contain"
    style={{ width: "100%", margin: 5, height: 180 }}
  ></Image>
)

export default function Albums() {
  const [textIn, setTextIn] = useState("")
  const [bgc, setBgc] = useReState("bgc", "#7777ff")
  const [albums, setAlbums] = useReState("albums", [])
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: bgc,
      }}
    >
      <TextInput
        style={{ width: "80%", height: "10%", borderWidth: 1 }}
        onChangeText={(t) => setTextIn(t)}
        onSubmitEditing={() => setAlbums([...albums, textIn])}
      ></TextInput>
    </View>
  )
}
