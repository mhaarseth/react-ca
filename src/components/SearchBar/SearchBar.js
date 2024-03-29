import React, { useState, useEffect } from 'react';
import { useApi } from '../../hooks/useApi';
import { Link, useNavigate } from 'react-router-dom';

export default function SearchBar() {
    const items = useApi('https://v2.api.noroff.dev/online-shop');
    const [searchInput, setSearchInput] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const navigate = useNavigate();

    const handleChange = (event) => {
        setSearchInput(event.target.value);
    }

    useEffect(() => {
        const results = items.data.filter((item) => item.title.toLowerCase().includes(searchInput.toLowerCase())
        );
        setSearchResults(results);
    }, [searchInput, items.data]);

    useEffect(() => {
        return () => {
            setSearchInput('');
        }
    }, [navigate])

    return (
        <div>
            <input
            type='search'
            value={searchInput}
            placeholder='Start typing to search...'
            onChange={handleChange}
            />
            {searchInput && searchResults.length && searchResults.map((item) => <div key={item.id}><Link to={`/product/${item.id}`}>{item.title}</Link></div>)}
        </div>
    )
}