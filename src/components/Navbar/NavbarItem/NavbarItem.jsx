import React from 'react'
import './NavbarItem.css'

const NabvarItem = (props) => {
    const {name, href} = props
  return (
    <li className='liItem nav-item'><a className="nav-link active" aria-current="page" href={href} target="_blank">{name}</a></li>
  )
}

export default NabvarItem