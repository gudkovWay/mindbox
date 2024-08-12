import { TaskProps } from "@/shared/types/task";
import { BasketIcon } from "@/shared/assets/icons/Basket";
import cls from "./TodoButtons.module.css";

interface TodoButtonsProps {
  items: TaskProps[];
  allFilter: () => void;
  activeFilter: () => void;
  completedFilter: () => void;
}

export const TodoButtons: React.FC<TodoButtonsProps> = (props) => {
  const { allFilter, activeFilter, completedFilter, items } = props;

  return (
    <div className={cls.buttons}>
      <span className={cls.count}>
        <b>A/T/C:</b>
        <br />
        {items.length}/{items.filter((item) => !item.completed).length}/
        {items.filter((item) => item.completed).length}
      </span>

      <div className={cls.filters}>
        <button onClick={allFilter}>All</button>
        <button onClick={activeFilter}>Active</button>
        <button onClick={completedFilter}>Completed</button>
      </div>

      <button className={cls.clear}>
        <BasketIcon />
      </button>
    </div>
  );
};
