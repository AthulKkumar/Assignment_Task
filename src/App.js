import './App.css';
import Navbar from './components/Navbar';
// import Payment from './components/Payment';
import ProductPage from './components/ProductPage';
import Productstate from './context/Productstate';

function App() {
  return (
    <>
      <Productstate>

        <Navbar />
        <ProductPage />
        {/* <Payment /> */}
      </Productstate>
    </>
  );
}

export default App;
