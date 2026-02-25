import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalCss } from './styles/styles'
import Header from './components/Header'
import RestauranteList from './components/RestauranteList' // Importe a lista
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Header />
              <RestauranteList />
            </>
          } 
        />
        {/* Outras rotas aqui */}
      </Routes>
      <Footer /> {/* O Footer fica aqui, fora das Routes */}
    </BrowserRouter>
  )
}

export default App