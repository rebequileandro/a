import React from "react";
import "./Paginated.scss"
const Paginated = ({postsPerPage, totalPosts, setCurrentPage, currentPage}) => {

    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumber.push(i)
    }
    return (
       <div className="paginated-container">
           <button className="next-previous">Previous</button>
           {
               pageNumber?.map(number => (
                  <ul key={number}>
                    <button onClick={()=> setCurrentPage(number)}>{number}</button>
                 </ul> 
               ))
           }
           <button className="next-previous">Next</button>
       </div>
    )
}

export default Paginated