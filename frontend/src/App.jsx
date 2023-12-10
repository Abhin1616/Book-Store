import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CreateBook from './pages/CreateBook'
import ShowBook from './pages/ShowBook'
import EditBook from './pages/EditBook'
import DeleteBook from './pages/DeleteBook'
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/bookStore/create' element={<CreateBook />} />
      <Route path='/bookStore/details/:id' element={<ShowBook />} />
      <Route path='/bookStore/edit/:id' element={<EditBook />} />
      <Route path='/bookStore/delete/:id' element={<DeleteBook />} />
    </Routes>
  )
}

export default App