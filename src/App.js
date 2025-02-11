import logo from './logo.svg';
import './App.css';
import Home from './Home';
import About from './About';

function App() {

  let x=prompt("enter text:")

  return (
    <div className='nav'>
      
      <Home text={x}></Home>
      <About></About>

    </div>
  )
}

export default App;
