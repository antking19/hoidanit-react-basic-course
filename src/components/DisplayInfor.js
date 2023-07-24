import React from "react";
import "./DisplayInfor.scss";
import logo from "./../logo.svg";

class DisplayInfor extends React.Component {
    state = {
        isShowListUser: true,
    };

    handleHideShow = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser,
        });
    };

    render() {
        const { listUsers } = this.props;

        return (
            <div className="display-infor-contenr">
                <img src={logo} alt="" />
                <div onClick={() => this.handleHideShow()}>
                    <span>
                        {this.state.isShowListUser ? "Hide" : "Show"} List User:
                    </span>
                </div>
                {this.state.isShowListUser && (
                    <div>
                        {listUsers.map((user) => {
                            return (
                                <div key={user.id}>
                                    <div
                                        className={
                                            user.age < 18 ? "red" : "green"
                                        }
                                    >
                                        <div>My name is {user.name}</div>
                                        <div>My age is {user.age}</div>
                                        <hr />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        );
    }
}

export default DisplayInfor;
