import React from "react";
import Navbar  from "./Navbar";
import Footer from "./Footer";
import ListTask from "./ListTask";
import FilterTast from "./FilterTast";
import Addtask from './AddTask'
import { Provider } from "react-redux";
import {store} from "../redux"

function Home() {

    

  return (
    <Provider store={store}>
      <div className="App" >
        <header className="App-header">
          <Navbar/>
          <FilterTast/>
          <ListTask/>
        </header>
          <Addtask/>
          <Footer/>
      </div>
    </Provider>
  );
}

export default Home;
