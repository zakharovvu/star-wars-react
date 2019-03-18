import React from "react"

const Tabledetails = ({ config, data }) => {
    return (
         <table>
            <tbody>
                {Object.keys(config).map(el => (
                    <tr key={el}>
                        <td className="Title">{config[el].title}</td>
                        <td>{data[el]}</td>
                    </tr>
                ))}
               
            </tbody>
        </table>
    )
}

export default Tabledetails