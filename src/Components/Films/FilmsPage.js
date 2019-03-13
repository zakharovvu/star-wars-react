import React from "react";
import { Link } from 'react-router-dom';
import { getAll } from "../../Api/Api"

const config = {
    title: {
      title: "name",
      isSortable: true,
      isSearchable: true
    },
    director: {
      title: "director",
      isSortable: true
    },
    created: {
      created: "birth year"
    
  }
}

class FilmsPage extends React.Component {
    state = {
        data: [],
    }

    componentDidMount() {
        const url = this.props.location.pathname.toLowerCase();
        getAll(url).then(data => {
            this.setState({ data });
          });
      }
      
    render() {
        if (this.state.data.length < 1) return (<div>Load...</div>);
        return (
        <table>
            <tbody>
                <tr>
                    {Object.keys(config).map(el => ( <th key={el}>{el}</th> )) }
                </tr>
                {this.state.data.results.map((el) => {
                   
                    return (
                        <tr key={el.title}>
                            {Object.keys(config).map(el2 => (
                                el2 === 'title' 
                                ? <td key={el2}><Link to={el.url.substring(21)}> { el[el2] } </Link> </td>
                                : <td key={el2}>{ el[el2] }</td>
                            ))}
                        </tr>
                        )
                    })
                } 
            </tbody>
        </table>
        )
    }


}

export default FilmsPage