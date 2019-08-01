import React from "react";
import Employee from "./component/Employee";
import Form1 from "./component/Form1";


class App extends React.Component {

  state = {

    department: undefined,
    avatar: undefined,
    id: undefined,
    first_name: undefined,
    last_name: undefined,
    email: undefined,
    error: undefined
  }


  getDetails = async (e) => {

    const department = e.target.elements.department.value;
    const id = e.target.elements.id.value;
    e.preventDefault();
    const api_call = await fetch(`https://reqres.in/api/users/?id=${id}`);
    //https://reqres.in/api/users/?id=${id}
    const response = await api_call.json();
    console.log(response);
    if (department && id) {
      this.setState({
        avatar: response.data.avatar,
        id: response.data.id,
        first_name: response.data.first_name,
        last_name: response.data.last_name,
        email: response.data.email,
        error: ""
      })
    } else {
      this.setState({
        error: "Please input search values..."
      })
    }
  }

  render() {

    return (

      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">

                </div>
                <div className="col-xs-7 form-container">
                  <Form1 getDetails={this.getDetails} />

                  <Employee
                    avatar={this.state.avatar}
                    id={this.state.id}
                    first_name={this.state.first_name}
                    last_name={this.state.last_name}
                    email={this.state.email}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
export default App;