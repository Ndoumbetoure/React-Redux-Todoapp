import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTask } from '../redux';
// import { addTask } from '../redux';

const Addtask = () =>{

const[addtask, setAddtask] = useState("");
const dispatch = useDispatch();

   const handleSubmit = (e) => {
     e.preventDefault();
   
     dispatch(addTask(addtask));
     

    setAddtask("");
   };
  return (
    <form  onSubmit={handleSubmit}  style={{marginTop: "10rem"}}>
        <input 
           type="text" 
           placeholder='Ajouter une nouvelle tache' 
           onChange={(e) => setAddtask(e.target.value)} 
           value={addtask}
           />
           <input type="submit"  value="Add task"/>
    </form>
  );
};

export default Addtask