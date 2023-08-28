import { useEffect } from "react";
import { useState } from "react";
import { getListAllUsers } from "../../../services/apiServices";

const TableUser = (props) => {
    const [listUser, setListUser] = useState([]);

    useEffect(() => {
        fetchListUsers();
    }, []);

    const fetchListUsers = async () => {
        const res = await getListAllUsers();
        if (res.EC === 0) setListUser(res.DT);
    };

    return (
        <>
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listUser &&
                        listUser.length > 0 &&
                        listUser.map((item, index) => {
                            return (
                                <tr key={`table-user-${index}`}>
                                    <td>{item.id}</td>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                    <td>{item.role}</td>
                                    <td>
                                        <button className="btn btn-secondary">
                                            View
                                        </button>
                                        <button className="btn btn-warning mx-3">
                                            Update
                                        </button>
                                        <button className="btn btn-danger">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
        </>
    );
};

export default TableUser;
