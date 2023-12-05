import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="course" options={{ headerShown: false }} />
      <Stack.Screen name="paper" options={{ headerShown: false }} />
    </Stack>
  );
}