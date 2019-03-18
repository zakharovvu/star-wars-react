import React from "react";
import { getAll } from "../../Api/Api"
import Tabledetails from "../Tabledetails"

const config = {
    name: {
      title: "name",
      isSortable: true,
      isSearchable: true
    },
    rotation_period: {
      title: "rotation_period",
      isSortable: true
    },
    diameter: {
      title: "diameter"
    },
    climate: {
        title: "climate"
    }
}

class Planetdetails extends React.Component {
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

export default Planetdetails