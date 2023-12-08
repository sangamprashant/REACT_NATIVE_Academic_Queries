import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="pdfFile" options={({ route }) => ({
          headerShown: true,
          headerStyle: {
            backgroundColor: "black",
          },
          headerTintColor: "white",
          title: route.params.item.subject || "Pdf",
          tabBarVisible: false,
        })}/>
    </Stack>
  );
}