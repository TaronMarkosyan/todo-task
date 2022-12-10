import './/index.css';
import ToDoCard from './ToDoCard';


function CompletedToDo({check ,  todos , hide , setHide ,setCheck}){

    const handleClick = () => {
        setHide(!hide)
    }
 

    return(
        <div className="completed-div">
            <div className='completed-child-div'>
        <label>
            <input type="checkbox"  onClick={() => handleClick()} />
            Hide Completed
        </label>
            {
            hide ? <ToDoCard key={todos.id} todos={todos} /> : null
            }
            </div>
        </div>
    )
}

export default CompletedToDo