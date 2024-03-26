import React, { useState, useEffect } from 'react';
import { useApi } from '../../hooks/useApi';

export default function SearchBar() {
    const items = useApi('https://v2.api.noroff.dev/online-shop');
    const [searchInput, setSearchInput] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleChange = (event) => {
        setSearchInput(event.target.value);
    }

    useEffect(() => {
        const results = items.data.filter((item) => item.title.toLowerCase().includes(searchInput.toLowerCase())
        );
        setSearchResults(results);
    }, [searchInput, items.data]);

    return (
        <div>
            <label>Search</label>
            <input
            type='search'
            value={searchInput}
            placeholder='Start typing to search...'
            onChange={handleChange}
            />
            {searchInput && searchResults.length && searchResults.map((item) => <div key={item.id}>{item.title}</div>)}
        </div>
    )
}