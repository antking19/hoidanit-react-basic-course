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

    render() {
        return (
            <div>
                My name is {this.state.name} and I'm from {this.state.age}
                <button onClick={(event) => this.handleOnClick(event)}>
                    Click Me!
                </button>
                <button onMouseOver={this.handleOnMouseOver}>Hover Me!</button>
            </div>
        );
    }
}

export default MyComponent;
