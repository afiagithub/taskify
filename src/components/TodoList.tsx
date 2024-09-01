import '../App.css';
import { Todo } from '../model';
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { TiTick } from "react-icons/ti";

interface Props {
    todoList: Todo[];
    setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({ todoList, setTodoList }: Props) => {
    const handleTick = (id:number) => {        
        return setTodoList(todoList.map(todo => todo.id === id? {...todo, isDone: !todo.isDone}: todo))
    }
    return (
        <div>
            {
                todoList.map(task => <form key={task.id} className='card'>
                    <p>{task.todo}</p>
                    <div className='action-bar'>
                        <span className='icon'>
                            <CiEdit />
                        </span>
                        <span className='icon'>
                            <MdOutlineDeleteOutline />
                        </span>
                        <span className='icon' onClick={() => handleTick(task.id)}>
                            <TiTick />
                        </span>
                    </div>
                </form>)
            }
        </div>
    )
}

export default TodoList
