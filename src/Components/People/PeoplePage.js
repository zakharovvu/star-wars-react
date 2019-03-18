import React from "react";
import { getAll } from "../../Api/Api";
import Datatable from "../Datatable"
import Pagination from "../Pagination";

const config = {
    name: {
      title: "Name",
      isSortable: true,
      isSearchable: true
    },
    height: {
      title: "Height",
      isSortable: true
    },
    mass: {
      title: "Mass",
      isSortable: true,
      isSearchable: true
    },
    gender: {
      title: "Gender",
      isSortable: false,
      isSearchable: false
    },
    hair_color: {
      title: "Hair color",
      isSortable: false,
      isSearchable: false
    },
}

class PeoplePage extends React.Component {
    state = {
        data: [],
        bySort: true,
        fieldSort: 'name',
        currentPage: 1,
        url: this.props.location.pathname,
    }

    componentDidMount() {
      const url1 = this.props.location.pathname
      const url2 = this.props.location.search

        const url = url1 + url2;
        getAll(url).then(data => {
            this.setState({ data: data });
          });
      }
     
      get = (page) => {  
        const url = `${this.props.location.pathname.toLowerCase()}/?page=${page}`;
        getAll(url).then(data => {
            this.setState({ data: data, currentPage: page });
          });
      }

    render() {
        if (this.state.data.length < 1) return (<div>Load...</div>);
        
        return (
            <div>
              <Pagination 
                currentPage={this.state.currentPage}
                data={this.state.data} 
                setPage={this.get}
                location={this.props.location.pathname.toLowerCase()}
              />
             
             <Datatable 
                config={config}
                data={this.state.data.results}
                onLink={'name'}
                bySort={this.state.bySort}
                directionSort={this.directionSort}
                fieldSort={this.state.fieldSort}
              /> 
            </div>
        )
    }

    directionSort = (name) => {
        this.setState({ bySort: !this.state.bySort, fieldSort: name })
    }
}

export default PeoplePage