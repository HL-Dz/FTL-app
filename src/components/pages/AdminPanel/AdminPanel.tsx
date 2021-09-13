import React, {useState } from 'react';
import AdminArticlesSection from './AdminArticlesSection/AdminArticlesSection';
import "./AdminPanel.scss";
import AdminSidebar from './AdminSidebar/AdminSidebar';
import ArticleForm from './ArticleForm/ArticleForm';

const AdminPanel = () => {
  const [isHiddenSidebar, setIsHiddenSidebar] = useState(true);
  const [isVisibleFormControl, setIsVisibleFormControl] = useState(false);
  const [isVisibleAdminArticles, setIsVisibleAdminArticles] = useState(false);

  const toggleSidebar = () => {
    setIsHiddenSidebar(!isHiddenSidebar);
  }

  const showFormControl = () => {
    setIsVisibleFormControl(true);
    setIsVisibleAdminArticles(false);
  }

  const showAdminArticles = () => {
    setIsVisibleAdminArticles(true);
    setIsVisibleFormControl(false);
  }

  return (
    <div className="primary-container admin">
      <AdminSidebar 
        isHiddenSidebar={isHiddenSidebar} 
        toggleSidebar={toggleSidebar}
        showFormControl={showFormControl}
        showAdminArticles={showAdminArticles}
      />
      <section className="admin__content">
        
        <section className={isVisibleFormControl ? "form-control form-control_visible" : "form-control"}>
          <ArticleForm/>
        </section>

        <section className={isVisibleAdminArticles ? "admin-articles admin-articles_visible" : "admin-articles"}>
          <AdminArticlesSection/>
        </section>

      </section>
    </div>
  )
}

export default AdminPanel;