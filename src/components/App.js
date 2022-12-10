import { useState } from "react"
import ToDoForm from "./ToDoForm"
import ToDoList from "./ToDoList"
import './/index.css'
import CompletedToDo from "./CompletedToDo";

function App(){

const [todos , setTodos] = useState([]);
const [check , setCheck] = useState(false);
const [hide , setHide] = useState(true);
const [close , setClose] = useState(true);

    return(
        <div className="main-div">
        <CompletedToDo 
        key={todos.id} 
        todos={todos} 
        setTodos={setTodos}
        setHide={setHide}
    />

        <ToDoForm todos={todos} setTodos={setTodos} setAdd={(content) => {
            setTodos([
                ...todos,
                {
                    id:Math.random(),
                    content:content,
                    completed:false,
                }
            ])
        }} />

        <ToDoList  
        todos={todos} 
        hide={hide}  
        setHide={setHide}
        check={check}
        onDelete={(todo) => {
            setTodos(todos.filter((member) => member.id !== todo.id));
        }}
        onChange = {() => {
            setCheck(!check);
        }}
        close={close}
        setClose={setClose} 
        />
    </div>
    )
}

export default App