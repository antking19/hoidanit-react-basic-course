import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
    render() {
        const myInfor = ["ab", "c", "c"];

        return (
            <div>
                <UserInfor />
                <br />
                <br />
                <DisplayInfor name="Cuong Truong" age="33" />
                <hr />
                <DisplayInfor name={"Kien Cuong"} age={26} myInfor={myInfor} />
            </div>
        );
    }
}

export default MyComponent;
