import { Component } from 'react';

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            todoList: [1, 2, 3, 4]
        }
    }


    addWork = () => {
        let newWork = document.getElementById('workName').value;
        if (newWork.trim() !== "") {
            this.setState((prev) => ({
                todoList: [...prev.todoList, newWork]
            })) 
            document.getElementById('workName').value = "";
        } else {
            document.getElementById('workName').value = newWork;
        }
    }



    render() {
        return (
            <>
                <div style={{ textAlign: 'center' }}>
                    <div>
                        <h1>Todo List</h1>
                        <input type='text' id='workName' />
                        <button id='button' onClick={() => this.addWork()}>Add</button>
                    </div>
                    <ul>
                        {this.state.todoList.map((element, index) => {
                            return <li key={index}>{element}</li>
                        })}
                    </ul>
                </div>

            </>
        )
    }
}

export default TodoList;