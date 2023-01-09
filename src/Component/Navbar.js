import React from 'react'
import { Link } from 'react-router-dom'
import Addtask from "./AddTask"


function Navbar() {

    const enteteStyle = {height : "45px", backgroundColor : '#ffd60a', marginTop : "10px", marginLeft : -15, marginRight : -15, marginBottom: 10, paddingBottom : 8}
    const styleObject = {color : "#003566", textAlign : "center", paddingTop :"12.5px"}
    const linkStyle ={ backgroundColor: "#00356", textDecoration:'none', color: '#ffc300', fontSize: 20, fontFamily: "Georgia, 'Times New Roman', Times, serif", marginRight : 20}
  


    return (
  
       <div>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
            <div style={enteteStyle}>
              <h2 style={styleObject}>TO DO List </h2>
            </div>

            <div>
               <ul className='liStyle'>
                  <li><Link to="/" style={linkStyle}>Home</Link><i class="fa fa-home" aria-hidden="true"></i></li>
                  <li><Link to="/Addtask" element={<Addtask/>} style={linkStyle}>Add new Task</Link><i class='fa fa-plus-circle'></i></li>
                  <li><Link to="/EditTask" style={linkStyle}>Edit Task</Link><i class="fa fa-edit" aria-hidden="true"></i></li>
                  <li><Link to="/ListTask" style={linkStyle}>List Task</Link><i class="fa fa-tasks" aria-hidden="true"></i> </li>
                </ul>
            </div> 
  
       </div>
  
    );
}

export default Navbar