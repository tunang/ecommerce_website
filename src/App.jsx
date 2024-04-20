import { useState, useContext } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from './components/navbar'
import MenPage from './components/MenPage'
import HomePage from './components/HomePage'
import Footer from './components/Footer'
import Login from './components/Login'
import { UserContext } from './context/UserContext'
import WomenPage from './components/WomenPage'
import DetailProduct from './components/DetailProduct'



function App() {
  const { user } = useContext(UserContext);
  console.log(">>> User: ", user);



  return (
    <Router>
      <div className="app">
        <header>
          <NavBar />
        </header>
        
          <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/men' element={<MenPage/>} />
            <Route path='/login'element={<Login />}/>
            <Route path='/women' element={<WomenPage />}/>
            <Route path='/products/:id' element={<DetailProduct />}/>
           


            
          </Routes>

        <footer>
          <Footer />
        </footer>
       
      </div>
    </Router>
  )
}

export default App
