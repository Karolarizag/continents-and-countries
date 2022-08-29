import { useQuery } from '@apollo/client';
import { useState } from 'react';
import  LIST_COUNTRIES  from '../Services/index'

const Home = () => (

  const [country, setCountry] = useState('US');
  const {data, loading, error} = useQuery(LIST_COUNTRIES, {client});

  if (loading || error) {
    return <p>{error ? error.message : 'Loading...'}</p>;
  }

  return (
    <select value={country} onChange={event => setCountry(event.target.value)}>
      {data.countries.map(country => (
        <option key={country.code} value={country.code}>
          {country.name}
        </option>
      ))}
    </select>
  );

);

export default Home;