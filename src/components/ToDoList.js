import ToDoCard from "./ToDoCard";

function ToDoList({todos , onDelete , onChange , hide , check , onClose , setHide , close ,setClose}){

    if(todos.length === 0){
        return(
            <div className="list-title-div">
                <p className="list-title1">Your life is a blank page. You write on it.</p>
                <p className="list-title2">So start by adding  your tasks here.</p>
            </div>
        )
    }else{
        return(    
            <div className="list-div">
                {
                    todos.map((todos) => {
                        return(
                            <ToDoCard 
                            key={todos.id} 
                            onClose={onClose} 
                            check={check} 
                            hide={hide} 
                            todos={todos} 
                            onDelete={onDelete} 
                            onChange={onChange} 
                            setHide={setHide}
                            close={close}
                            setClose={setClose} 
                        />
                        )
                    })
                }
            </div>
        )
    }
}

export default ToDoList