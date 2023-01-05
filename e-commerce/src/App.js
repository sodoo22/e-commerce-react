import './App.css';
import PopFunc from './PopFunc';
import products from './PopProducts';
import MainMenu from './components/MainMenu';
import MainHeader from './components/MainHeader';
// import { Button } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {

  const productsList = products.map((product => {
    console.log(product);
    return <PopFunc
      // votes={product.votes}
      productImageUrl={product.productImageUrl}
      title={product.title}
      price={product.price}
      // description={product.description}
      cardImage={product.cardImage}
    />
  }))


  return (
    <div className="App">
      <div className='Header-Info'>
        <div>Need help? Call us: (+98) 0234 456 789</div>
        <div className='Header-Info-R'>
          <div className='OurStore'><i class="bi bi-geo-alt"></i> Our store</div>
          <div><i class="bi bi-truck"></i> Track your order</div>
        </div>
      </div>


      <div className='menu-container'>
        <MainHeader />
        <MainMenu />
      </div>
      {/* <button className='btn btn-primary'>Test</button>
      <Button variant="danger">Test</Button> */}




      <h2>Popular Products</h2>
      <div className='popProductContainer'>
        {productsList}
      </div>

    </div>
  );
}

export default App;
