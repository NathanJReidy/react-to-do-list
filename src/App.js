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
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(id) {
        this.setState(prevState => {
            const updatedToDos = prevState.allToDos.map(item => {
                if (item.id === id) {
                    item.completed = !item.completed
                }
                return item
            })
            return {
                allToDos: updatedToDos
            }
        })
    }

    render() {
        const toDos = this.state.allToDos.map(item => <ToDoItem 
        item={item}
        key={item.id} 
        handleChange={this.handleChange}
        />)
    
        return (
            <div className="todo-list">
                {toDos}
            </div>
        )
    }
}


export default App;