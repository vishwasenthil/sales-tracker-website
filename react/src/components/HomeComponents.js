import React from "react";

function SearchBar({people, setPeople}) {
    let [modal, setModal] = React.useState(false);
    function handleClick() {
        setModal(!modal);
        setPeople([...people, {name: "bob", totalSales: 1000, totalProfits: 1000, time: 1000}]);
    }
    function handleSubmit() {
        
    }
    return(
        <div>
            <input type="text" placeholder="search"/>
            <button onClick={handleClick}>add</button><br/>
            {modal && 
            <>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="name"/>
                    <input type="number" placeholder="sales"/>
                    <input type="number" placeholder="profits"/>
                    <input type="number" max="100" placeholder="time"/>
                    <button type="submit">Add</button>
                    </form>
            </>
            }
        </div>
    );
}

function Table({people}) {
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
                        <tr>
                            <td>
                                {person.name}
                            </td>
                            <td>
                                {person.totalSales}
                            </td>
                            <td>
                                {person.totalProfits}
                            </td>
                            <td>
                                {person.time}
                            </td>
                        </tr>
                    );
                })}
            </table>
        </>
    );
}

export {SearchBar, Table};