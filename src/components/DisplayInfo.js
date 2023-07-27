import React, { useEffect, useState } from "react";
import "./DisplayInfo.scss";

const DisplayInfo = (props) => {
    const { listUsers } = props;

    const [isShowHideListUsers, setShowHideListUsers] = useState(true);

    const onClickShowHideListUsers = () => {
        setShowHideListUsers(!isShowHideListUsers);
    };

    useEffect(() => {
        if (listUsers.length === 0) alert("Your delete all users");
    }, [listUsers]);

    return (
        <div className="display-info-listUser">
            <div>
                <span onClick={() => onClickShowHideListUsers()}>
                    {isShowHideListUsers ? "Hide" : "Show"} List Users:
                </span>
            </div>
            {isShowHideListUsers &&
                listUsers.map((user) => {
                    return (
                        <div
                            key={user.id}
                            className={user.age < 18 ? "red" : "green"}
                        >
                            <div>My name is {user.name}</div>
                            <div>I'm {user.age}</div>
                            <button
                                onClick={() => props.handleDeleteUser(user.id)}
                            >
                                Delete
                            </button>
                            <hr />
                        </div>
                    );
                })}
        </div>
    );
};

export default DisplayInfo;
