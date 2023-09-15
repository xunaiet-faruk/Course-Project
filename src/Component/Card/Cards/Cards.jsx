import { FiDollarSign } from 'react-icons/Fi';
import { BsBook } from 'react-icons/Bs';

const Cards = ({ cours, handleClik }) => {
   
    const { image, name, credit, details, price } = cours
    return (
        <div className="bg-[#FFFFFF] p-3 rounded-xl">
          
            <div> 
            <img src={image} alt="" />
            </div>
            <h2 className="text-1xl font-bold mt-2 mb-2"> {name} </h2>
            <p className="text-[#1C1B1B99] mb-3"> {details} </p>
            <div className="text-[#1C1B1B99] flex justify-between items-center mb-2">
                  <FiDollarSign className='text-2xl'></FiDollarSign>
                   <p className='mr-3'>  Price : {price}</p>
                <div className="flex">  
              <button className="mr-6 text-xl">  <BsBook></BsBook></button>
                    <p>Credit :  <span> {credit} </span> hr </p>  
                </div> 
                </div>
                <div>
                <button onClick={() => handleClik(cours)} className="bg-[#2F80ED] px-4 py-1 w-full text-center rounded-md mt-3 text-white"> Select</button>
                </div>
             
            </div>
   
        

    );
};

export default Cards;





