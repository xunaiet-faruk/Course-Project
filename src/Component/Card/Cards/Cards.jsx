

const Cards = ({ cours, handleClik }) => {
   
    const { image, name, credit, details, price } = cours
    return (
        <div className="bg-[#FFFFFF] p-3 rounded-xl">
          
            <div> 
            <img src={image} alt="" />
            </div>
            <h2 className="text-black font-semibold"> {name} </h2>
            <p className="text-[#1C1B1B99]"> {details} </p>
            <div className="text-[#1C1B1B99] flex justify-between items-center">
                <p> <span className="text-3xl"> $ </span> {price}</p>
                <div>  
              <button> ICON </button>
                    <p>Credit : <span>{credit} </span> hr </p>  
                </div> 
                </div>
                <div>
                <button onClick={() => handleClik(cours)} className="bg-[#2F80ED] px-4 py-1 w-full text-center rounded-md mt-3 text-white"> Select</button>
                </div>
             
            </div>
   
        

    );
};

export default Cards;





