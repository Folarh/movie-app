import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <div className='header'onClick={()=>window.scroll(0,0)}>
      <h1>Movie-app</h1>
    </div>
  )
}
