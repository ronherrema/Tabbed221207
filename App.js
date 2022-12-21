import * as React from "react"
import { StyleSheet } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeScreen from "./Home"
import Albums from "./Albums"
import SettingsScreen from "./Settings"
import { Ionicons } from "@expo/vector-icons"

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName
            if (route.name === "Tracks") {
              iconName = "musical-notes"
            } else if (route.name === "Settings") {
              iconName = "settings"
            } else if (route.name === "Albums") {
              iconName = "folder-outline"
            }
            return <Ionicons name={iconName} size={size} color={color} />
          },
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "#444",
          tabBarStyle: {
            backgroundColor: "#7777ff",
          },
          // headerShown: false,
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontSize: 24,
            marginBottom: 10,
          },
          headerStyle: { backgroundColor: "#7777ff" },
          headerTitle: "Music Player",
        })}
      >
        <Tab.Screen name="Tracks" component={HomeScreen} />
        <Tab.Screen name="Albums" component={Albums} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
