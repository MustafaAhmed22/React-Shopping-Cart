import React from 'react'

export default function Header(props){
    const {countcartitems} =props
return (
    <header className='row block center'>
        <div className='font'>
                <a href='#/'>
                 My Shopping Cart
                </a>
        </div>
        <div>
            <a href= '#/cart'>
                
                Cart {' '}
                {countcartitems ? (
                    <button className='badge'>{countcartitems}</button>
                ): ('' 
                )}
            
            </a> {' '}
            
            <a href= '#/signin'>SignIn</a>

        </div>
    </header>
)
}