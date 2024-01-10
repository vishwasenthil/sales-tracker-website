import React, {useState} from "react";
import Navbar from "./components/Navbar";
import {SearchBar, Table} from "./components/HomeComponents";

function App() {
  let [people, setPeople] = React.useState();
  let [filteredArr, setFilteredArr] = React.useState(people);

  React.useEffect(()=>{
    fetch(`http://localhost:4000`)
      .then(res=>res.json())
      .then(res=>{
        setPeople(res[0]);
        setFilteredArr(res[0]);
        console.log(res[0]);
      });
  }, []);

  function handleSearch(searchTerm) {
    console.log(`people ${people.name}`);
    setFilteredArr(people.filter(person=>person.name.includes(searchTerm)));
    //setPeople(people.filter(person=>person.name.includes(searchTerm)));
  }

  return (
    <div className="App">
      <Navbar/>
      <SearchBar people={people} setPeople={setPeople} onSearch={handleSearch}/>
      {people === undefined ? <p>Loading</p> : <Table people={filteredArr}/>}
    </div>
  );
}

export default App;
