import { Link } from 'react-router-dom'
import { AiOutlineEdit } from "react-icons/ai"
import { BsInfoCircle } from "react-icons/bs"
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md"
const BooksTable = ({ books }) => {
    return (
        <table className="w-full border-separate border-spacing-2">
            <thead>
                <tr>
                    <th className='border border-black rounded-md text-center'>No</th>
                    <th className='border border-black rounded-md text-center'>Book</th>
                    <th className='border border-black rounded-md text-center max-md:hidden'>Author</th>
                    <th className='border border-black rounded-md text-center max-md:hidden'>Year</th>
                    <th className='border border-black rounded-md text-center'>Operations</th>
                </tr>
            </thead>
            <tbody>
                {books.map((book, index) => (
                    <tr key={book._id} className='h-8'>
                        <td className='border border-black rounded-md text-center'>{index + 1}</td>
                        <td className='border border-black rounded-md text-center'>{book.title}</td>
                        <td className='border border-black rounded-md text-center max-md:hidden'>{book.author}</td>
                        <td className='border border-black rounded-md text-center max-md:hidden'>{book.year}</td>
                        <td className='border border-black rounded-md text-center'>
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
    )
}

export default BooksTable