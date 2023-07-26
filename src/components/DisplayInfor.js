import React from "react";
import "./DisplayInfor.scss";
// import logo from "./../logo.svg";

// class DisplayInfor extends React.Component {
//     state = {
//         isShowListUser: true,
//     };

//     handleHideShow = () => {
//         this.setState({
//             isShowListUser: !this.state.isShowListUser,
//         });
//     };

//     render() {
//         const { listUsers } = this.props;

//         return (
//             <div className="display-infor-contenr">
//                 {/* <img src={logo} alt="" /> */}
//                 <div onClick={() => this.handleHideShow()}>
//                     <span>
//                         {this.state.isShowListUser ? "Hide" : "Show"} List User:
//                     </span>
//                 </div>
//                 {this.state.isShowListUser && (
//                     <>
//                         {listUsers.map((user) => {
//                             return (
//                                 <div key={user.id}>
//                                     <div
//                                         className={
//                                             user.age < 18 ? "red" : "green"
//                                         }
//                                     >
//                                         <div>My name is {user.name}</div>
//                                         <div>My age is {user.age}</div>
//                                         <button
//                                             onClick={() =>
//                                                 this.props.handleDeleteUser(
//                                                     user.id
//                                                 )
//                                             }
//                                         >
//                                             Delete
//                                         </button>
//                                         <hr />
//                                     </div>
//                                 </div>
//                             );
//                         })}
//                     </>
//                 )}
//             </div>
//         );
//     }
// }

const DisplayInfor = (props) => {
    const { listUsers } = props;

    return (
        <div className="display-infor-contenr">
            {true && (
                <>
                    {listUsers.map((user) => {
                        return (
                            <div key={user.id}>
                                <div
                                    className={user.age < 18 ? "red" : "green"}
                                >
                                    <div>My name is {user.name}</div>
                                    <div>My age is {user.age}</div>
                                    <button
                                        onClick={() =>
                                            props.handleDeleteUser(user.id)
                                        }
                                    >
                                        Delete
                                    </button>
                                    <hr />
                                </div>
                            </div>
                        );
                    })}
                </>
            )}
        </div>
    );
};

export default DisplayInfor;
