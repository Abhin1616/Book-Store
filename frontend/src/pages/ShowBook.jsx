import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'
import LoadingSpinner from '../components/LoadingSpinner'
const ShowBook = () => {
    const [book, setBook] = useState({})
    const [loading, setLoading] = useState(false)
    const { id } = useParams();
    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:3000/bookstore/${id}`)
            .then((res) => {
                setBook(res.data)
                setLoading(false)

            }).catch((e) => {
                console.log(e)
                setLoading(false)
            })

    }, [])
    return (
        <div className='p-4'>
            <BackButton />
            <h1 className='text-3xl my-4'>Show Book</h1>
            {loading ? (
                <LoadingSpinner />
            ) : (
                <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>Title</span>
                        <span>{book.title}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>Author</span>
                        <span>{book.author}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>Publish Year</span>
                        <span>{book.year}</span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ShowBook