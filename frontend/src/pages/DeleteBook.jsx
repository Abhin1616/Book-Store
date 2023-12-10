import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import LoadingSpinner from '../components/LoadingSpinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
const DeleteBook = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();
    const handleDeleteBook = () => {
        setLoading(true)
        axios.delete(`http://localhost:3000/bookstore/${id}`)
            .then((res) => {
                setLoading(false)
                navigate("/")
            })
            .catch((e) => {
                setLoading(false)
                console.log(e)
            })
    }
    return (
        <div className='p-4'>
            <BackButton />
            <h1 className='text-3xl my-4'>Delete Book</h1>
            {loading && <LoadingSpinner />}
            <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>


                <h3 className='text-2xl'>Are you sure?</h3>

                <button
                    className='p-4 bg-red-600 text-white m-8 w-full'
                    onClick={handleDeleteBook}
                >
                    Yes, Delete it
                </button>
            </div>
        </div>
    )
}

export default DeleteBook