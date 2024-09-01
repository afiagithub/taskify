import '../App.css';

interface StateProp {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputIndesx = ({todo, setTodo, handleAdd}: StateProp) => {
  return (
    <div>
      <form action="" className="input-form" onSubmit={handleAdd}>
        <input type="text" value={todo} onChange={
            (e) => setTodo(e.target.value)
        } 
        name="task" className="input-box" placeholder="Enter Task Name"/>
        <button type="submit" className="input-btn">Go</button>
      </form>
    </div>
  )
}

export default InputIndesx
