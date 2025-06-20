import { useActivities } from "@/hooks/useActivities";
import React, { createContext, useContext } from "react";

const ActivitiesContext = createContext<ReturnType<typeof useActivities>>({
  activities: [],
  getActivities: () => [],
  insertActivity: () => [],
  deleteActivity: () => [],
  deleteActivities: () => [],
});

export const useActivitiesContext = () => useContext(ActivitiesContext);

export function ActivitiesProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const activities = useActivities();
  return (
    <ActivitiesContext.Provider value={activities}>
      {children}
    </ActivitiesContext.Provider>
  );
}
