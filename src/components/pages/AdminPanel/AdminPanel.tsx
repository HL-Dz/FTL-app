import React, {useEffect, useState } from 'react';
import AdminArticlesSection from './AdminArticlesSection/AdminArticlesSection';
import "./AdminPanel.scss";
import AdminSidebar from './AdminSidebar/AdminSidebar';
import ArticleForm from './ArticleForm/ArticleForm';
import SignIn from '../../common/Auth/SignIn';
import UniversalLoader from '../../common/UniversalLoader/UniversalLoader';
import { delay } from '../../../helpers/helpers';
import AdminInfoScreen from './AdminInfoScreen/AdminInfoScreen';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { setArticleErrorMessage, setArticleErrorModal, toggleArticleLoading } from '../../../redux/articles-reducer';
import ErrorModal from '../../common/ErrorModal/ErrorModal';
import firebase from '../../../firebase';
import { Redirect } from 'react-router';
import FailedAccess from '../../common/FailedAccess/FailedAccess';

const ref = firebase.firestore().collection('admins');


const AdminPanel = () => {
  const { errorModal, errorMessage } = useTypedSelector(state => state.articles);
  const { user } = useTypedSelector(state => state.auth);
  const dispatch = useDispatch();

  const [isHiddenSidebar, setIsHiddenSidebar] = useState(true);
  const [isVisibleFormControl, setIsVisibleFormControl] = useState(false);
  const [isVisibleAdminArticles, setIsVisibleAdminArticles] = useState(false);
  const [isLoadingAdmin, setIsLoadingAdmin] = useState(false);

  const [isAdminAccess, setIsAdminAccess] = useState(false);
  const [isRedirect, setIsRedirect] = useState(false);

  let unsubscribe = () => {};

  const getAccess = () => {
    unsubscribe = ref
      .doc('current-admins')
      .onSnapshot((doc: firebase.firestore.DocumentData) => {
        setIsAdminAccess(true);
      },
      async (error) => {
        setIsAdminAccess(false);
        await delay(3000);
        setIsRedirect(true);
      }
      )
  }

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
    setIsLoadingAdmin(true);
    await delay(1500);
    setIsLoadingAdmin(false);
  }

  const setErrorModal = (value: boolean) => {
    dispatch(setArticleErrorModal(value));
  }

  useEffect(() => {
    if(user) {
      getAdminPanel();
      getAccess();
    }
    return (() => {
      dispatch(toggleArticleLoading(false));
      dispatch(setArticleErrorMessage(""));
      dispatch(setArticleErrorModal(false));
      unsubscribe();
    })
  }, [user])



  return (
    <>
      {
        !user ? <div className="admin-wrap"><SignIn/></div> : (
          <>
            {
              isAdminAccess ? (
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
              ) : isRedirect && !isAdminAccess ? <Redirect to="/" /> : (
                <FailedAccess/>
              )
            }
          </>
        )
      }
    </>
  )
}

export default AdminPanel;