import { Link, router } from "expo-router";
import {Alert, Pressable, StyleSheet, Text, View } from "react-native";

export default function AddActivityScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Add Activity Screen
      </Text>
       <Link style={styles.button} href={"/"}>
              <Text style={styles.buttonText}>Go back</Text>
        </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
      justifyContent: "center",
      alignItems: "center",
  },
  heading: {
    fontSize: 24,
  },
  button: {
    backgroundColor: "red",
    padding: 16,
    width: "100%",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});