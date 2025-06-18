import { useSQLiteContext } from "expo-sqlite";
import { useEffect, useState } from "react";

type Activity = {
    id: number;
    steps: number;
    date: number;
};

export function useActivities() {
  const [activities, setActivities] = useState<Activity[]>([]);

  const db = useSQLiteContext();

  function getActivities() {
    return db.getAllAsync<Activity>(`SELECT * FROM activities`);
  }

  useEffect(() => {
    getActivities().then(setActivities);
  }, []);

  return { getActivities, activities };
}
