import React, {useState } from 'react';
import { connect } from "react-redux";
import { getAllTodos, addNewItem , addNewItemToTop} from "./../../actions/basicAction"
import { createSquidGameTasks, clearTheTask, insertSubTaskToId2, updateTheTaskId2, removeTheTaskId2, appendToTodoList} from "./../../actions/noReducerAction"

function TodoSubmit(props) {
  const [newTodo, setNewTodo] = useState(pickRandomTask(todoList));

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleAddTodo = () => {
    if(newTodo.length>0 ){
      props.addNewItem(newTodo)
    }
    setNewTodo(pickRandomTask(todoList))
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
        handleAddTodo();
      }
  };

  // Call functions using no-reducer
  const handleAddTodoOnTop = () => {
    props.addNewItemToTop(newTodo);
    setNewTodo(pickRandomTask(todoList))

  }

  return (
    <div className="container" style={{marginTop:'10px'}}> 
      <div className="input-container">
        <input
          type="text"
          value={newTodo}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          placeholder="Enter a new todo"
          className="input"
        />
        <button onClick={handleAddTodo} className="button" >
          Add To Database
        </button>
      </div>
      <div style={{padding:'5px'}}> --- Custom actions --- </div>
      <button onClick={handleAddTodoOnTop} className="button2">
          Add To Top (temporary)
      </button>

      <div style={{padding:'5px'}}> --- Modifying state actions  --- </div>
      <button onClick={()=>props.createSquidGameTasks()} className="button2">
          Create Squid Game Task (temporary)
      </button>
      <button onClick={()=>props.insertSubTaskToId2()} className="button2">
          Insert sub task to task id = 2 (temporary)
      </button>
      <button onClick={()=>props.updateTheTaskId2()} className="button3">
          Update task id = 2 (temporary)
      </button>
      <button onClick={()=>props.removeTheTaskId2()} className="button4" >
          Remove task id = 2 (temporary)
      </button>
      <button onClick={()=>props.clearTheTask()} className="button4" >
          Clear the task with id=1 (temporary)
      </button>
      <button onClick={()=>props.appendToTodoList()} className="button2" >
          Append all Squid Game Tasks to the ist (temporary)
      </button>

      <div style={{padding:'5px'}}> --- Refresh --- </div>
      <button onClick={()=>props.getAllTodos()} className="button" >
          Get All Todos from DB
      </button>
     

     
    </div>
  );
}

export default connect(null,{ getAllTodos ,addNewItem, addNewItemToTop, createSquidGameTasks, clearTheTask, insertSubTaskToId2 , updateTheTaskId2, removeTheTaskId2, appendToTodoList})(TodoSubmit);



function pickRandomTask(todoList) {
  const currentDate = new Date();
  const currentMilliseconds = currentDate.getMilliseconds();
  const randomIndex = currentMilliseconds % todoList.length;
  return todoList[randomIndex];
}

let todoList = [
  "Complete assignment",
  "Buy groceries",
  "Call mom",
  "Go for a run",
  "Schedule a dentist appointment",
  "Pay bills",
  "Clean the house",
  "Attend a meeting",
  "Research for a project",
  "Write a blog post",
  "Plan a weekend getaway",
  "Organize your workspace",
  "Read a book",
  "Practice a musical instrument",
  "Tell a joke to a stranger",
  "Dance like nobody's watching",
  "Try a new weird food combination",
  "Make funny faces in the mirror",
  "Have a pretend conversation with your pet",
  "Create a funny TikTok video",
  "Do a silly dance in a public place",
  "Write and perform a funny skit",
  "Play a prank on a friend",
  "Dress up in a funny costume for no reason",
  "Start a pillow fight with your friends or family",
  "Read a book",
  "Write a heartfelt letter to a loved one",
  "Volunteer at a local charity",
  "Take a walk in nature",
  "Learn a new language",
  "Cook a healthy meal",
  "Meditate for 15 minutes",
  "Write in a journal",
  "Listen to a podcast",
  "Practice playing a musical instrument"
];  
