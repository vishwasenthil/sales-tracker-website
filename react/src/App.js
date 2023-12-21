import React, {useState} from "react";
import Navbar from "./components/Navbar";
import {SearchBar, Table} from "./components/HomeComponents";

function App() {
  let [people, setPeople] = React.useState([]);

  React.useEffect(()=>{
    fetch(`https://automatic-cod-7qxrwrq464vhxxxv-4000.app.github.dev/`)
      .then(res=>console.log(res));
  }, []);
  return (
    <div className="App">
      <Navbar/>
      <SearchBar people={people} setPeople={setPeople}/>
      <Table people={people}/>
    </div>
  );
}

export default App;
