import React from 'react'
//import Card from 'react-bootstrap/Card';
import Task from './Task'
import image from "./ssets/uu.jpg"; 
//import { addTask, deleteTask } from '../redux/todoSlice';
import {useSelector} from "react-redux";


const  ListTask = () =>{

 const tasks = useSelector((state) => state.todo);


  return (
    <div  style={{ backgroundImage:`url(${image})`, width: '60rem', height:'50rem', marginLeft: '12rem', marginRight:'12rem'}}>
            {
                tasks.map((l) => (
                 <Task  
                   task={l} 
                   key={l.id}
                   />
            ))}
    </div>
  );
};

export default ListTask