import './/index.css';
import DeleteToDo from './DeleteToDo';
import { useState } from 'react';

function ToDoCard({todos , onDelete , onChange , hide , check , onClose , setHide , close , setClose}){
    
    const [inputList, setInputList] = useState([]);
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
      };

    const addAlert = () => {
        setInputList(inputList.concat(<DeleteToDo 
            key={inputList.length} 
            onDelete={onDelete} 
            onClose={onClose} 
            todos={todos}
            hide={hide}
            setHide={setHide}
            close={close}
            setClose={setClose} 
            />));
    }

    if(hide){
        return(
            <div className="card-div">
                <input 
                className='card-checker' 
                type="checkbox" 
                onClick={() => {
                    handleClick();
                    onChange();
                }}
                />
                
                <p style={{color: active ? "grey" : "black" }} className='card-div-text'>{todos.content}</p>
                <div className='card-button' onClick={addAlert}>X</div>
                {inputList}
            </div>
        )
    }else{
        return(
            <div>

            </div>
        )
    }
    

}

export default ToDoCard