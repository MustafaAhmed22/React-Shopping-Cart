import React from 'react'

export default function Header(props){
return (
    <header className='row block center'>
        <div className='font'>
                <a href='#/'>
                 My Shopping Cart
                </a>
        </div>
        <div>
            <a href= '#/cart'>Cart</a> <a href= '#/signin'>SignIn</a>

        </div>
    </header>
)
}