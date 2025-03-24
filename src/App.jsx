import './App.css'
import CartWidget from './components/CartWidget'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'

function App() {
  let ilcProps = {
    color: "blue",
    titulo: "Bienvenido a mi primer App"
  }

  return (
    <>
      <NavBar />
      <ItemListContainer {...ilcProps} />
    </>
  )
}

export default App
