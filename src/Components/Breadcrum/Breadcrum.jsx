import React from 'react'
import './Breadcrum.css'

export const Breadcrum = (prod) => {
  prod = prod.product;
  return (
    <div className='breadcrum'>
        HOME &rarr; {prod.category} &rarr; {prod.name} 
    </div>
  )
}
export default Breadcrum

