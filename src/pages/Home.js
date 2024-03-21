import React from 'react';
import { useApi } from '../hooks/useApi';

function Home() {
    const { data, isLoading, isError } = useApi(
      'https://v2.api.noroff.dev/online-shop',
    );

    if(isLoading) {
      return <div>Loading...</div>
    }
    if (isError) {
      return <div>Error loading data</div>
    }
   
    return (
      <div>
      {data.map((product) => (
        <div>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <img src={product.image.url} alt={product.image.alt}/>
          <button>Add to cart</button>
        </div>
      ))}
    </div>
    )
  }

export default Home;