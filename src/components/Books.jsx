import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAppContext } from './context/Context';
import { API_URL } from '../api';
import { Navigate, useNavigate } from 'react-router-dom';

const Books = () => {
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const { favorites, AddToFavorites, RemoveFromFavorites } = useAppContext();
  const navigate = useNavigate();

  const isFavorites = (id) => {
    const boolean = favorites.some((book) => book.id === id);
    return boolean;
  };

  const fetchBooks = (pageNumber) => {
    axios.get(`${API_URL}&_page=${pageNumber}`).then((res) => {
      setBooks(res.data);
    }).catch((err) => {
      console.log(err);
    });
  };

  useEffect(() => {
    fetchBooks(page);
  }, [page]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div className='bg-gray-200'>
      <div className='container mx-auto flex flex-wrap min-h-80vh justify-center'>
      {books.map((book) => (
        <div key={book.id} className='bg-white p-4 rounded-md shadow-xl md:m-10 sm:m-2 m-2'>
          <div className='h-16 flex items-center'>
            <h1 className='text-md font-bold mb-2  w-64'>{book.title}</h1>
          </div>
          <img src={book.image_url} alt="image" className='w-64 h-80 object-cover rounded-md mb-2' onClick={()=>navigate(`/books/${book.id}`)} />
          {isFavorites(book.id) ?
            <button onClick={() => RemoveFromFavorites(book.id)} className='bg-gray-600 text-white p-2 w-full rounded-lg'>Remove From Favorites</button>
            :
            <button onClick={() => AddToFavorites(book)} className='bg-gray-600 text-white p-2 w-full rounded-lg'>Add to Favorites</button>
          }
        </div>
      ))}
      </div>

      <div className='flex justify-center m-4'>
        <button
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
          className='bg-gray-600 text-white p-2 rounded-lg mr-2'
        >
          Previous Page
        </button>
        <button
          onClick={() => handlePageChange(page + 1)}
          className='bg-gray-600 text-white p-2 rounded-lg'
        >
          Next Page
        </button>
      </div>
    </div>
  );
};

export default Books;
