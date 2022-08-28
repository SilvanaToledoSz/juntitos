import './App.css'
import './normalize.css'
import Navbar from './components/Navbar/Navbar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { Routes, Route} from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Categorias from './components/Categorias/Categorias';

function App() {   
  
  return (
    <div className='container'>
      <div className='col-12'>
        
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/category" element={<Categorias />} />
          </Routes>
          
          
        
      </div>
    </div>
  )
}

export default App;
