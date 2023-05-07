import {create, clear, insert, update, remove, append} from "redux-server-state"




export const createSquidGameTasks = () => create('todos',squidGameTodoList)

export const clearTheTask = () => clear('todos',1,'id')

export const insertSubTaskToId2 = () => insert('todos','subtask',{title:'This is a subtask'},2,'id')

export const updateTheTaskId2 = () => update('todos',{title:"This task is updated"},2,'id')

export const removeTheTaskId2 = () => remove('todos',2,'id')

export const appendToTodoList = () => append('todos',[...squidGameTodoList])



let squidGameTodoList = [
        {
          "title": "Register for the Squid Game",
          "completed": false,
          "id": 1
        },
        {
          "title": "Practice red light, green light",
          "completed": false,
          "id": 2
        },
        {
          "title": "Form alliances with other players",
          "completed": false,
          "id": 3
        },
        {
          "title": "Survive the first game",
          "completed": false,
          "id": 4
        },
        {
          "title": "Learn the rules of the next game",
          "completed": false,
          "id": 5
        },
        {
          "title": "Gather intelligence on other players",
          "completed": false,
          "id": 6
        },
        {
          "title": "Master the game of marbles",
          "completed": false,
          "id": 7
        },
        {
          "title": "Survive the glass bridge",
          "completed": false,
          "id": 8
        },
        {
          "title": "Confront the Frontman",
          "completed": false,
          "id": 9
        },
        {
          "title": "Unmask the organizers",
          "completed": false,
          "id": 10
        },
        {
          "title": "Escape from the Squid Game",
          "completed": false,
          "id": 11
        }
];
      