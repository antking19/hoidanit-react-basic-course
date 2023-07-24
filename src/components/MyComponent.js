import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: "Kien Cuong", age: "15" },
            { id: 2, name: "Marcus Cheung", age: "26" },
            { id: 3, name: "Cuong Truong", age: "31" },
        ],
    };

    handleAddNewUser = (userObj) => {
        this.setState({
            listUsers: [userObj, ...this.state.listUsers],
        });
    };

    handleDeleteUser = (userId) => {
        let listUsersClone = [...this.state.listUsers];
        listUsersClone = listUsersClone.filter((item) => item.id !== userId);

        this.setState({
            listUsers: listUsersClone,
        });
    };

    render() {
        // DRY: Don't Repeat Yourself
        return (
            <>
                <div className="a">
                    <AddUserInfor handleAddNewUser={this.handleAddNewUser} />
                    <br />
                    <br />
                    <DisplayInfor
                        listUsers={this.state.listUsers}
                        handleDeleteUser={this.handleDeleteUser}
                    />
                </div>
                <div className="b"></div>
            </>
        );
    }
}

export default MyComponent;
