import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCharacterDetails } from '../services/starWars';

const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCharacterDetails(id);
        setCharacter(data);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) return <div className="text-center mt-5">Loading...</div>;
  if (!character) return <div className="alert alert-danger mt-5">Character not found</div>;

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header bg-dark text-white">
          <h2>{character.name}</h2>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <p><strong>Height:</strong> {character.height} cm</p>
              <p><strong>Mass:</strong> {character.mass} kg</p>
              <p><strong>Hair Color:</strong> {character.hair_color}</p>
            </div>
            <div className="col-md-6">
              <p><strong>Birth Year:</strong> {character.birth_year}</p>
              <p><strong>Gender:</strong> {character.gender}</p>
              <p><strong>Eye Color:</strong> {character.eye_color}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;