import data from "../../data/data.json"
import { useParams } from "react-router-dom";
import { useState } from "react"




const TourDetails = (props)=>{
    let {id} = useParams();
    console.log({id})
    console.log(data)
    const tourInfo = ()=>{
        let information = data;
        const tourData = information.filter((data)=> data.id === id);
        return tourData;
    };
        const tourData = tourInfo();
        console.log(tourData)
        const [readMore, setReadMore] = useState(false);
        return(
            <div>
                <h1>{tourData[0].name}</h1>
                <p> {readMore ? tourData[0].info : `${tourData[0].info.substring(0,200)}...`}
                <button onClick={()=> setReadMore(!readMore)}>
                {readMore ? "show less" : " read more"}
                </button>
     </p>
     <div> <img src ={tourData[0].image}/> </div>
     <div>Price of Tour: {tourData[0].price }$</div>
    
            </div>
        )
    }



export default TourDetails;