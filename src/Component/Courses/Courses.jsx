

const Courses = ({ Show, hours, Allprize,Remaining }) => {
console.log(Show)
    return (
        <div>
            <div className=" bg-[#FFFFFF] p-3 rounded-xl">
                <h2 className=" mt-6 font-bold text-xl text-[#2F80ED] mb-5"> Credit Hour Remaining {Remaining}hr </h2>
                <hr />
                <h1 className=" ml-4 font-bold text-2xl mb-5"> Course Name </h1>
                {

                    Show.map(person => (<li className="list-decimal ml-5" key={person.id} > {person.name}</li>))

                }

                <hr className="my-5" />
                <h2 className="ml-4  text-1xl text-[#1C1B1BCC] mb-5">Total Credit Hour : {hours}
                </h2>
                <hr />
                <h1 className="text-1xl font-semibold text-[#1C1B1BCC] ml-4 mt-5"> Total Price : {Allprize} USD</h1>
            </div>
        </div>
    );
};

export default Courses;