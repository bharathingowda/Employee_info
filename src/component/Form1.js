import React from "react";
import Select from 'react-select';




class Form1 extends React.Component {






    state = {
        selecteddepartment: null,
        selectedid: null,

    };



    handleChange = selecteddepartment => {
        this.setState({ selecteddepartment });
        console.log(`Option selected:`, selecteddepartment);
    };

    handleChange1 = selectedid => {
        this.setState({ selectedid });
        console.log(`Option selected:`, selectedid);
    };

    clearvalues = () => {
        this.setState({
            selecteddepartment: "",
            selectedid: ""
        });
    }
    onClearForm = () => {
        window.location.reload();

    }






    render() {




        const DepartmentOptions = [
            { value: 'HR', label: 'HR' },
            { value: 'Engineer', label: 'Engineer' },

        ];
        const IdOptions = [
            { value: 1, label: '1' },
            { value: 2, label: '2' },
            { value: 3, label: '3' },
            { value: 4, label: '4' },
            { value: 5, label: '5' },
            { value: 6, label: '6' },
            { value: 7, label: '7' },
            { value: 8, label: '8' },
            { value: 9, label: '9' },
            { value: 10, label: '10' },
            { value: 11, label: '11' },
            { value: 12, label: '12' },

        ];

        const { selecteddepartment } = this.state;
        const { selectedid } = this.state;






        const customStyles = {
            option: (styles, state) => ({
                ...styles,
                color: state.isSelected ? "#FFF" : styles.color,
                backgroundColor: state.isSelected ? "#c7bdf2" : styles.color,
                borderBottom: "1px solid rgba(0, 0, 0, 0.125)",
                "&:hover": {
                    color: "#FFF",
                    backgroundColor: "#c7bdf2"
                }
            }),
            control: (styles, state) => ({
                ...styles,
                boxShadow: state.isFocused ? "0 0 0 0.2rem rgba(120, 194, 173, 0.25)" : 0,
                borderColor: state.isFocused ? "#bcebeb" : "#CED4DA",
                "&:hover": {
                    borderColor: state.isFocused ? "#bcebeb" : "#CED4DA"
                }
            })
        };


        return (


            <form onSubmit={this.props.getDetails} id="myform" name="myform" >
                <p className="Title" >Employee Details</p>

                <Select styles={customStyles}
                    className="selectbox1" value={selecteddepartment} onChange={this.handleChange} options={DepartmentOptions}
                    name="department" placeholder="Select Department" autoFocus="render"
                />
                &nbsp;
                <Select styles={customStyles}
                    className="selectbox2" value={selectedid} onChange={this.handleChange1} options={IdOptions}
                    selectedvalue={selecteddepartment}
                    name="id" placeholder="Select Employee ID"

                />
                <button type="submit" className="button1">Get Details</button>
                &nbsp;&nbsp; &nbsp; &nbsp;
                <input type="button" name="cancelCourse" value="Clear Values" onClick={this.clearvalues} className="button1" />
                &nbsp;&nbsp; &nbsp; &nbsp;
                <input type="button" name=" onClearForm" value="Clear Form" onClick={this.onClearForm} className="button1" />


            </form>
        );
    }
}

export default Form1;