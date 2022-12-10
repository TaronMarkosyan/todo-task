import { useEffect, useState } from "react";
import ".//index.css"

function EmptyError({error}){

    return(
        <p style={{color:'red'}}>{error}</p>
    )

}

function LongerError({error}){
    return(
        <p style={{color:'red'}}>{error}</p>
    )
}


function ToDoForm({setAdd, todos , setTodos}){


    const [text , setText] = useState("");
    const [textError , setTextError] = useState("");
    const [longerError , setLongerError] = useState("");

    
    useEffect(() => {
        const saveTodo = localStorage.getItem('todos');
        if(saveTodo){
            setTodos(JSON.parse(saveTodo))
        }
    },[setTodos])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    })

    return(
        <div className="form-div">
        <p>Task</p>
        <div className="form-child-div">
        <form onSubmit={(event) => {
        
            if(text.length === 0){
                event.preventDefault();
                setTextError('To do cannot be empty');
                
            }else if(text.length >= 54){
                event.preventDefault();
                setLongerError('To do cannot contain more than 54 character');
            }
            else{
            event.preventDefault();
            setTextError("");
            setLongerError("");
            setAdd(text);
            setText("");
        }
        
    }}>
        <input className="form-div-input" type="text" placeholder="Write here" value={text} onChange={(event) => {
            setText(event.target.value);
        }}/>
        <button className="form-div-button">Add</button>
        <EmptyError error={textError}/>
        <LongerError error={longerError} />
        </form>
        </div>
    </div>
    )
}
export default ToDoForm