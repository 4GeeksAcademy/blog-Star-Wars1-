import { useState, useEffect } from 'react';
import { getEntities } from '../services/starWars';
import { EntityCard } from '../components/EntityCard';

const Home = () => {
  const [activeTab, setActiveTab] = useState('people');
  const [entities, setEntities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const data = await getEntities(activeTab);
        setEntities(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [activeTab]);

  return (
    <div className="container mt-4">
      <div className="btn-group mb-4">
        {['people', 'planets', 'vehicles'].map(type => (
          <button
            key={type}
            className={`btn ${activeTab === type ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setActiveTab(type)}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="text-center">
          <div className="spinner-border text-primary"></div>
        </div>
      ) : (
        <div className="row">
          {entities.map(entity => (
            <div key={entity.uid} className="col-lg-4 col-md-6 mb-4">
              <EntityCard entity={entity} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;