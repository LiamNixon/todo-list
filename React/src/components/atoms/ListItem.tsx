// Packages
import React from "react";

// Components
import Button from "./Button";
import { Trash } from "lucide-react";

// Interfaces
interface ListItemProps {
  id: number;
  title: string;
  dateTime: string;
  completed: boolean;
  toggleCompleted: (id: number) => void;
  deleteTask: (id: number) => void;
}

const ListItem: React.FC<ListItemProps> = (props) => {
  return (
    <>
      <div className="w-full p-2">
        <div
          className={`rounded-md ${
            props.completed ? "bg-slate-200" : "bg-white"
          }`}
        >
          <div className="flex justify-between items-center py-2 px-4">
            <div className="flex gap-2">
              <input
                type="checkbox"
                checked={props.completed}
                className="accent-sky-700"
                onChange={() => props.toggleCompleted(props.id)}
              />
              <div className="flex flex-col">
                <span
                  className={`font-medium text-neutral-800 ${
                    props.completed && "line-through"
                  }`}
                >
                  {props.title}
                </span>
                <span className="text-sm text-neutral-700">
                  Created: {props.dateTime}
                </span>
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={() => props.deleteTask(props.id)}
              >
                <Trash />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListItem;
