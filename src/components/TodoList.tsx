import '../App.css';
import { Todo } from '../model';

interface Props{
    todoList: Todo[];
    setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({todoList, setTodoList}: Props) => {
  return (
    <div>
      
    </div>
  )
}

export default TodoList
