import './App.css';
import Product from './Components/Product/Product';

function App() {
  return (
    <div className="App mb-5">
      <h1 className='my-4 fixed-top brand'>Best Buy</h1>
      <Product></Product>

      <div id="question-answer" className="text-center container">
        <h5>How does JavaScript works?</h5>
        <p>JavaScript is an interpreted, scripting, or programming language. It is implemented in browsers. It
          dynamically updates content, verifies form data, controls multimedia, animates images, etc. It transforms
          static HTML web pages into interactive web pages. The source code is going through the compiler, which
          translates it into bytecodes that the computer language can understand and execute. JavaScript also can be
          used to create web and mobile applications, to create web servers, to create games.</p>
        <h5>Difference between localStorage and sessionStorage</h5>
        <table>
          <tr className="text-center">
            <th>localStorage</th>
            <th>sessionStorage</th>
          </tr>
          <tr>
            <td>1. It allows storing data with no expiration date</td>
            <td>1. It allows storing data for one session</td>
          </tr>
          <tr>
            <td>2. 5MB / 10MB storage</td>
            <td>2. 5MB storage</td>
          </tr>
          <tr>
            <td>3. It can span multiple windows and lasts beyond the current session</td>
            <td>3. It can carry out a single transaction but could be carrying out multiple transactions in
              different windows at the same time</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default App;
