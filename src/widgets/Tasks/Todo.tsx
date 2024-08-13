import { useCallback, useMemo, useState } from "react";

import { useTodo } from "@/core/providers/tasks/useTask";
import { TodoList } from "./ui/TodoList/TodoList";
import { TodoButtons } from "./ui/TodoButtons/TodoButtons";
import cls from "./Todo.module.css";

type TodoFilter = "all" | "active" | "completed";

export const Todo = () => {
  const { items, addItem, deleteItem, toggleTask, clearCompleted } = useTodo();
  const [filter, setFilter] = useState<TodoFilter>("all");

  const handleFilterChange = useCallback((newFilter: TodoFilter) => {
    setFilter(newFilter);
  }, []);

  const filteredItems = useMemo(
    () =>
      items.filter((item) => {
        switch (filter) {
          case "active":
            return !item.completed;
          case "completed":
            return item.completed;
          default:
            return true;
        }
      }),
    [items, filter],
  );
  return (
    <section className={cls.Todo}>
      <TodoList
        items={filteredItems}
        addItem={addItem}
        deleteItem={deleteItem}
        toggleTask={toggleTask}
      />
      <TodoButtons
        items={items}
        allFilter={() => handleFilterChange("all")}
        activeFilter={() => handleFilterChange("active")}
        completedFilter={() => handleFilterChange("completed")}
        clearCompleted={clearCompleted}
      />
    </section>
  );
};
