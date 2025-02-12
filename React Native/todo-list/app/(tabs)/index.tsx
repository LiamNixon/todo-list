// Components
import { StyleSheet, View, Text, FlatList } from "react-native";
import List from "@/components/List";

export default function HomeScreen() {
  // Data
  const features = [
    { id: 1, text: "Viewing current tasks" },
    { id: 2, text: "Adding new tasks via button" },
    { id: 3, text: "Deleting existing tasks" },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>To-do app solution</Text>
      <Text style={styles.h2}>Built by Liam Nixon</Text>
      <Text>Features include:</Text>
      <FlatList
        data={features}
        renderItem={({ item }) => <Text>{`\u2022 ${item.text}`}</Text>}
        contentContainerStyle={{ paddingVertical: 8 }}
        style={{ flexGrow: 0 }}
      />
      <List />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 8,
    marginTop: 64,
    width: "100%",
    alignItems: "center",
  },
  h1: {
    fontWeight: 700,
    color: "#0369a1",
    fontSize: 24,
    lineHeight: 32,
  },
  h2: {
    fontWeight: 500,
    color: "#a3a3a3",
  },
});
