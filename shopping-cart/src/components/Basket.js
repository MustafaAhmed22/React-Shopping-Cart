import React from 'react'

export default function Baskit(props){
const {cartitems ,onAdd ,onRemove} =props
return (
    <aside className='block col-1'>
        <h2>Cart Items</h2>
        <div>{cartitems.length ===0 && <div>Cart Is Empty</div>}</div>
        {
            cartitems.map(item =>(
                <div key={item.id} className='row'>
                    <div className='col-2'>{item.name}</div>
                    <div className='col-2'>
                        <button className='add' onClick={()=>onAdd(item)}>+</button>
                        <button className='remove' onClick={()=>onRemove(item)}>-</button>
                    </div>
                    <div className='col-2 text-right'>
                        {item.qty} x ${item.price}
                    </div>
                </div>
            ))
        }
    </aside>
)
}