import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

function Home() {
    const [users, setUsers] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8080/user");
        setUsers(result.data);
    };

    const deleteUser = async (id)=>{
         await axios.delete(`http://localhost:8080/user/${id}`);
         loadUsers();
    }

    return (
        <div className="container mx-auto p-4">
            {users.map((user, index) => (
                <div key={index} className="flex justify-between items-center p-4 border-b border-gray-300">
                    <div className="flex flex-col gap-2">
                        <h2 className="font-bold text-lg">{user.name}</h2>
                        <p className="text-gray-600">@{user.username}</p>
                        <p className="text-gray-500">{user.email}</p>
                    </div>
                    <div className="flex gap-4">
                        <button className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600">View</button>
                        <Link className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" to={`/editUser/${user.id}`}>Update</Link>
                        <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600" onClick={()=>deleteUser(user.id)}>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Home;
