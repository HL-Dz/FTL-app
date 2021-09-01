import React, { useState } from 'react';
import "./AdminPanel.scss";

const AdminPanel = () => {
  const [isHiddenSidebar, setIsHiddenSidebar] = useState(false);

  const toggleSidebar = () => {
    setIsHiddenSidebar(!isHiddenSidebar);
  }
  
  return (
    <div className="primary-container admin">

      <aside className={isHiddenSidebar ? "admin__sidebar admin__sidebar_hide" : "admin__sidebar"}>
        <div className="toggle-sidebar" onClick={toggleSidebar}>
          <i className="fas fa-chevron-left toggle-sidebar-icon"></i>
        </div>
        <div className="admin__name" title="Administrator">
          <i className="fas fa-user-shield admin__icon"></i>
          <span>Dzmitry Duboyski</span>
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

      <section className="admin__content">
      </section>
    </div>
  )
}

export default AdminPanel;