import React from "react"

const TodoItem: React.FC<{ text: string, onRemoveTodo: () => void }> = (props) => {
    return (
        <div style={{ display: 'flex', margin: '20px' }}>
            <li>{props.text}</li>
            <button style={{ marginLeft: '20px' }} onClick={props.onRemoveTodo}>Remove Todo</button>
        </div>
    )
}

export default TodoItem