import React from "react";
import { getAll } from "../../Api/Api"
import Tabledetails from "../Tabledetails"

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
        <Tabledetails 
                config={config}
                data={this.state.data}
            />
        )
    }
}

export default FilmPage