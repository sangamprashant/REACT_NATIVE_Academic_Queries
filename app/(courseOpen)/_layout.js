import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="CourseScreen"
        options={({ route }) => ({
          headerShown: true,
          headerStyle: {
            backgroundColor: "black",
          },
          headerTintColor: "white",
          title: route.params.courseName || "Course",
          tabBarVisible: false,
        })}
      />
    </Stack>
  );
}
