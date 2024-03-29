import React from 'react'
import { useAppContext } from './context/Context'

const Favorites = () => {

  const { favorites, AddToFavorites, RemoveFromFavorites } = useAppContext()

  console.log(favorites)

  const isFavorites = (id) => {
    const boolean = favorites.some((book) => book.id === id)
    return boolean
  }


  return (
    <div className='bg-gray-200 h-90vh'>
        <div className='container mx-auto flex flex-wrap justify-center'>
      {favorites.length > 0 ? favorites.map((book) => (
        <div key={book.id} className='bg-white p-4 rounded-md shadow-xl md:m-12 sm:m-4 m-2'>
          <div className='h-16 flex items-center'>
            <h1 className='text-md font-bold mb-2  w-64'>{book.title}</h1>
          </div>
          <img src={book.image_url} alt="image" className='w-64 h-80 object-cover rounded-md mb-2' />
          {isFavorites(book.id) ?
            <button onClick={() => RemoveFromFavorites(book.id)} className='bg-gray-600 text-white p-2 w-full rounded-lg'>Remove From Favorites</button>
            :
            <button onClick={() => AddToFavorites(book)} className='bg-gray-600 text-white p-2 w-full rounded-lg'>Add to Favorites</button>
          }
        </div>
      )):<h1>Empty</h1>}
    </div>
    </div>
  )
}

export default Favorites
