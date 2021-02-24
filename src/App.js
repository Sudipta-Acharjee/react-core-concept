
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const nayoks = ['anwar', 'jafor', 'alomgir', 'salman', 'motu patlu', 'chobi']
  const products = [
    { name: 'Photoshop', price: '$90.99' },
    { name: 'Illustrator', price: '60.99' },
    { name: 'pdfReader', price: '$6.99' },
    { name: 'Premiere EL', price: '$249.52' }
  ]

  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(product => <Product product={product}></Product>)
        }
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>
      </header>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onMouseMove={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div >
  )
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [])

  return (
    <div>
      <h3>Dynamic users: {users.length}</h3>
      <ol>
        {
          users.map(user => <li>{user.email}</li>)
        }
      </ol>
    </div>
  )
}

function Product(props) {
  const productStyle = {
    border: '1px solid green',
    borderRadius: '5px',
    backgroundColor: 'yellow',
    color: 'red',
    height: '200px',
    width: '200px',
    float: 'left'
  }
  const { name, price } = props.product;
  console.log(name, price);
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h4>{price}</h4>
      <button>Buy now</button>
    </div>
  )
}
export default App;
