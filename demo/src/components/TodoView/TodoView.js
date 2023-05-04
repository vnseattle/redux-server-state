import React, { useEffect, memo } from 'react';
import { connect } from "react-redux";
import TodoItem from './TodoItem';
import { getAllTodos } from "./../../actions/basicAction"




function TodoList(props) {

  useEffect(()=>{
    // Get list 
    props.getAllTodos()
  },[])


  return (
    <div className="container">
      <h1 className="heading">Todo List</h1>
      <div className="todo-list">
        {props.serverState?.todos?.map((todo) => <TodoItem todo={todo}/>)}
      </div>
    </div>
  );
}

export default connect(state=>state,{getAllTodos})(TodoList,(prv,next)=>JSON.stringify(prv.serverState.todos)===JSON.stringify(next.serverState.todos));
