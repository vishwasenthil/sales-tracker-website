import React, {useState} from "react";
import Navbar from "./components/Navbar";
import {SearchBar, Table} from "./components/HomeComponents";

function App() {
  let [people, setPeople] = React.useState(); //contains original array
  let [filteredArr, setFilteredArr] = React.useState(people); //contains filtered array

  React.useEffect(()=>{
    fetch(`http://localhost:4000`)
      .then(res=>res.json())
      .then(res=>{
        setPeople(res[0]);
        setFilteredArr(res[0]);
        console.log(res[0]); //res returns array with 2 arrays, first array contain data
      });
  }, []);

  function handleSearch(searchTerm) {
    console.log(people);
    console.log(filteredArr);
    setFilteredArr(people.filter(person=>person.name.includes(searchTerm))); //sets filtered arry by filtering contents in people array
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
