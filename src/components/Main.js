import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from './Table';

function Main() {
    const [users, setUsers] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        getRandomUsers()
    },
        []);

    async function getRandomUsers() {
        const result = await axios.get('https://randomuser.me/api/?results=30&seed=seed')
        setUsers(result.data.results)
    };

    function getSearchResults() {
        console.log('Searching...: ', search)
        const searchedUser = users.filter(user => search.indexOf(user.name.first) > -1 || search.indexOf(user.name.last) > -1)
        console.log(searchedUser)
        setUsers(searchedUser)
    };

    function clearSearch() {
        setSearch("")
        getRandomUsers()
    };

    function handleInputChange(event) {
        setSearch(event.target.value)
        console.log(event.target.value)
    };

    function handleFormSubmit(event) {
        event.preventDefault()
        getSearchResults()
    };

    function sortNumber() {
        console.log('Items are being sorted!')
        const sorted = users.sort(function (item1, item2) {
            if (item1.phone < item2.phone) {
                return -1
            }
            if (item1.phone > item2.phone) {
                return 1
            }
            return 0
        })
        console.log('Sorted List: ', sorted)
        setUsers([...sorted])
    }

    function sortEmail() {
        console.log('Items are being sorted!')
        const sorted = users.sort(function (item1, item2) {
            if (item1.email < item2.email) {
                return -1
            }
            if (item1.email > item2.email) {
                return 1
            }
            return 0
        })
        console.log('Sorted List: ', sorted)
        setUsers([...sorted])
    };

    return (
        <div className="container" style={{ marginTop: "20px", marginBottom: "20px" }}>
            <div className="input-group mb-3 float-center">
                <input value={search} onChange={handleInputChange} type="text" className="form-control" placeholder="Search for an Employee by Name" aria-label="Username" aria-describedby="button-addon2" />
                <button className="btn btn-outline-danger" onClick={clearSearch}><i class="fas fa-window-close"></i>
                </button>
                <button onClick={handleFormSubmit} className="btn btn-outline-primary" type="submit" id="button-addon2">Search
            </button>
            </div>
            <div style={{ display: "flex", justifyContent: "center", margin: "auto", color: "#b3b3ff" }}>
                <p><small>Hover to the right of Phone Number or Email to Sort😊</small></p>
            </div>
            <Table list={users} sortEmail={sortEmail} sortNumber={sortNumber} />

        </div>
    );
}

export default Main;