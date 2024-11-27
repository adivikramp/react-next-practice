import React from "react"
import { TodoClass } from "../models/todo"
import TodoItem from "./TodoItem"

const Todos: React.FC<{ items: TodoClass[], onRemoveTodo: (id: string) => void }> = (props) => {
    return (
        <div>
            <ul>
                {props.items.map((item) =>
                    <TodoItem
                        key={item.id}
                        text={item.text}
                        onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
                    />
                )}
            </ul>
        </div>
    )
}

export default Todos