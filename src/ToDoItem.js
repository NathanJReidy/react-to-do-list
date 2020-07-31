import React from 'react';

function ToDoItem(props) {
    return (
        <div className="todo-item">
            <input 
            type="checkbox" 
            onChange={() => console.log("Changed!")} 
            checked={props.item.completed ? "checked" : ""}
            />
            <p>{props.item.text} </p>
        </div>
    )
}

export default ToDoItem; 