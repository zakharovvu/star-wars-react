import React from "react";
import { Link } from 'react-router-dom';
import { getAll } from "../../Api/Api"

const config = {
    name: {
      title: "name",
      isSortable: true,
      isSearchable: true
    },
    height: {
      title: "height",
      isSortable: true
    },
    birth_year: {
      title: "birth year"
    
  }
}

class PeoplePage extends React.Component {
    state = {
        data: [],
        da: []
    }

    componentDidMount() {
        const url = this.props.location.pathname.toLowerCase();
        getAll(url).then(data => {
            this.setState({ data: data });
          });
      }

    
      
    render() {
        if (this.state.data.length < 1) return (<div>Load...</div>);

       
        return (
        <div>            
        <table>
            <tbody>
                <tr >
                    {Object.keys(config).map(el => ( <th key={el}>{el}</th> )) }
                </tr>
                {this.state.data.results.map((el) => {
                    return (
                        <tr key={el.name}>
                            {Object.keys(config).map(el2 => (
                                el2 === 'name' 
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


}

export default PeoplePage