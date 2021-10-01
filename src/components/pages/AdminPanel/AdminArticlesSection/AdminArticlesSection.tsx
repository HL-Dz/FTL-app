import React, { useState } from 'react';
import { delay } from '../../../../helpers/helpers';
import { IArticle } from '../../../../types/articles';
import AdminModal from '../AdminModal/AdminModal';
import ArticleForm from '../ArticleForm/ArticleForm';
import "./AdminArticlesSection.scss";
import ArticlePreview from '../ArticlePreview/ArticlePreview';
import ArticlesWrapper from './ArticlesWrapper';

const AdminArticlesSection = () => {
    const [isPreview, setIsPreview] = useState(false);
    const [isEditForm, setIsEditForm] = useState(false);

    const [isAdminModal, setIsAdminModal] = useState(false);
    const [isFadeOutModal, setIsFadeOutModal] = useState(false);
    const [selectedAdminArticle, setSelectedAdminArticle] = useState<null | IArticle>(null);

    const [adminArticles, setAdminArticles] = useState<Array<IArticle> | []>([]);

    const showAdminModal = () => {
      setIsAdminModal(true);
    }

    const hideAdminModal = async () => {
      setIsFadeOutModal(true);
      await delay(350);
      setIsFadeOutModal(false);
      setIsAdminModal(false);
      setIsPreview(false);
      setIsEditForm(false);
    }

    const hideAdminModalWithEscape = (e: any) => {
      if(e.key === 'Escape') {
        hideAdminModal()
      }
    }

    const getSelectedAdminArticle = (article: IArticle) => {
      setIsEditForm(true);
      showAdminModal();
      setSelectedAdminArticle(article);
    }

    const showArticlePreview = (article: IArticle) => {
      setIsPreview(true);
      showAdminModal();
      setSelectedAdminArticle(article);
    }

  return (
    <div className="admin-section">
      {
        (isAdminModal && isEditForm) ? (
          <AdminModal isFadeOutModal={isFadeOutModal} hideAdminModalWithEscape={hideAdminModalWithEscape}>
            <ArticleForm 
              editArticleForm 
              articleData={selectedAdminArticle}
              hideAdminModal={hideAdminModal}
              adminArticles={adminArticles}
              setAdminArticles={setAdminArticles}
            />
          </AdminModal>
        ) : null
      }
      {
       (isAdminModal && isPreview) ?  (
         <AdminModal isFadeOutModal={isFadeOutModal} hideAdminModalWithEscape={hideAdminModalWithEscape}>
           <ArticlePreview article={selectedAdminArticle} hideAdminModal={hideAdminModal}/>
         </AdminModal>
       ) : null
      }
      {
        <ArticlesWrapper
          getSelectedAdminArticle={getSelectedAdminArticle}
          showArticlePreview={showArticlePreview}
          adminArticles={adminArticles}
          setAdminArticles={setAdminArticles}
        />
      }
    </div>
  )
}

export default AdminArticlesSection;