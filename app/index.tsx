import { useActivities } from "@/hooks/useActivities";
import { Link, router } from "expo-router";
import {Alert, Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const {activities} = useActivities();
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Homepage
      </Text>
      <Text style={styles.heading}>{JSON.stringify(activities)}</Text>
      <Link style={styles.button} href={"/add-activity-screen"} replace>
        <Text style={styles.buttonText}>Add Activity</Text>
      </Link>
    </View>
  );
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
    backgroundColor: "teal",
    padding: 16,
    width: "100%",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
