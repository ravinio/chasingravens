import React from "react"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import  { Provider } from "./context/Context"
import Navbar from "./components/Navigation/Navbar"
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Blogs from "./pages/Blogs"
import { Route, Routes } from "react-router-dom"

const customTheme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "rgb(26, 18, 26)"
      }
    }
  },
  colors: {
    blue: {
      500: '#FF2173'
    }
  }
});

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <Provider>
          <Navbar />
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/blogs" element={<Blogs />} />
            </Routes>
          </div>
          <Footer />
      </Provider>
    </ChakraProvider>
  )
}

export default App
