# Redux-Server-State
Redux-server-state is a tool for Redux that transforms API request outcomes into Redux States with minimal code.

![](https://raw.githubusercontent.com/vnseattle/redux-server-state/main/document/redux-server-state.png)

# [DEMO  - Todo List ](https://github.com/vnseattle/redux-server-state/tree/main/demo ) 
# Installing
```js
npm i redux-server-state
```
Importing ```{ reducer }``` to the ```combineReducers```.

```js
import { reducer } from 'redux-server-state';

let rootReducer = combineReducers({ serverState: reducer })
let store = createStore(rootReducer, applyMiddleware....));
```

# How to use
Import the library with into all action pages.
```js
import state from "redux-server-state"
```
## Methods
### GET  method
```js
export const getMyData = () => state.get(url,config,callback)
```
Example:
```js
export const getTodoList = () => state.get('https://dummyjson.com/todos') 
```
The Redux state will be automatically generated in the following data.
```json
"todos": [
    {
      "id": 1,
      "todo": "Do something nice for someone I care about",
      "completed": true,
      "userId": 26
    },
    {...},
    {...}
    // 30 items
```

### POST/PUT/PATCH/DELTE  method
```js
export const postMyData = () => state.post(url,payload,config,callback)
```
Example:
```js
export const postToDoList = () => state.post(
'https://dummyjson.com/todos/add', 
{  todo: 'Use DummyJSON in the project',
    completed: false,
    userId: 5
}, // payload
{state: 'Todos'}, // config 
(data)=>console.log(data)) // callback
```
#### Parameters
| |  |
|----------|----------|
|   url  |   This parameter represents the URL to which the request will be sent. It typically specifies the endpoint or the resource on the server that will handle the data sent by the request |   
|   payload  |   The payload parameter contains the data that will be sent in the body of the HTTP request. It could be any valid JSON or text data that needs to be transmitted to the server | 
|   config*  |   The config parameter is an optional parameter that allows you to specify additional configuration options for the HTTP request. Below, I will provide a detailed explanation of the matter| 
|   callback  |   A callback function enables you to modify the response before it is placed into the Redux state by the tool. | 
##### Configuration*
You have two options to add to the configuration: "root" and "state."
| |  |
|----------|----------|
|root | In some cases, the response from the endpoints may be wrapped within an object. In such situations, you can specify the exact object you want to assign as the state. |
|state | At times, the response may return an array instead of an object. In such cases, it is necessary to assign a name to that array in order to transform it into an object. |
Since the tool relies on ```Axios``` as a dependency, you can include the Axios configuration within this config as well.

**Please refer to the "demo" section for a comprehensive understanding of how to handle various scenarios when coding.**

##### Callback*
In the callback, you can use a library called ```no-reducer```, which simplifies the process of building state by eliminating the need to write reducers manually. This library can significantly speed up the development process. Feel free to check it out at https://github.com/vnseattle/no-reducer.

The "no-reducer" library has already been integrated into our library, making it readily available for use. To utilize it, simply call the library as follows: 

```js
import state,{replace} from "redux-server-state"

//Example
export const addNewItemToTop = (title) => state.post(`${API}/todos`,{title,completed:false},null,(res) =>
        replace('todos',[res.data.pop(), ...res.data]) // this is a callback function
)
```
**Please refer to the "demo" section for a comprehensive understanding of how to handle various scenarios when coding.**
### Thanks
I am grateful to the developers who have contributed to the development of ```Redux``` and ```Axios```. These technologies have proven to be invaluable for developers like myself, enabling us to build applications more efficiently. I would like to extend my special thanks to them for providing the dependencies that have allowed me to create this tool.

Happy coding

🥔