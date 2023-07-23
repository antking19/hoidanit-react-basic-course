import React from "react";

class MyComponent extends React.Component {
    state = {
        name: "Marcus Cheung",
        address: "Hoi Dan IT",
        age: 33,
    };

    handleOnClick = () => {
        console.log(">> Click me", this.state.name);

        this.setState({
            name: "Cuong Truong",
            age: Math.floor(Math.random() * 100 + 1),
        });
    };

    handleOnMouseOver(event) {
        console.log(event.pageX);
    }

    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value,
        });
    };

    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    };

    render() {
        return (
            <div>
                My name is {this.state.name} and I'm from {this.state.age}
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <input
                        type="text"
                        onChange={(event) => this.handleOnChangeInput(event)}
                    />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default MyComponent;
