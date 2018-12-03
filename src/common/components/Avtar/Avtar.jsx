import React from 'react'
import './Avtar.css'

export const Avtar = (props) => {
  console.log("pp:", props)
  return (
    <div>
      <img src={props.img && props.img} alt="Avatar" class="avatar" />
    </div>
  )
}
