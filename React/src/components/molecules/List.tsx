// Packages
import React, { useEffect, useState } from "react";

// Components
import ListItem from "../atoms/ListItem";
import Button from "../atoms/Button";

// Interface
interface ListItem {
  id: number;
  title: string;
  dateTime: string;
  completed: boolean;
}

const List: React.FC = () => {
  // Component state
  const [tasks, setTasks] = useState<ListItem[]>(() => {
    const sessionTasks = sessionStorage.getItem("tasks");
    return sessionTasks ? JSON.parse(sessionTasks) : [];
  });

  const [title, setTitle] = useState<string>("");

  // Component lifecycle
  useEffect(() => {
    sessionStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

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
        dateTime: new Date().toLocaleString("en-au"),
        completed: false,
      };

      setTasks([...tasks, newTask]);
      setTitle("");
    }
  };

  const deleteTask = (id: number): void => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === "Enter") {
      addTask();
    }
  };

  return (
    <div className="w-full">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between gap-2">
          <input
            className="h-10 bg-slate-200 appearance-none border-2 border-slate-300 rounded-md w-full py-2 px-4 focus:outline-none focus:bg-white focus:border-sky-700 transition-colors duration-100"
            type="text"
            value={title}
            onChange={handleChange}
            onKeyDown={handleSubmit}
            placeholder="Enter a new task here"
            max="256"
          />
          <Button variant="default" onClick={() => addTask()}>
            <span className="font-medium">+ Add task</span>
          </Button>
        </div>
        <div className="rounded-md bg-neutral-300 shadow-md">
          {tasks.length > 0 ? (
            <ul>
              {tasks.map((task) => (
                <li key={task.id + task.title}>
                  <ListItem
                    id={task.id}
                    title={task.title}
                    dateTime={task.dateTime}
                    completed={task.completed}
                    toggleCompleted={toggleCompleted}
                    deleteTask={deleteTask}
                  />
                </li>
              ))}
            </ul>
          ) : (
            <div className="w-full p-2">
              <div className="bg-white rounded-md py-2 px-4">
                <p className="text-neutral-400">
                  No tasks outstanding (Hooray!)
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default List;
