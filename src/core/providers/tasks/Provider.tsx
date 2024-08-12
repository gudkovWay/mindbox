import { useState, useEffect } from "react";
import { TaskProps } from "@/shared/types/task";
import { TodoContext } from "./Context";

export const TodoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [items, setItems] = useState<TaskProps[]>(() => {
    const savedItems = localStorage.getItem("items");
    return savedItems ? JSON.parse(savedItems) : [];
  });

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const addItem = (name: string) => {
    const newItem = { id: Date.now().toString(), name, completed: false };
    setItems((prev) => [...prev, newItem]);
  };

  const taskToggle = (id: string) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setItems(newItems);
  };
  const clearCompleted = () => {
    const newItems = items.filter((item) => !item.completed);
    setItems(newItems);
  };

  return (
    <TodoContext.Provider
      value={{ items, addItem, taskToggle, clearCompleted }}
    >
      {children}
    </TodoContext.Provider>
  );
};
