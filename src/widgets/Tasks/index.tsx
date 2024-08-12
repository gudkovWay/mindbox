import { useState } from "react";

import { useTodo } from "@/core/providers/tasks/useTask";
import { TodoList } from "./ui/TodoList/TodoList";
import { TodoButtons } from "./ui/TodoButtons/TodoButtons";
import cls from "./Todo.module.css";

const Todo = () => {
  const { items, addItem, taskToggle } = useTodo();
  const [filter, setFilter] = useState("all");

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
  };

  const filteredItems = items.filter((item) => {
    switch (filter) {
      case "active":
        return !item.completed;
      case "completed":
        return item.completed;
      default: // "all"
        return true;
    }
  });

  return (
    <section className={cls.Todo}>
      <TodoList
        items={filteredItems}
        addItem={addItem}
        taskToggle={taskToggle}
      />
      <TodoButtons
        items={items}
        allFilter={() => handleFilterChange("all")}
        activeFilter={() => handleFilterChange("active")}
        completedFilter={() => handleFilterChange("completed")}
      />
    </section>
  );
};

export default Todo;
