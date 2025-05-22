import { createContext, useContext, useReducer } from 'react';

const FavoritesContext = createContext();

const favoritesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      if (!state.some(item => item.uid === action.payload.uid)) {
        return [...state, action.payload];
      }
      return state;
    case 'REMOVE_FAVORITE':
      return state.filter(item => item.uid !== action.payload.uid);
    default:
      return state;
  }
};

export const FavoritesProvider = ({ children }) => {
  const [favorites, dispatch] = useReducer(favoritesReducer, []);

  return (
    <FavoritesContext.Provider value={{ favorites, dispatch }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);