import { useState } from "react";

import { TaskProps } from "@/shared/types/task";
import cls from "./TodoList.module.css";

interface TodoListProps {
  items: TaskProps[];
  addItem: (value: string) => void;
  deleteItem: (id: string) => void;
  toggleTask: (id: string) => void;
}

export const TodoList: React.FC<TodoListProps> = (props) => {
  const { items, addItem, deleteItem, toggleTask } = { ...props };
  const [value, setValue] = useState("");
  const [expand, setExpanded] = useState(false);

  const onExpand = () => setExpanded((prev) => !prev);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addItem(value);
    setValue("");
  };

  return (
    <>
      <div className={cls.form}>
        <button onClick={onExpand}>{!expand ? "↓" : "↑"}</button>
        <form onSubmit={onSubmit}>
          <input
            placeholder="What needs to be done?"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </form>
      </div>

      {expand && items.length > 0 ? (
        <ul>
          {items.map((item) => (
            <li
              key={item.id}
              className={`${cls.item} ${item.completed && cls.completed}`}
            >
              <div>
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => toggleTask(item.id)}
                />
                {item.name}
              </div>

              <button onClick={() => deleteItem(item.id)}>x</button>
            </li>
          ))}
        </ul>
      ) : (
        expand && <div className={cls.empty}>Nothing to do</div>
      )}
    </>
  );
};
