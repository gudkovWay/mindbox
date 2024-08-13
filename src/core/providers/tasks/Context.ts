import { createContext } from "react";
import { TaskProps } from "@/shared/types/task";

export interface TodoContextType {
  items: TaskProps[];
  clearCompleted: () => void;
  addItem: (name: string) => void;
  toggleTask: (id: string) => void;
  deleteItem: (id: string) => void;
}

export const TodoContext = createContext<TodoContextType | undefined>(
  undefined,
);
