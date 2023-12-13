import React, { useEffect, useState } from 'react'
import axios from "axios"
import LoadingSpinner from '../components/LoadingSpinner'
import { Link } from 'react-router-dom'
import { AiOutlineEdit } from "react-icons/ai"
import { BsInfoCircle } from "react-icons/bs"
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md"
import BooksTable from '../components/home/BooksTable'
import BooksCard from '../components/home/BooksCard'
const Home = () => {
    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(false)
    const [showType, setShowtype] = useState("table")
    useEffect(() => {
        setLoading(true)
        axios.get("http://localhost:3000/bookstore")
            .then((res) => {
                setBooks(res.data)
                setLoading(false)
            })
            .catch((e) => {
                console.log(e)
                setLoading(false)
            })
    }, [])
    return (
        <div className='p-4'>
            <div className='flex justify-center items-center gap-x-4'>
                <button className='bg-sky-300 hover:bg-sky-600 pv-4 py-1 px-3 rounded-lg' onClick={() => { setShowtype("table") }}>Table</button>
                <button className='bg-sky-300 hover:bg-sky-600 pv-4 py-1 px-3 rounded-lg' onClick={() => { setShowtype("card") }}>Card</button>
            </div>
            <div className='flex justify-between items-center'>
                <h1 className='text-3xl my-8'>Book Store</h1>
                <Link to='/bookStore/create'>
                    <MdOutlineAddBox className='text-sky-800 text-4xl' />
                </Link>
            </div>
            {loading ? (
                <LoadingSpinner />
            ) : (
                showType === "table" ? <BooksTable books={books} /> : <BooksCard books={books} />
            )}
        </div >
    )
}

export default Home