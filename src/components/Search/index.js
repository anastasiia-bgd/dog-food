import React, { useEffect, useState  } from 'react';
import './index.css';
import { ReactComponent as CloseSearch } from '../../../public/assets/svg/ic-close-input.svg';

export const Search = ({setQuery }) => {
    const [searchText, setSearchText] = useState('');
    useEffect(() => {
       console.log('UP', searchText); 
       setQuery(searchText)
    },[searchText])
   
    const handleClick = () => {
    
        setSearchText('');
    }

    const handleChange = (e) => {
        setSearchText(e.target.value);
    };

    return (
        <div className='search'>
            <input 
            type='text' 
            placeholder='Поиск' 
            className='search__input' 
            value = {searchText}
            onChange={handleChange}
            />
            <button className='search__btn'> {searchText && <CloseSearch onClick={handleClick} />}</button>
        </div>
    );
};
