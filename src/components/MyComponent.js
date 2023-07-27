import React, { useState } from "react";
import AddNewUser from "./AddNewUser";
import DisplayInfo from "./DisplayInfo";

const MyComponent = (props) => {
    const [listUsers, setListUsers] = useState([
        { id: 1, name: "Marucs", age: "16" },
        { id: 2, name: "Cuong Truong", age: "26" },
        { id: 3, name: "Kien Cuong", age: "80" },
    ]);

    const handleAddNewUser = (userObj) => {
        setListUsers([userObj, ...listUsers]);
    };

    const handleDeleteUser = (userId) => {
        let listUsersClone = [...listUsers];
        listUsersClone = listUsersClone.filter((item) => item.id !== userId);

        setListUsers(listUsersClone);
    };

    return (
        <div>
            <AddNewUser handleAddNewUser={handleAddNewUser} />
            <br />
            <DisplayInfo
                listUsers={listUsers}
                handleDeleteUser={handleDeleteUser}
            />
        </div>
    );
};

export default MyComponent;
