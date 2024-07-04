import './App.css'
import Home from './screens/Home'
import PaginaCep from './screens/PaginaCep'
import PaginaCachorro from './screens/PaginaCachorro'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/busca-cep" element={<PaginaCep/>}/>
        <Route path="/foto-cachorro" element={<PaginaCachorro/>} />
      </Routes>
    </Router>
  )
}

export default App

