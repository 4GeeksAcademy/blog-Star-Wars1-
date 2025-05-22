const BASE_URL = 'https://www.swapi.tech/api';

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

export const getEntities = async (type) => {
  const data = await fetchData(`${BASE_URL}/${type}`);
  return data?.results?.map(item => ({
    ...item,
    ...item.properties,
    uid: item.uid,
    type: type
  })) || [];
};

export const getEntityDetails = async (type, id) => {
  const data = await fetchData(`${BASE_URL}/${type}/${id}`);
  return {
    ...data?.result?.properties,
    uid: id,
    type: type
  };
};