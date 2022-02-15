import { Link } from "react-router-dom";



function Tour({tour}){

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

