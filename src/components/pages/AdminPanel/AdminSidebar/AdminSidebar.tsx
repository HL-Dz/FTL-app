import React, { FC } from 'react';
import "./AdminSidebar.scss";

interface AdminSidebarProps {
  isHiddenSidebar: boolean
  toggleSidebar: () => void
}

const AdminSidebar:FC<AdminSidebarProps> = ({isHiddenSidebar, toggleSidebar}) => {
  return (
    <aside className={isHiddenSidebar ? "admin__sidebar admin__sidebar_hide" : "admin__sidebar"}>
      <div className="toggle-sidebar" onClick={toggleSidebar}>
        <i className="fas fa-chevron-left toggle-sidebar-icon"></i>
      </div>
      <div className="admin__name" title="Administrator">
        <i className="fas fa-user-shield admin__icon"></i>
        <span>Dzmitry Hlushak</span>
      </div>
      <div className="admin__elems">
        <div className="admin__elem">
          <div className="admin__elem-wrap">
            <i className="far fa-newspaper admin__elem-icon"></i>
          </div>
          <span className="admin__elem-text">Current articles</span>
        </div>
        <div className="admin__elem">
          <div className="admin__elem-wrap">
            <i className="fas fa-plus admin__elem-icon"></i>
          </div>
          <span className="admin__elem-text">New article</span>
        </div>
      </div>
    </aside>
  )
}

export default AdminSidebar;