import React from "react";
import { getAll } from "../../Api/Api"

const config = {
    title: {
      title: "name",
      isSortable: true,
      isSearchable: true
    },
    edited: {
      title: "edited",
      isSortable: true
    },
    producer: {
      title: "producer"
    },
    release_date: {
        title: "release"
    }
}

class FilmPage extends React.Component {
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
            {Object.keys(config).map((el, i) => (
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

export default FilmPage