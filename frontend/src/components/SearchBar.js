import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import './SearchBar.css';
import { useLocation } from 'react-router-dom';

const SearchBar = () => { // Corrected function declaration
    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
    const location=useLocation();
    const [visible,setVisible]=useState(false);

    useEffect(()=>{
        if(location.pathname.includes('collection')){
            setVisible(true);
        }
        else{
            setVisible(false);
        }

    },[location])
    
    return showSearch && visible ? (
        <div className='search-bar'>
            <div className='search-contain'>
                <input 
                    value={search}  
                    onChange={(e) => setSearch(e.target.value)} 
                    placeholder="Search..." // Optional placeholder for better UX
                />
                <img className='search-img' src={assets.search_icon} alt="Search Icon" />
            </div>
            <img className='cross-img'
                onClick={() => setShowSearch(false)} 
                src={assets.cross_icon} 
                alt="Close Icon" 
                style={{ cursor: 'pointer' }} // Optional: change cursor on hover
            />
        </div>
    ): null ; 
}

export default SearchBar;
