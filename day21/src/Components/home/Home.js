import Tours from "../tours/Tours"
import Header from "../header/Header";
import Footer from "../footer/Footer";
import ToursData from "../../data/data.json";
//this is how we create a component

/// <Home/> is how we rnder the imported components
function Home() {
  return (
    //  this is a jsx (html syntax in js file)
    <div>
    <Header/>
    <Tours data = {ToursData}/>
    <Footer/>

    </div>
    //inline styling 
    
    ///this return returns only one thing, so i have to wrap my elements with container <></> or a div 
  );
}


export default Home;
