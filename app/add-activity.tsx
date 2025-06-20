import {
  View,
  Pressable,
  Button,
  StyleSheet,
  Text,
  TextInput,
} from "react-native";
import { router } from "expo-router";
import { useState } from "react";
import { useActivitiesContext } from "@/components/ActivitiesProvider";

export default function AddActivity() {
  const [steps, setSteps] = useState<number>(0);
  const { insertActivity } = useActivitiesContext();
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Log an activity</Text>
      <TextInput
        style={styles.input}
        placeholder="enter steps"
        keyboardType="number-pad"
        onChangeText={(value) => setSteps(parseInt(value))}
      />
      <Pressable
        onPress={() => {
          insertActivity(steps, new Date());
          router.replace("/");
        }}
      >
        <Text style={styles.addActivityButton}>Enter steps</Text>
      </Pressable>
      <Pressable>
        <Text
          style={styles.backButton}
          onPress={() => {
            router.replace("/");
          }}
        >
          Go back
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    marginTop: 50,
    backgroundColor: "white",
    paddingTop: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    width: "100%",
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 2,
    marginTop: 15,
    marginBottom: 15,
  },
  backButton: {
    backgroundColor: "#D00414",
    padding: 10,
    width: "100%",
    textAlign: "center",
    fontSize: 18,
    color: "#FFFFFF",
  },
  addActivityButton: {
    backgroundColor: "#1ED2AF",
    padding: 10,
    width: "100%",
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    fontSize: 18,
    color: "#FFFFFF",
  },
});
