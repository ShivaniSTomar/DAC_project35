import React from 'react'
import './Footer.css';

export default function Footer(props) {
  return (
    <div>
      <p className="footer">&copy; copyright 2024 by {props.name}</p>
    </div>
  )
}
