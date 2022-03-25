import './App.css';
import Product from './Components/Product/Product';
import Question from './Components/Questions/Question';

function App() {
  return (
    <div className="App mb-5">
      <h1 className='py-4 fixed-top brand'>Best Buy</h1>
      <Product></Product>
      <Question></Question>
    </div>
  );
}

export default App;
