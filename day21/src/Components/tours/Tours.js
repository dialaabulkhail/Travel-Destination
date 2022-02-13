
function Tours(props){
    console.log(props);
    return (

    props.data.map((tour)=>{
        return(
            <>
         <div>
     <h2 style={{color: "grey"}}>- {tour.name}</h2>
     <img src={tour.image}/>
         </div>
            </>

            
        )
    })

    )
}


export default Tours;
