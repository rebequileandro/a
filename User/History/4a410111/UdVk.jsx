import React from "react";
const Paginated = ({postsPerPage, totalPosts, paginado}) => {

    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumber.push(i)
    }

    return (
       <div className={styles.pag}>
           {
               pageNumber?.map(number => (
                  <ul style={{listStyle:"none"}} key={number}>
                    <button className={styles.button} onClick={()=> paginado(number)}>{number}</button>
                 </ul> 
               ))
           }
       </div>
    )
}

export default Paginated