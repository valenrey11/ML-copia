import './App.css'
import { Home } from './pages/home'
import { Route, Router, Switch } from 'wouter'
import { SearchResults } from './pages/searchResults'
import { Header } from './components/Header'
import { ProductsContext } from './context/keywordContext'
import { ProducstIdFromCarrito } from './context/carritoContext'
import { PageCategories } from './pages/categories'
import { Detail } from './pages/detail'
import { Carrito } from './pages/carrito'
import { Footer } from './components/Footer'
function App() {
  return (
    <div className='App'>
      <ProductsContext>
        <ProducstIdFromCarrito>
          <Header />
          <Switch>
            <Route path='/ML-copia' component={Home} />
            <Route path='/search/:keyword' component={SearchResults} />
            <Route path='/category/:subCatId' component={PageCategories} />
            <Route path='/detail/:itemId' component={Detail} />
            <Route path='/carrito' component={Carrito} />
          </Switch>
          <Footer />
        </ProducstIdFromCarrito>
      </ProductsContext>
    </div>
  )
}
export default App
