import { useState } from 'react'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'
import './App.css';


function App() {
  const [todos, setTodos] = useState([]);


  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]);

  }
  const removeTodo = (todoId) => {
    setTodos([...todos.filter((todo) => todo.id !== todoId)]);
  }

  const updateTodo = (newTodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id !== newTodo.id) {
        return todo;
      }
      return newTodo;
    })

    setTodos([...updatedTodos]);
  }
  console.log(todos);

  return (
    <div className='App' >
      <div className='main' >
        <h1 style={{ textAlign: 'center', }}>Todo List</h1>
        <TodoCreate onCreateTodo={createTodo} />
        <TodoList todos={todos} onRemoveTodo={removeTodo} onUpdateTodo={updateTodo} />

      </div>


    </div>


  )
}

export default App
//...todos öncek todoyu tutup devamına todo eklendiğinde hepsinin gözükmesini sağlıyor