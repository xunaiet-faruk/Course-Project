import { useEffect } from "react";
import { useState } from "react";
import Cards from "./Cards/Cards";
import Courses from "../Courses/Courses";


const Card = () => {

    const [course , setCourse] =useState([])
    const [Show , setShow] =useState([])
    const [hours, setHours] = useState(0);

 
    useEffect(()=>{
        fetch('Public.json')
        .then(res => res.json())
        .then(data => setCourse(data))


    },[])


    const handleClik = Shows => {
        
        const Semilar =Show.find(item => item.id == Shows.id)
        let count = Shows.credit
        // console.log(Semilar)
        if(Semilar){
            return alert('SORRY THE NAME IS ALREADY SELECTED') 
        }else{ 
       
        Show.forEach((items) =>{
            count =count + items.credit
        })
        if(count > 20){
            alert('the time hours is finish')
        }else{ 
        console.log(count)
        const newSet = [...Show, Shows]
        setShow(newSet)
        setHours(count)
        }
        }
    }


    return (
        <div className="flex gap-4">
     
     <div className="w-3/4 grid grid-cols-3 gap-4">

                {


                    course.map((cours,idx) => <Cards handleClik={handleClik} key={idx} cours={cours}> </Cards>)


                }

     </div>
            <div className="w-1/4"> 
                <Courses hours={hours} Show={Show}></Courses>
         </div>   
        </div>
    );
};

export default Card;