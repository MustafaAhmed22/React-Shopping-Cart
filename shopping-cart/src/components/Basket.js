import React from 'react'

export default function Baskit(props){
const {cartitems ,onAdd ,onRemove} =props
const itemprice =cartitems.reduce((a,c)=>a+c.price*c.qty ,0)
const taxprice =itemprice * .14
const shippingprice = itemprice >2000 ?0 :50
const totalprice = itemprice +taxprice

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
        {cartitems.length !==0 &&(
            <>
            <hr></hr>
            <div className='row'>
                <div className='col-2'>Items Price</div>
                <div className='col-1 text-right'>${itemprice}</div>
            </div>
            <div className='row'>
                <div className='col-2'>Tax Price</div>
                <div className='col-1 text-right'>${taxprice.toFixed(2)}</div>
            </div>
            <div className='row'>
                <div className='col-2'>Shipping Price</div>
                <div className='col-1 text-right'>${shippingprice}</div>
            </div>
            <div className='row'>
                <div className='col-2'>Total Price</div>
                <div className='col-1 text-right'>${totalprice.toFixed(2)}</div>
            </div>
            <hr></hr>
            <div className='row'>
                <button onClick={()=>alert(`implement checkout :$${totalprice.toFixed(2)}` )}>
                    Checkout 
                </button>
            </div>
            </>
        )}

    </aside>
)
}