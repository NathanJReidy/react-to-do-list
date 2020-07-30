import React from 'react';
import ToDoItem from './ToDoItem';
import todosData from './ToDosData';

function App() {
    const toDos = todosData.map(item => <ToDoItem 
        item={item}
        key={item.id} 
        />)
    
    return (
        <div className="todo-list">
            {toDos}
        </div>
    )
}


export default App;