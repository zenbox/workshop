import React, { useState, useEffect } from "react";

export default function Table() {
    // http-request über fetch
    const receiveRemoteData = async () => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();

        setData(data);
    };

    // State for JSON data
    const [data, setData] = useState<any[]>([]);

    // useEffect bei data-Änderung
    useEffect(() => {
        receiveRemoteData();
    }, [data]);

    // Nextjs: Lokaler Abruf von Daten über das Filesystem möglich
    const getLocalFsData = () => {};

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                {data.map((user) => {
                    return (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.address.city}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}
