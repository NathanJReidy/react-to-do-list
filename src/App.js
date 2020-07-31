import React from 'react';
import ToDoItem from './ToDoItem';
import todosData from './ToDosData';
import { render } from '@testing-library/react';

// function App() {
//     const toDos = todosData.map(item => <ToDoItem 
//         item={item}
//         key={item.id} 
//         />)
    
//     return (
//         <div className="todo-list">
//             {toDos}
//         </div>
//     )
// } 


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            allToDos: todosData
        }
    }

    render() {
        const toDos = this.state.allToDos.map(item => <ToDoItem 
        item={item}
        key={item.id} 
        />)
    
        return (
            <div className="todo-list">
                {toDos}
            </div>
        )
    }
}


export default App;