import React from "react";
import "./Paginated.scss"
const Paginated = ({postsPerPage, totalPosts, setCurrentPage}) => {

    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumber.push(i)
    }
    return (
       <div className="paginated-container">
           {
               pageNumber?.map(number => (
              
                    <button onClick={()=> setCurrentPage(number)}>{number}</button>
    
               ))
           }
       </div>
    )
}

export default Paginated