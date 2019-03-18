import React from "react";
import { getAll } from "../../Api/Api";
import Datatable from "../Datatable"

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
    
  }
}

class Planets extends React.Component {
    state = {
        data: [],
        bySort: true,
        fieldSort: 'name'
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
             <Datatable 
                config={config}
                data={this.state.data.results}
                onLink={'name'}
                bySort={this.state.bySort}
                directionSort={this.directionSort}
                fieldSort={this.state.fieldSort}
            /> 
        )
    }
    directionSort = (name) => {
        this.setState({ bySort: !this.state.bySort, fieldSort: name })
        
    }
}

export default Planets