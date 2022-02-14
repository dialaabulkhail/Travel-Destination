import Tour from "./tour/Tour";
import data from "../../data/data.json"

function Tours(){
    
    return (
        <div>
            {data.map((tour)=>(
              
               
                <div key={tour.id}>
                <Tour tour={tour} />
                </div>
        

            )
            )}
        </div>
       
    )
}


export default Tours;
