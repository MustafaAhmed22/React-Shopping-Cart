import React from 'react'

export default function Product(props) {
    const {product} =props;

    return (
      
        <div className='product-container'>
            
            <img className='small' src={product.image} alt={product.name}></img>
            <h3 >{product.name}</h3>
            <p>$ {product.price}</p>
            <button>Add To Cart</button>
        </div>
    )
}
