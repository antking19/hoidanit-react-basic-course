import Sidebar from "./Sidebar";
import { FaBars } from "react-icons/fa";
import "./Admin.scss";
import { useState } from "react";

const Admin = (props) => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <div className="admin-container">
            <div className="admin-sidebar">
                <Sidebar collapsed={isCollapsed} />
            </div>
            <div className="admin-content">
                <FaBars onClick={() => setIsCollapsed(!isCollapsed)} />
            </div>
        </div>
    );
};

export default Admin;
