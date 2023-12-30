import React from "react";

function SearchBar({people, setPeople}) {
    let [modal, setModal] = React.useState(false);

    let [name, setName] = React.useState(``);
    let [sales, setSales] = React.useState(``);
    let [profits, setProfits] = React.useState(``);
    let [time, setTime] = React.useState(``);

    function handleClick() {
        setModal(!modal);
    }
    function refreshData() {
        fetch(`http://localhost:4000`)
            .then(res=>res.json())
            .then(res=>{
            setPeople(res[0]);
        });
    }
    function handleSubmit(e) {
        e.preventDefault();
        fetch(`http://localhost:4000/add-new-user`, {
            method:`POST`,
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                name:name,
                sales:sales,
                profits:profits,
                time:time
            })
        })
        .then(res=>{
            if(res.ok) {
                console.log(`Data succesfully sent`);
            } else {
                console.log(`Error sending data ${res.status}`);
            }
        })
    }

    function filterTable(e) {
        console.log(e.target.value);
    }
    return(
        <div>
            <input type="text" placeholder="search" onChange={filterTable}/>
            <button onClick={handleClick}>add</button><br/>
            {modal && 
            <>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="name" value={name} onChange={e=>setName(e.target.value)}/>
                    <input type="number" placeholder="sales" value={sales} onChange={e=>setSales(e.target.value)}/>
                    <input type="number" placeholder="profits" value={profits} onChange={e=>setProfits(e.target.value)}/>
                    <input type="number" max="100" placeholder="time" value={time} onChange={e=>setTime(e.target.value)}/>
                    <button type="submit">Add</button>
                </form>
            </>
            }
        </div>
    );
}

function Table({people}) {
    async function deleteEmployee(id) {
        let response = await fetch(`http://localhost:4000/delete-employee/${id}`, {
            method:`DELETE`
        });
        response.ok ? console.log(`Deleted employee ${id}`) : console.log(`Error deleting employee: ${response}`);
    }
    return(
        <>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Total sales</th>
                    <th>Total profits</th>
                    <th>Time with company</th>
                </tr>
                
                {people.map((person)=>{
                    return(
                        <tr key={person.id}>
                            <td>
                                {person.name}
                            </td>
                            <td>
                                {person.sales}
                            </td>
                            <td>
                                {person.profits}
                            </td>
                            <td>
                                {person.time}
                            </td>
                            <td>
                                <button href="#" onClick={()=>deleteEmployee(person.id)}>Delete</button>
                            </td>
                        </tr>
                    );
                })}
            </table>
        </>
    );
}

export {SearchBar, Table};