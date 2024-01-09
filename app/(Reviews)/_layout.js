import { Stack } from "expo-router";
import { AppProvider } from "../../AppContext/AppContext";

export default function Layout() {
  return (
    <AppProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={({ route }) => ({
            headerShown: true,
            headerStyle: {
              backgroundColor: "black",
            },
            headerTintColor: "white",
            title: "Reviews",
            tabBarVisible: false,
          })}
        />
      </Stack>
    </AppProvider>
  );
}
