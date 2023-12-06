import { Stack } from "expo-router";

export default function LayoutCourse() {
  return (
    <Stack>
      <Stack.Screen
        options={() => ({
          headerShown: false,
        })}
        name="index"
      />
      <Stack.Screen
        options={({ route }) => ({
          headerShown: true,
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor:"white",
          title: route.params.courseName || "Course",
          tabBarVisible: false,
        })}
        name="courseOpen"
      />
    </Stack>
  );
}
