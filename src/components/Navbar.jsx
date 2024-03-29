import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <header className="text-gray-600 body-font h-10vh flex">
        <div className="container mx-auto flex flex-wrap p-5 flex-col sm:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl">Tailblocks</span>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <Link to={"/"}>
              <a className="mr-5 hover:text-gray-900">Home</a>
            </Link>
            <Link to={"/books"}>
              <a className="mr-5 hover:text-gray-900">Books</a>
            </Link>
          </nav>
          <Link to={"/favorites"}>
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">My Favorites
          </button>
          </Link>
        </div>
      </header>
    </div>
  )
}

export default Navbar
