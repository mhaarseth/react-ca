import React from 'react';
import { useApi } from '../../hooks/useApi';
import { Link } from 'react-router-dom';
import { apiUrl } from '../../constants/constants';
import SearchBar from '../../components/SearchBar/SearchBar';
import styles from './Home.module.css'


function Home() {
    const { data, isLoading, isError } = useApi(apiUrl);

    if(isLoading) {
      return <div>Loading...</div>
    }
    if (isError) {
      return <div>Error loading data</div>
    }
   
    return (
      <div className={styles.products}>
        <div className={styles.productsHeadingContainer}>
        <h1 className={styles.productsHeading}>Products</h1>
        <SearchBar className={styles.searchBar}/>
        </div>
        <div className={styles.container}>
        {data.map((product) => (
            <div className={styles.card}key={product.id}>
              <h2>{product.title}</h2>
              <div className={styles.imgContainer}>
              <img src={product.image.url} alt={product.image.alt}/>
              </div>
              <Link to={`/product/${product.id}`} className={styles.button}>View product</Link>
            </div>
      ))}
      </div>
    </div>
    )
  }

export default Home;