import { useActivitiesContext } from "@/components/ActivitiesProvider";
import { router } from "expo-router";
import { Button, Pressable, View, Text, StyleSheet } from "react-native";
import { FlashList } from "@shopify/flash-list";
import SwipableActivity from "@/components/SwipableActivity";

export default function Index() {
  const { activities, deleteActivities } = useActivitiesContext();
  return (
    <View style={styles.container}>
      <FlashList
        renderItem={({ item }) => <SwipableActivity activity={item} />}
        data={activities}
        estimatedItemSize={50}
      />
      <Pressable>
        <Text
          style={styles.addActivityButton}
          onPress={() => {
            router.replace("/add-activity");
          }}
        >
          Add activity
        </Text>
      </Pressable>
      <Pressable>
        <Text
          style={styles.deleteButton}
          onPress={() => {
            deleteActivities();
          }}
        >
          Delete all activities
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignContent: "center",
    marginTop: 50,
    backgroundColor: "white",
    paddingTop: 10,
  },
  text: {
    color: "white",
    marginLeft: 20,
  },
  deleteButton: {
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
