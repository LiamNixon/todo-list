// Packages
import { useState } from "react";

// Components
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import ListItem from "./ListItem";

// Interface
interface ListItem {
  id: number;
  title: string;
  dateTime: string;
  completed: boolean;
}

export default function List() {
  // Component state
  const [tasks, setTasks] = useState<ListItem[]>([]);
  const [title, setTitle] = useState<string>("");

  // Helper functions
  const getNextId = () => {
    if (tasks.length > 0) {
      return (
        tasks.reduce(
          (max, current) => (current.id > max ? current.id : max),
          0
        ) + 1
      );
    } else {
      return 0;
    }
  };

  // Functions
  const toggleCompleted = (id: number): void => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const addTask = (): void => {
    if (title !== "") {
      const newTask: ListItem = {
        id: getNextId(),
        title: title,
        dateTime: new Date().toLocaleDateString("en-au"),
        completed: false,
      };

      setTasks([...tasks, newTask]);
      setTitle("");
    }
  };

  const deleteTask = (id: number): void => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const handleChange = (input: string): void => {
    setTitle(input);
  };

  return (
    <View style={styles.container}>
      <View style={styles.flexBetween}>
        <TextInput
          value={title}
          onChangeText={handleChange}
          placeholder="Enter a new task here"
          style={styles.input}
        />
        <TouchableOpacity style={styles.button} onPress={addTask}>
          <Text style={styles.whiteText}>+ Add task</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.listWrapper}>
        {tasks.length > 0 ? (
          <FlatList
            data={tasks}
            contentContainerStyle={{ paddingVertical: 8 }}
            style={{ flexGrow: 0 }}
            renderItem={({ item }) => (
              <ListItem
                id={item.id}
                title={item.title}
                dateTime={item.dateTime}
                completed={item.completed}
                toggleCompleted={toggleCompleted}
                deleteTask={deleteTask}
              />
            )}
          />
        ) : (
          <View style={styles.taskWrapper}>
            <View style={styles.taskBackground}>
              <Text style={styles.taskText}>
                No tasks outstanding (Hooray!)
              </Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 8,
    width: "100%",
    alignItems: "center",
  },
  flexBetween: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
    width: "90%",
    marginBottom: 48,
    flexGrow: 0,
  },
  input: {
    height: 40,
    width: "67%",
    backgroundColor: "#e2e8f0",
    borderWidth: 2,
    borderColor: "#cbd5e1",
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  button: {
    height: 40,
    width: "33%",
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "#0369a1",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
  },
  whiteText: {
    color: "#ffffff",
  },
  listWrapper: {
    width: "90%",
    borderRadius: 6,
    backgroundColor: "#d4d4d4",
  },
  taskWrapper: {
    width: "100%",
    padding: 8,
  },
  taskBackground: {
    backgroundColor: "#ffffff",
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  taskText: {
    color: "#a3a3a3",
  },
});
