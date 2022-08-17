const CustomCards = ({
    title,
    description,
    totalnumber
}) => {
    return (  
        <div>
         <div className="bg-white m-10 p-5 shadow-xl w-96 h-60 rounded-md">
           <div className="text-xl text-grey">{title}</div> 
           <div className="bg-primary w-64 h-0.5 my-4"></div>
           <div className="text-blackdim">{description}</div>
           <div className="text-blackdim text-4xl">{totalnumber}</div>
         </div>
        </div>
    );
}
 
export default CustomCards;