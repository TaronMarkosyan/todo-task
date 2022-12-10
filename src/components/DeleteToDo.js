import './/cssForDelete.css'

function CloseModal(){
    return(
        <div>
            
        </div>
    )
}


function DeleteToDo({onDelete , todos , close , setClose}){

    const handleClose = (close) => {
        setClose(!close)
    }

    return(
        <div className='delete-div'>
            <div className='delete-div-child'>
            <p className='delete-text'>Are you sure you want delete?</p>
            <div className='buttons-div'>
                <button className='delete-button1' onClick={() => onDelete(todos)}>Yes</button>
                <button className='delete-button2' onClick={() => handleClose(close)}>No</button>
            </div>
            </div>
            {
                !close && <CloseModal />
            }
        </div>
    )
}

export default DeleteToDo