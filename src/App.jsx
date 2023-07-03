import './App.css'
import Header from './Components/Header/Header.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import Newsletter from './Components/Newsletter/Newsletter.jsx'
import BackToTop from './Components/BackToTop/BackToTop.jsx'
import SpecificationCard from "./Components/SpecificationCards/SpecificationCard.jsx";
import HotSale from "./Components/HotSale/HotSale.jsx";

function App () {

  return (
    <>
      <Header/>
      <Navbar/>
      <HotSale/>
      <SpecificationCard/>
      <BackToTop/>
      <Newsletter/>
    </>
  )
}

export default App
