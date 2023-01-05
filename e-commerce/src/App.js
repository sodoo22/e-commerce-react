import './App.css';
import PopFunc from './PopFunc';
import products from './PopProducts';

function App() {

  const productsList = products.map((product => {
    console.log(product);
    return <PopFunc
      votes={product.votes}
      productImageUrl={product.productImageUrl}
      title={product.title}
      description={product.description}
      submitterAvatarUrl={product.submitterAvatarUrl} />
  }))


  return (
    <div className="App">

      <h2>Popular Products</h2><hr></hr>
      {productsList}

    </div>
  );
}

export default App;
