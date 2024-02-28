import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import AuthorForm from './components/AuthorForm'
import DisplayAll from './components/DisplayAll'
import UpdateAuthor from './components/UpdateAuthor'
import './App.css'

function App() {



  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<DisplayAll />} />
          <Route path="/new" element={<AuthorForm />} />
          <Route path="/edit/:id" element={<UpdateAuthor />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
