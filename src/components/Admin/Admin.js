import { useState } from "react";
import "./Admin.scss";
import SideBar from "./SideBar";
import { FaBars } from "react-icons/fa";
import { Outlet } from "react-router-dom";

const Admin = (props) => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className="admin-container">
            <div className="admin-sidebar">
                <SideBar collapsed={collapsed} />
            </div>
            <div className="admin-content">
                <div className="sidebar-header">
                    <FaBars onClick={() => setCollapsed(!collapsed)} />
                </div>
                <div className="sidebar-main">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Admin;
