import React from "react";
import "./SideBar.scss";
import "react-pro-sidebar/dist/css/styles.css";
import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from "react-pro-sidebar";
import { FaTachometerAlt, FaGem, FaGithub } from "react-icons/fa";
import sidebarBg from "../../assets/bg2.jpg";
import { Link } from "react-router-dom";

const SideBar = ({ collapsed, rtl, toggled, handleToggleSidebar }) => {
    return (
        <ProSidebar
            image={sidebarBg}
            rtl={rtl}
            collapsed={collapsed}
            toggled={toggled}
            breakPoint="md"
            onToggle={handleToggleSidebar}
        >
            <SidebarHeader>
                <div
                    style={{
                        padding: "24px",
                        textTransform: "uppercase",
                        fontWeight: "bold",
                        fontSize: 14,
                        letterSpacing: "1px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                    }}
                >
                    Hỏi Dân IT
                </div>
            </SidebarHeader>

            <SidebarContent>
                <Menu iconShape="circle">
                    <MenuItem
                        icon={<FaTachometerAlt />}
                        // suffix={<span className="badge red">new</span>}
                    >
                        Dashboard
                        <Link to="/admin" />
                    </MenuItem>
                </Menu>
                <Menu iconShape="circle">
                    <SubMenu
                        // suffix={<span className="badge yellow">3</span>}
                        // withSuffix
                        // icon={<FaRegLaughWink />}
                        icon={<FaGem />}
                        title="Features"
                    >
                        <MenuItem>
                            Quản Lý Users
                            <Link to="/admin/manage-user" />
                        </MenuItem>
                        <MenuItem>Quản Lý Bài Quiz</MenuItem>
                        <MenuItem>Quản Lý Câu Hỏi</MenuItem>
                    </SubMenu>
                </Menu>
            </SidebarContent>

            <SidebarFooter style={{ textAlign: "center" }}>
                <div
                    className="sidebar-btn-wrapper"
                    style={{
                        padding: "20px 24px",
                    }}
                >
                    <a
                        href="https://github.com/azouaoui-med/react-pro-sidebar"
                        target="_blank"
                        className="sidebar-btn"
                        rel="noopener noreferrer"
                    >
                        <FaGithub />
                        <span
                            style={{
                                whiteSpace: "nowrap",
                                textOverflow: "ellipsis",
                                overflow: "hidden",
                            }}
                        >
                            viewSource
                        </span>
                    </a>
                </div>
            </SidebarFooter>
        </ProSidebar>
    );
};

export default SideBar;
