import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {
    const [userdata, setuserdata] = useState([])
    const [error, seterror] = useState("")
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users').catch(e => seterror("Error WHile fatching data"))
            .then(response => response.json())
            .then(data => setuserdata(data))
    }, [])


    return (
        <div>
            Welcome Home <br />
            <Link to="/">
                Log Out</Link>
            <br />
            <br />
            {userdata.length > 0 &&
                <table border={2}>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>username</th>
                        <th>email</th>
                        <th>website</th>
                    </tr>
                    {userdata.map(item => <tr>
                        <th>{item.id}</th>
                        <th>{item.name}</th>
                        <th>{item.username}</th>
                        <th>{item.email}</th>
                        <th>{item.website}</th>

                    </tr>)}
                </table>}
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    )
}

export default Home
