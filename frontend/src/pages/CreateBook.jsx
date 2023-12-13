import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import LoadingSpinner from '../components/LoadingSpinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { enqueueSnackbar } from 'notistack'
const CreateBook = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [year, setYear] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleSaveBook = () => {
        const data = {
            title, author, year
        }
        setLoading(true)
        axios.post("http://localhost:3000/bookstore", data)
            .then((res) => {
                setLoading(false)
                navigate("/")
                enqueueSnackbar('Successfully Created!', { variant: 'success', autoHideDuration: 1500 })
            })
            .catch((e) => {
                setLoading(false)
                enqueueSnackbar(e.message, { variant: 'error', autoHideDuration: 1500 })
            })
    }
    return (
        <div className='p-4'>
            <BackButton />
            <h1 className='text-3xl my-4'>Create Book</h1>
            {loading && <LoadingSpinner />}
            <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500' htmlFor="">Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className='border-2 border-gray-500 px-4 py-2 w-full' />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500' htmlFor="">Author</label>
                    <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} className='border-2 border-gray-500 px-4 py-2 w-full' />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500' htmlFor="">Published Year</label>
                    <input type="number" value={year} onChange={(e) => setYear(e.target.value)} className='border-2 border-gray-500 px-4 py-2 w-full' />
                </div>
                <button className='p-2 bg-sky-300 m-8' onClick={handleSaveBook}>Create New Book</button>
            </div>
        </div>
    )
}

export default CreateBook