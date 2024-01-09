import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={({ route }) => ({
          headerShown: true,
          headerStyle: {
            backgroundColor: "black",
          },
          headerTintColor: "white",
          title: "About Us",
          tabBarVisible: false,
        })}
      />
    </Stack>
  );
}
