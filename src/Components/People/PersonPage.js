import React from "react";
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
    mass: {
      title: "birth year"
    },
    hair_color: {
        title: "hair_color"
    }
}

class PersonPage extends React.Component {
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
                {Object.keys(config).map(el => (
                    <tr key={el}>
                        <td className="Title">{el}</td>
                        <td>{this.state.data[el]}</td>
                    </tr>
                ))}
               
            </tbody>
        </table>
        )
    }
}

export default PersonPage