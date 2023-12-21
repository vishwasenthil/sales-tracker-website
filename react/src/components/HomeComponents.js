function SearchBar({people, setPeople}) {
    function handleClick() {
        setPeople([...people, {name: "bob", totalSales: 1000, totalProfits: 1000, time: 1000}]);
    }
    return(
        <div>
            <input type="text" placeholder="search"/>
            <button onClick={handleClick}>add</button>
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