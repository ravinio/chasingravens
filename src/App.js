import { ChakraProvider } from '@chakra-ui/react'
import  { Provider } from './context/Context'
import Navbar from './components/Navigation/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Blogs from './pages/Blogs'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <ChakraProvider>
      <Provider>
          <Navbar />
          <div className='App'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/blogs' element={<Blogs />} />
            </Routes>
          </div>
          <Footer />
      </Provider>
    </ChakraProvider>
  )
}

export default App
