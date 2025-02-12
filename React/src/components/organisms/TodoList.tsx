// Packages
import React from "react";

// Components
import List from "../molecules/List";

const TodoList: React.FC = () => {
  return (
    <div className="flex flex-col gap-2 mt-16 w-full md:w-2/3 mx-auto">
      <h1 className="font-bold text-sky-700 text-2xl">To-do app solution</h1>
      <h2 className="font-medium text-neutral-400">Built by Liam Nixon</h2>
      <p>
        A simple React-based to-do app, utilising components and
        state-management for data consistency, as part of the assessment for the
        role of frontend developer at Johns Lyng Group.
        <br />
        <br />
        Features include:
        <ul className="list-disc pl-8">
          <li>Viewing current tasks</li>
          <li>Adding new tasks via button or ENTER key</li>
          <li>Deleting existing tasks</li>
          <li>Persisting tasks in session storage</li>
        </ul>
      </p>
      <List />
    </div>
  );
};

export default TodoList;
