import React, { useState, useContext } from 'react'; // Import useContext
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './Navbar.css';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';

function Navbar() {
  const [visible, setVisible] = useState(false); // State for sidebar visibility
  const { setShowSearch,getCartCount } = useContext(ShopContext); // Use useContext to access context

  return (
    <div className='navbar'>
      <h2 className='logo'>FOREVER</h2>
      <ul className='navlist'>
        <Link to='/'><li>Home</li></Link>
        <Link to='/collections'><li>COLLECTION</li></Link>
        <Link to='/about'><li>ABOUT</li></Link>
        <Link to='/contact'><li>CONTACT</li></Link>
      </ul>
      <div className='navleft'>
        <SearchIcon onClick={() => setShowSearch(true)} />
        <div className='group-nav'>
         <Link to='/login'><img src={assets.profile_icon} alt="" className='img' /></Link> 
          <div className='group-dropdown'>
            <section className='dropdown-section'>
              <option>My Profile</option>
              <option>Orders</option>
              <option>Logout</option>
            </section>
          </div>
        </div>
        <Link to='/cart'>
          <LocalMallIcon className='localIcon' /><p className='cart-count'>{getCartCount()}</p>
        </Link>
        <MenuIcon onClick={() => setVisible(true)} className='menuicon' />
      </div>

      {/** Sidebar menu for small screens */}
      <div className='overflow-hidden' style={{ width: visible ? '100%' : '0' }}>
        <div className='flex-back'>
          <div className='back-dropdown' onClick={() => setVisible(false)}>
            <ArrowBackIcon />
            <p>Back</p>
          </div>

          <Link onClick={() => setVisible(false)} to='/home'>Home</Link>
          <Link onClick={() => setVisible(false)} to='/collection'>Collection</Link>
          <Link onClick={() => setVisible(false)} to='/about'>About</Link>
          <Link onClick={() => setVisible(false)} to='/contact'>Contact</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
