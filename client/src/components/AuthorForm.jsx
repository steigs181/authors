import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const AuthorForm = (props) => {
    const [ name, setName ] = useState("");
    const [ errors, setErrors ] = useState("")
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:8000/api/createAuthor", {name})
            .then( (res) => {
                console.log( res )
                navigate("/");
            })
            .catch( (err) => {
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors);
            })
    }




  return (
    <div>
        <h1>Favorite Author</h1>
        <Link to="/">Home</Link>
        <div>
            <p>Add a new Author:</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name: </label>
                    {errors.name ? <p>{errors.name.message}</p>: null}
                    <input type="text" name="name" onChange={(e) => { setName(e.target.value)}} />
                </div>
                <button>Cancel</button> 
                <button>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default AuthorForm