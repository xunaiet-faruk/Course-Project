import { useEffect } from "react";
import { useState } from "react";
import Cards from "./Cards/Cards";
import Courses from "./Cards/Courses";

const Card = () => {

    const [Course , setCourse] =useState([])

    useEffect(()=>{
        fetch('Public.json')
        .then(res => res.json())
        .then(data => setCourse(data))


    },[])

    return (
        <div className="flex gap-4">
     
     <div className="w-3/4 grid grid-cols-3 gap-4">

                {


                    Course.map((course) => <Cards key={course.id} courses={course}> </Cards>)


                }

     </div>
            <div className="w-1/4"> 
         <Courses> </Courses>
         </div>   
        </div>
    );
};

export default Card;