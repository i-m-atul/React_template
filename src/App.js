
import Navbar from './Navbar/Navbar';
import './App.css';
import SectionOne from './SectionOne/SectionOne';
import Features from './Features/Features';
import CardSection from './CardSection/CardSection';
import Footer from './Footer/Footer';



const App = ()=>{
  return(
         <div>
           <Navbar/>
           <SectionOne/>
           <Features/>
           <CardSection/>
           <Footer/>
         </div>
  )
}


export default App;
