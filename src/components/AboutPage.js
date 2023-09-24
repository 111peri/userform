import React, { useState } from 'react';

export function AboutPage() {
    const [users, setUsers] = useState([]);
    const [aboutUser, setAboutUser] = useState({
        name: "",
        lastname: "",
        age: "",
        status: false
    });

    const inputUserName = (event) => {
        const { name, value } = event.target;
        setAboutUser({ ...aboutUser, [name]: value });
    };

    const toggleStatus = () => {
        setAboutUser({ ...aboutUser, status: !aboutUser.status });
    };

    const addUser = () => {
        if (
            aboutUser.name &&
            aboutUser.lastname &&
            aboutUser.age &&
            aboutUser.status !== undefined
        ) {
            setUsers([...users, aboutUser]);
            setAboutUser({
                name: "",
                lastname: "",
                age: "",
                status: false
            });
        }
    };

    return (
        <div>
            <form>
                <h1>About User</h1>
                <input type="text" placeholder="Name" name="name" value={aboutUser.name} onChange={inputUserName} />

                <input type="text" placeholder="Lastname" name="lastname" value={aboutUser.lastname} onChange={inputUserName} />
                <input type="number" placeholder="Age" name="age" value={aboutUser.age} onChange={inputUserName} />
                <label onClick={toggleStatus}>Are you married?
                    <input type="checkbox" name="status" checked={aboutUser.status} onChange={toggleStatus} />
                </label>
                <button type="button" onClick={addUser}>Add User</button>
            </form>

            <div>
                <h2>List of Users</h2>
                <ul>
                    {users.map((user, index) => (
                        <li key={index}>
                            Name: {user.name}, Lastname: {user.lastname}, Age: {user.age}, Status: {user.status ? "Married" : "Single"}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
