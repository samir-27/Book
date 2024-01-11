import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import { BOOK_URL } from '../api'

const BookDetails = () => {
  const [book, setBook] = useState({})
  const { id } = useParams()
  useEffect(() => {
    axios.get(`${BOOK_URL}/${id}`)
      .then(res => {
        setBook(res.data)
      }).catch(err => console.log(err))
  }, [id])
  return (
<div>
  <section className="text-gray-800 body-font h-90vh overflow-hidden bg-gray-200">
    <div className="container px-5 py-24 mx-auto">
      <div className="lg:w-4/5 mx-auto flex flex-wrap items-center">
        <img
          alt="ecommerce"
          className="lg:w-1/2 w-full h-108 object-contain"
          src={book?.image_url}
        />
        <div className="lg:w-1/2 lg:text-left text-center w-full p-10 lg:py-6 mt-6 lg:mt-0">
          <h2 className="text-xs  text-indigo-500 tracking-widest uppercase">Author: {book?.authors}</h2>
          <h1 className="text-4xl text-gray-900 font-bold mb-4">{book?.title}</h1>
          <p className="text-gray-700 leading-relaxed mb-6">{book?.description}</p>
          <h3 className="text-lg text-indigo-700 font-semibold mb-4">Genres: {book?.genres}</h3>
        </div>
      </div>
    </div>
  </section>
</div>


  )
}

export default BookDetails
