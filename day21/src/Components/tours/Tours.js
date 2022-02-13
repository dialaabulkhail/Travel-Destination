
function Tours(props){
    console.log(props);
    return (

    props.data.map((tour)=>{
        return(
            <>
         <div>
     <h2>{tour.name}</h2>
  
         </div>
            </>

            
        )
    })


    )
}


export default Tours;
