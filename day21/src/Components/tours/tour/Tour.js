import { Link } from "react-router-dom";
// import { useState } from "react"
// import TourDetails from "../../TourDetails/TourDetails";


function Tour({tour}){
//     const [click, setClick] = useState("")

//     function handleClick(){
//  setClick()
//     }
    return (
       <>
        <div>
        <h2 style={{color: "grey"}}> {tour.name}</h2> 
        <img src={tour.image}/>
    </div>
    {/* <TourDetails click={click} handleClick={handleClick}/> */}
    <nav>
        <Link to="/city/:id">Tour</Link>
    </nav>
       </>
)
   
}

export default Tour;

