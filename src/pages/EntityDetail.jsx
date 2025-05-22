import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getEntityDetails } from '../services/starWars';

const EntityDetail = () => {
  const { type, id } = useParams();
  const [entity, setEntity] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getEntityDetails(type, id);
        setEntity(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [type, id]);

  if (loading) return <div className="text-center mt-5">Loading...</div>;
  if (!entity) return <div className="alert alert-danger mt-5">Data not found</div>;

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header bg-dark text-white">
          <h2>{entity.name}</h2>
        </div>
        <div className="card-body">
          {Object.entries(entity).map(([key, value]) => (
            key !== 'name' && (
              <p key={key}>
                <strong>{key.replace('_', ' ').toUpperCase()}:</strong> {value}
              </p>
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default EntityDetail;