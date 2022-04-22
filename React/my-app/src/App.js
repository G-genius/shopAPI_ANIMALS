import logo from './logo.svg';
import './App.css';
import Products from './Components/Products';
import CreateProduct from './Components/CreateProduct';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Products />
        <CreateProduct />
      </header>
    </div>
  );
}

export default App;
