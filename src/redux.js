import { configureStore, createSlice } from "@reduxjs/toolkit";


  export const todoSlice = createSlice({
    name: "todo",
    initialState:[
        {
            id : 1,
            description : "Reviser mes cours",
            isDone : true
        },
        {
            id : 2,
            description : "Faire du shopping",
            isDone : false
        },
        {
            id : 3,
            description : "Envoyer des emails",
            isDone : true
        },
        {
            id : 4,
            description : "Jouer avec mes enfants",
            isDone : false
        }, 
    ],
    reducers: {
        
      addTask: (state, action) => {
        const newTask  = {
          id: Date.now(),
          description: action.payload,
          isDone : false,
        };

        state.push(newTask);
      },
       
      toggleTask : (state, action) => {
        const task = state.find((t) => t.id === action.payload);
        task.isDone = !task.isDone;
      },

      deleteTask : (state, action) => {
        state = state.filter((t) => t.id !== action.payload);
        return state;
      }, 

      editTask : (state, action) => {
        const nt = state.map((t) => t.id === action.payload.id? {...t,description : action.payload.value} : t)
        return {tasks:nt}
    }
    },
  });

  export const {addTask, deleteTask, toggleTask, editTask} = todoSlice.actions;

  export const store = configureStore({
     reducer : {
        todo : todoSlice.reducer
    }
  }); 
  

  
  export default todoSlice.reducer;