import React from "react";
import { Link } from 'react-router-dom';
import Sort from "../Components/Sort"


const Datatable = ({ config, data, onLink, bySort, directionSort, fieldSort }) => {
   
    const items = Sort(data, bySort, fieldSort);
    
    return (
        <div> 
        <table>
            <tbody>
                <tr >
                    { Object.keys(config).map(el => ( 
                        <th 
                            className={config[el].isSortable ? "Sort" : ""} 
                            key={el}
                            onClick={() => directionSort(el)}
                        >{config[el].title}
                            
                        </th> )) }

                </tr>
                {items.map((el) => {
                    return (
                        <tr key={el[onLink]}>
                            {Object.keys(config).map(el2 => (
                                el2 === onLink 
                                ? <td key={el2}><Link to={el.url.substring(21)}> { el[el2] } </Link> </td>
                                : <td key={el2}>{ el[el2] }</td>
                            ))}
                        </tr>
                        )
                    })
                } 
            </tbody>
        </table>
        </div>
    )
}

export default Datatable;