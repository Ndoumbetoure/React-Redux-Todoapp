import React from 'react'
import { useDispatch } from 'react-redux';
import { toggleTask, deleteTask, editTask } from '../redux';

const Task = (props) => {

    const {task} = props;

    const dispatch = useDispatch() 

  return (
    <>
      
          <ul className='edit' style={{ minWidth: '22rem', marginTop : 63, width:'50rem', height:'15px', textAlign :"center", textDecoration :'none',marginLeft: '50px'}}>
             <li style={{backgroundColor:'#e5e5e5', height:'50px', listStyleType:'none', paddingTop:'18px', textAlign : "center", color : "#003566"}}>
                <input type="checkbox" checked={task.isDone} onChange={() => dispatch(toggleTask(task.id))} />
                {task.description}
                <i class="fa fa-edit" aria-hidden="true" onClick={() => dispatch(editTask(task.description))}></i>
                <i class="fa fa-trash" aria-hidden="true" onClick={() => dispatch(deleteTask(task.id))} ></i>
             </li>
          </ul>
    </>
  )
}

export default Task

