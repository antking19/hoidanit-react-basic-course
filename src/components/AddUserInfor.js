import React from "react";

class AddUserInfor extends React.Component {
    state = {
        name: "",
        address: "Hoi Dan IT",
        age: "",
    };

    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value,
        });
    };

    handleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value,
        });
    };

    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.handleAddNewUser({
            id: Math.floor(Math.random() * 100 + 1) + "-random",
            name: this.state.name,
            address: "Hoi Dan IT",
            age: this.state.age,
        });
    };

    render() {
        return (
            <div>
                My name is {this.state.name || "Marcus"} and I'm from
                {this.state.age || "16"}
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <input
                        value={this.state.name}
                        type="text"
                        onChange={(event) => this.handleOnChangeInput(event)}
                    />

                    <input
                        value={this.state.age}
                        type="text"
                        onChange={(event) => this.handleOnChangeAge(event)}
                    />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default AddUserInfor;
