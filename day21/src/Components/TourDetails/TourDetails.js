import data from "../../data/data.json"

function TourDetails(){
//    if(props.click){
//        return (
//            <>
//             {/* <img src={props.image} onClick={props.handleClick}/> */}
//            </>
//        )
//    } else{
    return(
        <div >
        {data.map((information)=>(
            <>
          <h2>{information.name}</h2>
            <p >
                {information.info}
            </p>
            </>

        )
        )}
    </div>
           
    )
}

export default TourDetails;