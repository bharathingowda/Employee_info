import React from "react";

class Employee extends React.Component {

    render() {

        return (

            <div className="employee-info">
                {
                    this.props.id && <p className="employee__profilepickey"> Profile Picture:<br />
                        <span> <img src={this.props.avatar} alt="profilepic" className="employee__image" /> </span>
                    </p>
                }

                {
                    this.props.id && <span className="employee__idkey">ID:
                        <span className="employee__idvalue">  {this.props.id}</span>
                    </span>
                }


                {
                    this.props.first_name && <span className="employee__namekey">Name:
                        <span className="employee__value1">  {this.props.first_name}</span>
                    </span>
                }

                {
                    this.props.last_name && <span>
                        <span className="employee__value1">  {this.props.last_name}<br /></span>
                    </span>
                }

                {
                    this.props.email && <p className="employee__emailkey">Email:
                        <span className="employee__emailvalue">  {this.props.email}</span>
                    </p>
                }

                {
                    this.props.error && <p className="employee__error">{this.props.error}</p>
                }
                {
                    this.props.reset && <p className="employee__reset">
                        {
                            this.props.reset
                        }
                    </p>
                }

            </div>
        )
    }
}

export default Employee;