import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: "Kien Cuong", age: "15" },
            { id: 2, name: "Marcus Cheung", age: "26" },
            { id: 3, name: "Cuong Truong", age: "31" },
        ],
    };

    render() {
        const myInfor = ["ab", "c", "c"];
        // DRY: Don't Repeat Yourself
        return (
            <div>
                <UserInfor />
                <br />
                <br />
                <DisplayInfor listUsers={this.state.listUsers} />
            </div>
        );
    }
}

export default MyComponent;
