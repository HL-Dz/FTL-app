import React, {useState } from 'react';
import AdminArticlesSection from './AdminArticlesSection/AdminArticlesSection';
import "./AdminPanel.scss";
import AdminSidebar from './AdminSidebar/AdminSidebar';
import ArticleForm from './ArticleForm/ArticleForm';
import UniversalLoader from '../../common/UniversalLoader/UniversalLoader';
import { delay } from '../../../helpers/helpers';
import AdminInfoScreen from './AdminInfoScreen/AdminInfoScreen';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { setArticleErrorModal } from '../../../redux/articles-reducer';
import ErrorModal from '../../common/ErrorModal/ErrorModal';


const AdminPanel = () => {
  const { errorModal, errorMessage } = useTypedSelector(state => state.articles);
  const dispatch = useDispatch();

  const [isHiddenSidebar, setIsHiddenSidebar] = useState(true);
  const [isVisibleFormControl, setIsVisibleFormControl] = useState(false);
  const [isVisibleAdminArticles, setIsVisibleAdminArticles] = useState(false);
  const [isLoadingAdmin, setIsLoadingAdmin] = useState(true);



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

  const getAdminPanel = async () => {
    await delay(1500);
    setIsLoadingAdmin(false);
  }

  getAdminPanel();

  const setErrorModal = (value: boolean) => {
    dispatch(setArticleErrorModal(value));
  }


  return (
    <div className="primary-container admin">
      {errorModal? <ErrorModal errorMessage={errorMessage} setErrorModal={setErrorModal}/> : null}
      <AdminSidebar 
        isHiddenSidebar={isHiddenSidebar} 
        toggleSidebar={toggleSidebar}
        showFormControl={showFormControl}
        showAdminArticles={showAdminArticles}
      />
      <section className="admin__content">

        {
          (!isVisibleFormControl && !isVisibleAdminArticles) ? (
            <section className="admin-info">
              {
                isLoadingAdmin ? (
                  <div className="app-loading">
                    <UniversalLoader/>
                  </div>          
                ) : <AdminInfoScreen/>
              }
            </section>
          ) : null
        }
        
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