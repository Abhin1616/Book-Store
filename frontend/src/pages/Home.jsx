import React, { useEffect, useState } from 'react'
import axios from "axios"
import LoadingSpinner from '../components/LoadingSpinner'
import { Link } from 'react-router-dom'
import { AiOutlineEdit } from "react-icons/ai"
import { BsInfoCircle } from "react-icons/bs"
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md"
const Home = () => {
    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(false)
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
            <div className='flex justify-between items-center'>
                <h1 className='text-3xl my-8'>Book Store</h1>
                <Link to='/bookStore/create'>
                    <MdOutlineAddBox className='text-sky-800 text-4xl' />
                </Link>
            </div>
            {loading ? (
                <LoadingSpinner />
            ) : (
                <table className="w-full border-seperate border-spacing-2">
                    <thead>
                        <tr>
                            <th className='border border-slate-600 rounded-md text-center'>No</th>
                            <th className='border border-slate-600 rounded-md text-center'>Book</th>
                            <th className='border border-slate-600 rounded-md text-center max-md:hidden'>Author</th>
                            <th className='border border-slate-600 rounded-md text-center max-md:hidden'>Year</th>
                            <th className='border border-slate-600 rounded-md text-center'>Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map((book, index) => (
                            <tr key={book._id} className='h-8'>
                                <td className='border border-slate-600 rounded-md text-center'>{index + 1}</td>
                                <td className='border border-slate-600 rounded-md text-center'>{book.title}</td>
                                <td className='border border-slate-600 rounded-md text-center max-md:hidden'>{book.author}</td>
                                <td className='border border-slate-600 rounded-md text-center max-md:hidden'>{book.year}</td>
                                <td className='border border-slate-600 rounded-md text-center'>
                                    <div className='flex justify-center gap-x-4'>
                                        <Link to={`/bookStore/details/${book._id}`}>
                                            <BsInfoCircle className='text-2xl text-green-800' />
                                        </Link>
                                        <Link to={`/bookStore/edit/${book._id}`}>
                                            <AiOutlineEdit className='text-2xl text-yellow-800' />
                                        </Link>
                                        <Link to={`/bookStore/delete/${book._id}`}>
                                            <MdOutlineDelete className='text-2xl text-red-800' />
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            )}
        </div >
    )
}

export default Home