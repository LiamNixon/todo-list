// Components
import { StyleSheet, View, Text, TouchableOpacity, Switch } from "react-native";

// Interfaces
interface ListItemProps {
  id: number;
  title: string;
  dateTime: string;
  completed: boolean;
  toggleCompleted: (id: number) => void;
  deleteTask: (id: number) => void;
}

export default function ListItem(props: ListItemProps) {
  return (
    <View style={styles.taskWrapper}>
      <View style={styles.taskBackground}>
        <View style={styles.taskLayout}>
          <View style={styles.taskControls}>
            <Switch
              trackColor={{ false: "#cfcfcf", true: "#0369a1" }}
              ios_backgroundColor="#cfcfcf"
              thumbColor={props.completed ? "#ffffff" : "#e8e8e8"}
              value={props.completed}
              onValueChange={() => props.toggleCompleted(props.id)}
            />
            <View style={styles.textWrapper}>
              <Text
                style={
                  props.completed ? styles.taskInactive : styles.taskActive
                }
              >
                {props.title}
              </Text>
              <Text style={styles.taskDate}>Created: {props.dateTime}</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => props.deleteTask(props.id)}
          >
            <Text style={styles.blueText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
  taskLayout: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    height: 40,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderColor: "#0369a1",
    borderWidth: 2,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    maxWidth: "28%",
  },
  blueText: {
    color: "#0369a1",
  },
  taskControls: {
    flex: 1,
    flexDirection: "row",
    gap: 8,
  },
  textWrapper: {
    flex: 1,
  },
  taskActive: {
    fontWeight: 500,
    color: "#262626",
  },
  taskInactive: {
    fontWeight: 500,
    color: "#262626",
    textDecorationLine: "line-through",
  },
  taskDate: {
    fontSize: 14,
    lineHeight: 20,
    color: "#404040",
  },
});
