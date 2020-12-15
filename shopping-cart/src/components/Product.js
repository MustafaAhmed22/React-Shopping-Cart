import React from 'react'

export default function Product(props) {
    const {product ,onAdd } =props;

    return (
      
        <div>
            
            <img className='small' src={product.image} alt={product.name}></img>
            <h3 >{product.name}</h3>
            <p>$ {product.price}</p>
            <button onClick={()=>onAdd(product)}>Add To Cart</button>
        </div>
    )
}
