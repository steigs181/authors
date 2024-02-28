import React, { useEffect, useState} from 'react'
import { BrowserRouter, Router, Route, Link } from 'react-router-dom'
import axios from 'axios'

const DisplayAll = () => { 
    const [allAuthors, setAllAuthors] = useState([])
    useEffect( () => {
        axios.get("http://localhost:8000/api/getAllAuthors")
            .then( (res) => {
                console.log(res);
                setAllAuthors(res.data);
            })
            .catch( (err) => {
                console.log(err.res)
            })
    }, [])
    const handleDelete = (idOfAuthor) =>{
        axios.delete(`http://localhost:8000/api/deleteAuthor/${idOfAuthor}`)
            .then( (res) => {
                console.log("Successfully deleted Author");
                console.log( res );
                const newListOfAuthors = allAuthors.filter( (author) => {
                    return (author._id !== idOfAuthor)
                });
                setAllAuthors(newListOfAuthors);
            })
            .catch ( (err) => {
                console.log(" There was an error deleting the author", err.res);
            })
    }
    
  return (
    <div>
        <h1>FAVORITE AUTHORS!</h1>
        <Link to="/new" >Add a new author</Link>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allAuthors.map((author, idx) => {
                            return(
                                <tr key={author._id}>
                                    <td>{author.name}</td>
                                    <td>
                                        <Link to={`/edit/${author._id}`}><button>Edit</button></Link>
                                        <button onClick={ () => handleDelete(author._id)}>DELETE</button>
                                    </td>
                                    

                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>

    </div>
  )
}

export default DisplayAll