import React, { useState, useEffect } from 'react';
import * as libraryService from '../services/LibraryService'
import { Link } from 'react-router-dom';
const Library = () => {
    const [libraryList, setLibraryList] = useState([]);

    const getAll = async () => {
        const result = await libraryService.getAll();
        console.log(result)
        setLibraryList((prev) => result);
    }

    useEffect(() => {
        getAll();
    }, [])

    const deleteBook = async (id) => {
        const status = await libraryService.deleteBookById(id);
        alert(status === 200 ? 'delete success' : 'delete failed')
        getAll();
    }
    return (
        <>
            <h1>Library</h1>
            <Link to={`/create`}>Create</Link>
            <table border={1} style={{ borderCollapse: 'collapse ' }}>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Quantity</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {libraryList.map((book, index) => (
                        <tr key={index}>
                            <td>{book.title}</td>
                            <td>{book.quantity}</td>
                            <td><Link to={`/edit/${book.id}`}>Edit</Link></td>
                            <td><button onClick={() => deleteBook(`${book.id}`)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Library;