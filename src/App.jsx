
import './App.css'
import { Category } from './components/category'
import { Footer } from './components/Footer'
import { Navbar } from './components/navbar'
import {Wrapper} from './components/wrapper'
import { News } from './pages/news'


function App() {
 
  return(
    <>

      <Navbar className={'sticky top-0 z-10'}/>
      <Category/>
      <News/>
      <Footer/>
    </>
  )
}

export default App
