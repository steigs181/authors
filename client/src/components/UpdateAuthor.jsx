import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

const UpdateAuthor = () => {
    const {id} = useParams();
    const [author, setAuthor] = useState("");
    const [error, setError] = useState({});
    const [notFound, setNotFound] = useState("");
    useEffect( () => {
        axios.get(`http://localhost:8000/api/getOneAuthor/${id}`)
            .then( (res) => {
                console.log(res.data)
                setAuthor(res.data.author.name)
            })
            .catch( (err) => {
                console.log(err)
                setError(err.res)
                setNotFound(`Author not found`)
            });
    }, [])
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.patch(`http://localhost:8000/api/updateAuthor/${id}`, { name: author})
            .then( (res) => {
                console.log(res)
            })
            .catch( err => {
                console.log(err.res.data.err.errors)
                setError(err.res.data.err.errors)
            })
    }
  return (
    <div>
        <form onSubmit={ handleSubmit }>
            {
                notFound ? (
                    <p> {notFound} <Link to="/new" >Click here to add a new author </Link> </p> ) : null
            }
            <h1>Add a new author</h1>
            <Link to="/">Home</Link>
            <div>
                <label>Name: </label>
                <input type="text"  id="author" value={author} onChange={ (e) => setAuthor(e.target.value)} />
                <button>SUBMIT</button>
            </div>

        </form>
    </div>
  )
}

export default UpdateAuthor