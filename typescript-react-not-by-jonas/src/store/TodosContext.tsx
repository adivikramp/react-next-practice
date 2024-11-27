/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import React, { useState } from "react";
import { TodoClass } from "../models/todo";

type TodosContextObj = {
    items: TodoClass[];
    addTodo: (text: string) => void
    removeTodo: (id: string) => void
}

export const TodosContext = React.createContext<TodosContextObj>({
    items: [],
    addTodo: () => { },
    removeTodo: () => { }
});

const TodosContextProvider: React.FC<React.PropsWithChildren<{}>> = (props) => {
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

    const contextValue: TodosContextObj = {
        items: todos,
        addTodo: handleAddTodo,
        removeTodo: handleRemoveTodo
    }

    return <TodosContext.Provider value={contextValue}>
        {props.children}
    </TodosContext.Provider>
}

export default TodosContextProvider;