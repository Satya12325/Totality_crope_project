import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner"
import CardContainer from "./Components/CardContainer"
import Notable from "./Components/Noteble";
import Adds from "./Components/Adds"
import CardsContainer from "./Components/CardsContainer";
import SmallCards from "./Components/SmallCards";
import Help from "./Components/Help";
import SmallScroll from "./Components/SmallScroll";
import Footer from "./Components/Footer";






function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <CardContainer/>
      <Notable/>     
      <Adds/>
      <CardsContainer/>
      <SmallCards/>
      <Help/>
      <SmallScroll/>
      <Footer/>
    </div>
  );
}

export default App;
