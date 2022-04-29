import Header from "./components/Header"
import Footer from "./components/Footer"
import { Container } from "react-bootstrap"
import HomeScreen from "./screens/HomeScreen"
import ProductScreen from "./screens/ProductScreen"
import { BrowserRouter as Router, Route } from "react-router-dom"

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Router>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/product/:id' element={<ProductScreen />} />
          </Router>
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
