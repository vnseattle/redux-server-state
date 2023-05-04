import React from "react";
import { connect } from "react-redux";
import {setCompletedItem, deleteItem  } from "./../../actions/basicAction"


const TodoItem = (props) =>{
    const handleToggleComplete = (todo) => {
        props.setCompletedItem(todo)
        
      };
    
      const handleDeleteTodo = (todo) => {
        props.deleteItem(todo)
      };
    return (
        <>
        
          <div key={props.todo.id} classNames="item">
            <li className="todo-item">
           
            <input
                type="checkbox"
                checked={props.todo.completed}
                onChange={() => handleToggleComplete(props.todo)}
                className="checkbox"
            />
            <span style={{marginRight:'5px'}}>
                {props.todo.id}
            </span>

            <div className={props.todo.completed ? 'completed' : null}>
                {props.todo.title}  {props.todo.subtask &&  <div> ( {props.todo.subtask.title} ) </div>}
            </div>
           
           
            <button
                onClick={() => handleDeleteTodo(props.todo)}
                className="delete-button"
            >
                Delete
            </button>
            </li>
            </div>
          
        </>)
}

export default connect(null,{setCompletedItem, deleteItem  })(TodoItem)