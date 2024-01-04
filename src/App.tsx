import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Banner from './Components/Banner'
import Header from './Components/Header'
import { GlobalCss } from './styles'
import ProductsList from './Components/ProductsList'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Banner />
        <ProductsList title="Promoções" background="gray" />
      </>
    )
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <div className="container">
        <Header />
      </div>
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
