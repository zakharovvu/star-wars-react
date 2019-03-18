import React from "react"

const Pagination = ( props ) => {
    const countPage = Math.ceil(props.data.count / 10);
    const buttons = [];
    
    Array(countPage).fill('').map((_, i) => buttons.push(
        <span key={i +5}>
            
            <button
                className={props.currentPage === i + 1 ? "Buttonpage Activbutton" : "Buttonpage"} 
                onClick={() => props.setPage(i + 1)} 
                key={i}>{i + 1}
            </button>
            </span>) )
   
    return (
       <div>
           {buttons}
          
        </div>
    )
}

export default Pagination