import './App.css';
import BookDetails from './components/BookDetails.jsx';
import Books from './components/Books.jsx';
import Favorites from './components/Favorites.jsx';
import Home from './components/Home.jsx';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
   
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Books' element={<Books />} />
          {/* Define BookDetails and Favorites components and use them here */}
          <Route path='/books/:id' element={<BookDetails />} />
          <Route path='/favorites' element={<Favorites />} />
        </Routes>
      
    </div>
  );
}

export default App;
