import React from 'react';
import { useApi } from '../hooks/useApi';
import { Link } from 'react-router-dom';
import { apiUrl } from '../constants/constants';


function Home() {
    const { data, isLoading, isError } = useApi(apiUrl);

    if(isLoading) {
      return <div>Loading...</div>
    }
    if (isError) {
      return <div>Error loading data</div>
    }
   
    return (
      <div>
        {data.map((product) => (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <img src={product.image.url} alt={product.image.alt}/>
            <Link to={`/product/${product.id}`}>View product</Link>
          </div>
      ))}
    </div>
    )
  }

export default Home;