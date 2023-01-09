import React from 'react'
import { useSelector } from 'react-redux';

const FilterTast = () => {

    const tasks = useSelector((state) => state.todo)

    const undoneTasks = tasks.filter((t) => t.isDone === false);


  return (
    <header>
      <h2  style={{marginTop : 40, color : "#003566"}}>
         Tâches à faire : <strong>{undoneTasks.length}</strong>
      </h2>
    </header>  )
}

export default FilterTast