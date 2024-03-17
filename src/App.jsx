import { useState, useEffect } from 'react'
import { TodoProvider } from './contexts'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

import { DarkProvider } from "./components/Mode"

const light = "/images/blue.jpg";
const dark = "/images/dark.png";

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))


  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    //console.log(id);
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id ? {
          ...prevTodo,
          completed: !prevTodo.completed
        } : prevTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    
    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])



  // Dark mode ----------------------------------------
  const [img, setImg] = useState(light)

  const lightTheme = () => {
    setImg(light)
  }

  const darkTheme = () => {
    setImg(dark)
  }

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <DarkProvider value={{ img, darkTheme, lightTheme }}>

        <div className="min-h-screen py-8"
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
            <div className="mb-4">
              {/* Todo form goes here */}
              <TodoForm />
            </div>
            <div className="flex flex-wrap gap-y-3">
              {/*Loop and Add TodoItem here */}
              {todos.map((todo) => (
                <div key={todo.id}
                  className='w-full'
                >
                  <TodoItem todo={todo} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </DarkProvider>
    </TodoProvider>
  )
}

export default App
