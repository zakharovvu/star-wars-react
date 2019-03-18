import React from "react";
import { getAll } from "../../Api/Api"
import Tabledetails from "../Tabledetails"

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
      isSortable: false,
    },
    hair_color: {
        title: "Hair color",
        isSortable: false,
    },
    skin_color: {
        title: "Skin color",
        isSortable: false,
        isSearchable: false
      },
      eye_color: {
        title: "Eye color",
        isSortable: false
      },
      birth_year: {
        title: "Birth year",
        isSortable: false,
      },
      gender: {
          title: "Gender",
          isSortable: false,
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
            <Tabledetails 
                config={config}
                data={this.state.data}
            />
      
        )
    }

   
}

export default PersonPage