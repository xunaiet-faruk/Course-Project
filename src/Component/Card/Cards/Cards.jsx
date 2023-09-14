
import Courses from "./Courses";
const Cards = ({courses}) => {
    const { image, name, credit, details, price } = courses
    return (
        <div className="bg-red-100 p-3 rounded-xl">
          
            <div> 
            <img src={image} alt="" />
            </div>
            <h2 className="text-black font-semibold"> {name} </h2>
            <p className="text-[#1C1B1B99]"> {details} </p>
            <div className="text-[#1C1B1B99] flex justify-between items-center">
                <p> <span className="text-3xl"> $ </span> {price}</p>
                <div>  
              <button> ICON </button>
             <p>Credit : {credit} hr </p>  
                </div> 
                </div>
                <div>
                <button className="bg-[#2F80ED] px-4 py-1 w-full text-center rounded-md mt-3 text-white"> Select</button>
                </div>
             
            </div>
   
        

    );
};

export default Cards;