import Tour from "./tour/Tour";
import data from "../../data/data.json"
import {Link} from "react-router-dom"
import TourDetails from "../TourDetails/TourDetails";


function Tours(){
    
    return (
        <div>
            {data.map((tour)=>(
              
               
                <div key={tour.id}>
                   <Link to={`/tour/${tour.id}`}>
                   <Tour tour={tour} />
                   </Link>
             
                
                </div>
            )
            )}
        </div>
       
    )
}


export default Tours;
