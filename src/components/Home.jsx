import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API_URL } from '../api'
const Home = () => {

  const [books,setBooks]=useState([])

  useEffect(()=>{
    axios.get(API_URL).then(res => {
      console.log(res.data)
      setBooks(res.data)
    }).catch(err =>{
      console.log(err)
    })
  }, [])
  return (
<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 min-h-80vh justify-items-center bg-gray-500'>
  {books.map((book) => (
    <div key={book.id} className='bg-white p-4 rounded-md'>
      <h1 className='text-xl font-bold mb-2 w-64'>{book.title}</h1>
      <img src={book.image_url} alt="image" className='w-64 h-200 object-cover rounded-md mb-2' />
      {/* Add other book details or components here */}
      <button className='bg-gray-600 text-white p-2 w-full'>Add to cart</button>
    </div>
  ))}
</div>

  )
}

export default Home
