import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import Header from './Components/Header'
import { GlobalCss } from './styles'

import Rotas from './routes'
import Footer from './Components/Footer'
import { store } from './Store'
import Cart from './Components/Cart'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <div className="container">
          <Header />
        </div>
        <Rotas />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
