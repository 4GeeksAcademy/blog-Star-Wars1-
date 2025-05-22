import { Link } from 'react-router-dom';
import { useFavorites } from '../contexts/FavoritesContext';

export const EntityCard = ({ entity }) => {
  const { favorites, dispatch } = useFavorites();
  const isFavorite = favorites.some(fav => fav.uid === entity.uid);

  const renderDetails = () => {
    switch(entity.type) {
      case 'people':
        return <>
          <p><strong>Birth Year:</strong> {entity.birth_year}</p>
          <p><strong>Gender:</strong> {entity.gender}</p>
        </>;
      case 'planets':
        return <>
          <p><strong>Climate:</strong> {entity.climate}</p>
          <p><strong>Terrain:</strong> {entity.terrain}</p>
        </>;
      case 'vehicles':
        return <>
          <p><strong>Model:</strong> {entity.model}</p>
          <p><strong>Manufacturer:</strong> {entity.manufacturer}</p>
        </>;
      default: return null;
    }
  };

  return (
    <div className="card h-100">
      <div className="card-body">
        <h5 className="card-title">{entity.name}</h5>
        {renderDetails()}
      </div>
      <div className="card-footer d-flex justify-content-between">
        <Link 
          to={`/${entity.type}/${entity.uid}`} 
          className="btn btn-primary btn-sm"
        >
          Details
        </Link>
        <button 
          className={`btn btn-sm ${isFavorite ? 'btn-danger' : 'btn-warning'}`}
          onClick={() => dispatch({
            type: isFavorite ? 'REMOVE_FAVORITE' : 'ADD_FAVORITE',
            payload: entity
          })}
        >
          {isFavorite ? '❤️ Remove' : '⭐ Add'}
        </button>
      </div>
    </div>
  );
};