import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import Basket from './components/Basket'
import data from './components/data'
import { useState } from 'react';
function App() {
  const [cartitems ,setcartitems] =useState([]) ;
  const {products} =data
  const onAdd =(product)=>{
    const exist =cartitems.find(x =>x.id === product.id)
    if(exist){
      setcartitems(
        cartitems.map(x =>x.id === product.id ?{...exist ,qty :exist.qty+1} :x)
      )

    }else{
      setcartitems([...cartitems,{...product,qty :1}])
    }
  }
  const onRemove = (product) => {
    const exist = cartitems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setcartitems(cartitems.filter((x) => x.id !== product.id));
    } else {
      setcartitems(
        cartitems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  }
  return (
    <div className="App">
        <Header countcartitems ={cartitems.length}/>
        <div className='row'>
        <Main onAdd ={onAdd} products ={products}/>
        <Basket onAdd={onAdd}
        onRemove ={onRemove}
         cartitems ={cartitems}/>
        </div>
       
    </div>
  );
}

export default App;
