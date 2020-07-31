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

        this.state = todosData.map(item => <ToDoItem 
            item={item}
            key={item.id} 
        />)

        }
        render() {
            return (
                <div className="todo-list">
                    {this.state}
                </div>
            )
        }
}



export default App;