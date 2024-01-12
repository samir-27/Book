import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <div className='relative bg-slate-900 h-90vh'>
        <div className="absolute inset-0 bg-cover bg-no-repeat opacity-30" style={{ backgroundImage: 'url(https://i0.wp.com/dailycampus.com/wp-content/uploads/2022/11/pexels-element-digital-1370295.jpg?fit=5931%2C3959&ssl=1)' }}></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className='text-white lg:text-4xl md:text-2xl text-xl text-center tracking-wider lg:leading-12 md:leading-10 mx-12 md:mx-24 lg:mx-48'>
            Books are timeless portals to knowledge, libraries are sacred repositories of collective wisdom, and book websites open virtual doors to boundless literary exploration.
          </h1>

            <Link to={'/books'}>
          <button className="mt-4 rounded-lg px-4 py-2 border-2 border-white text-white hover:bg-white hover:text-gray-600 hover:border-gray-600">
            Go To Books
          </button>
            </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
