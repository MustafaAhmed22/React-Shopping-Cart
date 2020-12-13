import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import Basket from './components/Basket'

function App() {
  return (
    <div className="App">
        <Header />
        <div>
        <Main />
        <Basket />
        </div>
       
    </div>
  );
}

export default App;
