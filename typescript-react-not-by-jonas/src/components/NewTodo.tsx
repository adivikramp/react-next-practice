import React, { useRef } from "react"

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
    const todoTextInputRef = useRef<HTMLInputElement>(null)

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()

        const newTodo = todoTextInputRef.current!.value;

        if (newTodo.trim().length === 0) {
            return;
        }

        props.onAddTodo(newTodo)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="text">Todo Text</label>
            <input type="text" id="text" ref={todoTextInputRef} />
            <button>Add Todo</button>
        </form>
    )
}

export default NewTodo;