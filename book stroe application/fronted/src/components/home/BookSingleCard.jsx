import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle, BiShow } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { useState } from 'react';
import BookModal from './BookModal';

const BookSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);
  return (
   <div className="m-1 col-md-3" style={{border:'1px solid red'}}>
     <div className='  p-4 '>
      <h2 className='  py-1 ' >
        {book.publishYear}
      </h2>
      <h4 className='my-2 text-gray-500'>{book._id}</h4>
      <div className='d-flex align-items-center justify-content-around'>
        <PiBookOpenTextLight style={{fontSize:"30px"}} className='text- text-2xl' />
        <h2 className='my-1'>{book.title}</h2>
      </div>
      <div className='d-flex align-items-center justify-content-around'>
        <BiUserCircle size={'30px'} className='text-red-300 text-2xl' />
        <h2 className='my-1'>{book.author}</h2>
      </div>
      <div className='d-flex justify-content-between align-items-center gap-x-2 mt-4 p-4'>
        <BiShow style={{fontSize:'40px'}}
          className='text-3xl text-blue-800 hover:text-black cursor-pointer'
          onClick={() => setShowModal(true)}
        />
        <Link to={`/books/details/${book._id}`}>
          <BsInfoCircle style={{fontSize:'40px'}} className='text-2xl text-green-800 hover:text-black' />
        </Link>
        <Link to={`/books/edit/${book._id}`}>
          <AiOutlineEdit style={{fontSize:'40px'}} className='text-2xl text-yellow-600 hover:text-black' />
        </Link>
        <Link to={`/books/delete/${book._id}`}>
          <MdOutlineDelete className='text-2xl text-red-600 hover:text-black' style={{fontSize:'40px'}} />
        </Link>
      </div>
      {showModal && (
        <BookModal book={book} onClose={() => setShowModal(false)} />
      )}
    </div>
   </div>
  );
};

export default BookSingleCard;
