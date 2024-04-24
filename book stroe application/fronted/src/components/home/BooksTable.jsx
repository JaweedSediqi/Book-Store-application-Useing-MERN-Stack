import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const BooksTable = ({ books }) => {
  return (
    <table className=' w-100  '>
      <thead>
        <tr>
          <th className='border border-slate-600 rounded-md p-2 ' style={{textAlign:"center"}}>No</th>
          <th className='border border-slate-600 rounded-md p-4'>Title</th>
          <th className='border border-slate-600 rounded-md max-md:hidden p-3' style={{textAlign:"center"}}>
            Author
          </th>
          <th className='border border-slate-600 rounded-md max-md:hidden ' style={{textAlign:"center"}}>
            Publish Year
          </th>
          <th className='border border-slate-600 rounded-md p-4' style={{textAlign:"center"}}>Operations</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={book._id} className='h-8'>
            <td className='border border-slate-700 rounded-md text-center'>
              {index + 1}
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
              {book.title}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {book.author}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {book.publishYear}
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
              <div className='d-flex justify-content-center gap-3'>
                <Link to={`/books/details/${book._id}`}>
                  <BsInfoCircle className='text-2xl text-green-800' />
                </Link>
                <Link to={`/books/edit/${book._id}`}>
                  <AiOutlineEdit className='text-2xl text-yellow-600' />
                </Link>
                <Link to={`/books/delete/${book._id}`}>
                  <MdOutlineDelete className='text-2xl text-red-600' />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default BooksTable;


