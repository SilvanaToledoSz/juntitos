import './App.css'
import './normalize.css'
import Navbar from './components/Navbar/Navbar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {

  
  return (
    <div className='container'>
      <div className='col-12'>
        <Navbar />
        <ItemListContainer bienvenida="Bienvenidos a" />        
      </div>
    </div>
  )
}

export default App;
