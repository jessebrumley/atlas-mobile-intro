import { Asset } from "expo-asset";
import * as FileSystem from "expo-file-system";
import * as SQLite from "expo-sqlite";
import React, { Suspense, useEffect, useState } from "react";
import { Text, View } from "react-native";

async function loadDatabase() {
  const dbName = "activities.db";
  const dbPath = `${FileSystem.documentDirectory}SQLite/${dbName}`;
  const dbFileInfo = await FileSystem.getInfoAsync(dbPath);

  if (!dbFileInfo.exists) {
    const dbAsset = require("@/assets/" + dbName);
    const dbUri = Asset.fromModule(dbAsset).uri;
    await FileSystem.makeDirectoryAsync(
      `${FileSystem.documentDirectory}SQLite`,
      { intermediates: true }
    );
    await FileSystem.downloadAsync(dbUri, dbPath);
  }
}

function useDB() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    loadDatabase().then(() => setLoaded(true));
  }, []);

  return { loaded };
}

export function DatabaseProvider({ children }: { children: React.ReactNode }) {
  const { loaded } = useDB();

  if (!loaded) {
    return null;
  }

  return (
    <Suspense
      fallback={
        <View>
          <Text>Suspended</Text>
        </View>
      }
    >
      <SQLite.SQLiteProvider useSuspense databaseName="activities.db">
        {children}
      </SQLite.SQLiteProvider>
    </Suspense>
  );
}
