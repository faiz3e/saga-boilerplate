import React from 'react'
import './Avtar.css'

export const Avtar = (props) => {
  return (
    <div>
      <img src={props.img && props.img} alt="Avatar" className="avatar" />
    </div>
  )
}
