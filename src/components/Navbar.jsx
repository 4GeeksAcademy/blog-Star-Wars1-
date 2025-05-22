import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark mb-4">
      <div className="container">
        <Link to="/" className="navbar-brand">Star Wars App</Link>
        <div className="navbar-nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/favorites" className="nav-link">Favorites</Link>
        </div>
      </div>
    </nav>
  );
};