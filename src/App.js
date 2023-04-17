import { useEffect, useState } from "react"
import { NewTodoForm } from "./Component/NewTodoFormComponent/NewTodoForm"
import './App.css'
import { TodoList } from "./Component/TodoListComponent/TodoList"
import React from "react"

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo(title) {
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ]
    })
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }
  function editTodo(id,completed){
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }

      })
    })
  }
  

  return (
    <React.Fragment>
    <h1 className="header">Todo List</h1>
      <NewTodoForm onSubmit={addTodo} />
      
      <TodoList todos={todos} toggleTodo={toggleTodo}  editTodo={editTodo} deleteTodo={deleteTodo} />
    </React.Fragment>
  )
}