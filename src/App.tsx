import { useState } from 'react';
import './App.css';
import InputIndesx from './components/InputIndesx';
import { Todo } from './model';
import TodoList from './components/TodoList';

function App() {
  const [todo, setTodo] = useState<string>('')
  const [todoList, setTodoList] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if(todo){
      setTodoList([...todoList, {id: Date.now(), todo, isDone: false} ])
      setTodo('')
    }
  }
  console.log(todoList);
  
  return (
    <div className="App">
      <h1 className='heading'>Taskify</h1>
      <InputIndesx todo={todo} setTodo={setTodo} handleAdd={handleAdd}></InputIndesx>
      <TodoList todoList={todoList} setTodoList={setTodoList}></TodoList>
    </div>
  );
}

export default App;
