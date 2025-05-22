import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FavoritesProvider } from './context/FavoritesContext';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Favorites from './components/Favorites';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <Router>
      <FavoritesProvider>
        <Navbar />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route 
              path="/favorites" 
              element={<Favorites />} 
              errorElement={<ErrorPage />}
            />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </FavoritesProvider>
    </Router>
  );
}