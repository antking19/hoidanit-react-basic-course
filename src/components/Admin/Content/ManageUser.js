import { FcPlus } from "react-icons/fc";
import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
import { useState } from "react";

const ManageUser = () => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);

    const handleShowModalCreateUser = () => {
        setShowModalCreateUser(!showModalCreateUser);
    };

    return (
        <div className="manage-user-container">
            <div className="title">Manage User</div>
            <div className="user-content">
                <div className="btn-add-new">
                    <button
                        className="btn btn-primary"
                        onClick={handleShowModalCreateUser}
                    >
                        <FcPlus /> Add New Users
                    </button>
                </div>
                <div className="table-users-container">Table User</div>
            </div>
            <ModalCreateUser
                show={showModalCreateUser}
                setShow={setShowModalCreateUser}
            />
        </div>
    );
};

export default ManageUser;
