import React, { useContext } from "react"
import { TodosContext } from "../store/TodosContext"
import TodoItem from "./TodoItem"

// Without ContextAPI
// import { TodoClass } from "../models/todo"
// const Todos: React.FC<{ items: TodoClass[], onRemoveTodo: (id: string) => void }> = (props) => {
//     return (
//         <div>
//             <ul>
//                 {props.items.map((item) =>
//                     <TodoItem
//                         key={item.id}
//                         text={item.text}
//                         onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
//                     />
//                 )}
//             </ul>
//         </div>
//     )
// }

// With ContextAPI
const Todos: React.FC = () => {
    const todosCtx = useContext(TodosContext)

    return (
        <div>
            <ul>
                {todosCtx.items.map((item) =>
                    <TodoItem
                        key={item.id}
                        text={item.text}
                        onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
                    />
                )}
            </ul>
        </div>
    )
}

export default Todos