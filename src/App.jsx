import './App.css';
import { Home } from './pages/home';
import { Route } from "wouter";
import { SearchResults } from './pages/searchResults';
import { Header } from './components/Header';
import { ProductsContext } from './context/keywordContext'
import { ProducstIdFromCarrito } from './context/carritoContext'
import { PageCategories } from './pages/categories';
import { Detail } from './pages/detail';
import { Carrito } from './pages/carrito';
function App() {
  return (
    <div className="App">
      <ProductsContext>
        <ProducstIdFromCarrito>
          <Header />
          <Route path='/' component={Home} />
          <Route path='/search/:keyword' component={SearchResults} />
          <Route path='/category/:subCatId' component={PageCategories} />
          <Route path='/detail/:itemId' component={Detail} />
          <Route path='/carrito' component={Carrito} />
        </ProducstIdFromCarrito>
      </ProductsContext>
    </div>
  );
}

export default App;
