import { Activity as ActivityType } from "@/hooks/useActivities";
import { StyleSheet, Text, View } from "react-native";

export type ActivityProps = {
  activity: ActivityType;
};

export function Activity(props: ActivityProps) {
  return (
    <View style={styles.container}>
      <Text>
        {`${new Date(props.activity.date).toLocaleDateString()}, ${new Date(
          props.activity.date
        ).toLocaleTimeString()}`}
      </Text>
      <Text style={styles.stepsText}>Steps: {props.activity.steps}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    overflow: "hidden",
    backgroundColor: "white",
    padding: 10,
  },
  stepsText: {
    fontSize: 24,
  },
});
