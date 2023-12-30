import React, {useState} from "react";
import Navbar from "./components/Navbar";
import {SearchBar, Table} from "./components/HomeComponents";

function App() {
  let [people, setPeople] = React.useState();

  React.useEffect(()=>{
    fetch(`http://localhost:4000`)
      .then(res=>res.json())
      .then(res=>{
        setPeople(res[0]);
        console.log(res[0]);
      });
  }, []);

  return (
    <div className="App">
      <Navbar/>
      <SearchBar people={people} setPeople={setPeople}/>
      {people === undefined ? <p>Loading</p> : <Table people={people}/>}
    </div>
  );
}

export default App;
