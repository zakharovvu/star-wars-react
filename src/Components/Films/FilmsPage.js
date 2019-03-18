import React from "react";
import { getAll } from "../../Api/Api"
import Datatable from "../Datatable";

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
        bySort: true,
        fieldSort: 'title'
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
        <Datatable 
                config={config}
                data={this.state.data.results}
                onLink={'title'}
                bySort={this.state.bySort}
                directionSort={this.directionSort}
                fieldSort={this.state.fieldSort}
            /> 
        )
    }
    directionSort = (name) => {
        this.setState({ bySort: !this.state.bySort, fieldSort: name })
        console.log(name)
    }

}

export default FilmsPage