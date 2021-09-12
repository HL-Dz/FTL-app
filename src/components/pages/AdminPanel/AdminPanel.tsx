import React, {useState } from 'react';
import "./AdminPanel.scss";
import AdminSidebar from './AdminSidebar/AdminSidebar';
import ArticleForm from './ArticleForm/ArticleForm';

const AdminPanel = () => {
  const [isHiddenSidebar, setIsHiddenSidebar] = useState(false);

  const toggleSidebar = () => {
    setIsHiddenSidebar(!isHiddenSidebar);
  }

  return (
    <div className="primary-container admin">
      <AdminSidebar isHiddenSidebar={isHiddenSidebar} toggleSidebar={toggleSidebar}/>
      <section className="admin__content">
        
        <section className="form-control">
          <ArticleForm/>
        </section>

      </section>
    </div>
  )
}

export default AdminPanel;