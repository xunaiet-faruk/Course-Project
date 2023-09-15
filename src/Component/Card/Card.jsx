import { useEffect } from "react";
import { useState } from "react";
import Cards from "./Cards/Cards";
import Courses from "../Courses/Courses";
import Swal from "sweetalert2";



const Card = () => {

    const [course , setCourse] =useState([])
    const [Show, setShow] = useState([])
    const [hours, setHours] = useState();
    const [Allprize, setAllprize] = useState(0)
    const [Remaining, setRemaing] =useState(20)
  

    useEffect(() => {
        fetch('Public.json')
            .then(res => res.json())
            .then(data => setCourse(data))


    }, [])
  
   

    const handleClik = Shows => {
        
        const Semilar =Show.find(item => item.id == Shows.id)
        let count = Shows.credit
        let sum = Shows.price
        // console.log(Semilar)
        if(Semilar){
            Swal.fire(
                'Sorry !',
                'The name is already declared',
                'error'
               
            ) 
        }else{ 
       
        Show.forEach((items) =>{
            count =count + items.credit
             sum = sum + items.price

        })
        // console.log(count)
       
       const remaingdata = 20 - count;
        if(remaingdata < 0){
            Swal.fire(
                'SORRY !',
                'THE TIME IS FINISHED ALSO THE  REMAINING IS FINISHED',
                'error'
            ) 
        }else{ 
        // console.log(count)
        const newSet = [...Show, Shows]
        setShow(newSet)
        setHours(count)
        setAllprize(sum)
        setRemaing(remaingdata)
        }
        }
    }


    return (
        <div className="flex gap-4">
     
     <div className="lg:w-3/4 w-2/4 grid lg:grid-cols-3  gap-4">

                {


                    course.map((cours,idx) => <Cards handleClik={handleClik} key={idx} cours={cours}> </Cards>)


                }

     </div>
            <div className="lg:w-1/4 w-2/4"> 
                <Courses Remaining={Remaining} Allprize={Allprize} hours={hours} Show={Show}></Courses>
         </div>   
        </div>
    );
};

export default Card;