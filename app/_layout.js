import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { AppProvider } from "../AppContext/AppContext";

export default function Layout() {
  return (
    <AppProvider>
      <StatusBar style="light" backgroundColor="black" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
      </Stack>
    </AppProvider>
  );
}
