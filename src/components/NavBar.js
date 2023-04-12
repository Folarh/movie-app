import {Link} from "react-router-dom"

import HelpIcon from '@mui/icons-material/Help';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';
import WhatshotIcon from '@mui/icons-material/Whatshot';
//styles
import "./NavBar.css"
import React from 'react'

export default function NavBar() {
  return (
    <div className='navbar'>

<div className='recents'>
    <Link to='/'>
    <WhatshotIcon className='icons'/>
    </Link>
    <p>Trending</p>
        </div>
        <div className='recents'>
            <Link to="/movies">
            <HelpIcon className='icons'/>
            </Link>
           <p>Movies </p>
        </div>
        <div className='recents'>
        <Link to="/series">
        <FavoriteIcon className='icons'/>
        </Link>
            <p>Tv Series</p>
        </div>
        <div className='recents'>
        <Link to="/search">
        <SearchIcon className='icons'/>
        </Link>
       <p>Search</p>
        </div>
      
    </div>
  )
}

