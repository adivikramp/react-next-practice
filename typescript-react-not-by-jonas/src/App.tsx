import { useState } from "react"

import NewTodo from "./components/NewTodo"
import Todos from "./components/Todos"
import { TodoClass } from "./models/todo"

const App = () => {
  const [todos, setTodos] = useState<TodoClass[]>([])

  const handleAddTodo = (todoText: string) => {
    const newTodo = new TodoClass(todoText)

    setTodos((todos) => {
      return [...todos, newTodo]
    })
  }

  const handleRemoveTodo = (id: string) => {
    setTodos((todos) => {
      return todos.filter((todo) => todo.id !== id)
    })
  }

  return (
    <div>
      <NewTodo onAddTodo={handleAddTodo} />
      <Todos items={todos} onRemoveTodo={handleRemoveTodo} />
    </div>
  )
}

export default App