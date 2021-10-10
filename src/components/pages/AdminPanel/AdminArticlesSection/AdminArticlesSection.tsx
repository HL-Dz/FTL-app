import React, { useState } from 'react';
import { delay } from '../../../../helpers/helpers';
import { IArticle } from '../../../../types/articles';
import AdminModal from '../AdminModal/AdminModal';
import ArticleForm from '../ArticleForm/ArticleForm';
import "./AdminArticlesSection.scss";
import ArticlePreview from '../ArticlePreview/ArticlePreview';
import ArticlesWrapper from './ArticlesWrapper';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';

const AdminArticlesSection = () => {
    const {articles} = useTypedSelector(state => state.articles);

    const dispatch = useDispatch();

    const [isPreview, setIsPreview] = useState(false);
    const [isEditForm, setIsEditForm] = useState(false);

    const [isAdminModal, setIsAdminModal] = useState(false);
    const [isFadeOutModal, setIsFadeOutModal] = useState(false);
    const [selectedAdminArticle, setSelectedAdminArticle] = useState<null | IArticle>(null);

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
          <AdminModal isFadeOutModal={isFadeOutModal} hideAdminModal={hideAdminModal}>
            <ArticleForm 
              editArticleForm 
              articleData={selectedAdminArticle}
              hideAdminModal={hideAdminModal}
            />
          </AdminModal>
        ) : null
      }
      {
       (isAdminModal && isPreview) ?  (
         <AdminModal isFadeOutModal={isFadeOutModal} hideAdminModal={hideAdminModal}>
           <ArticlePreview article={selectedAdminArticle} hideAdminModal={hideAdminModal}/>
         </AdminModal>
       ) : null
      }
      {
        <ArticlesWrapper
          getSelectedAdminArticle={getSelectedAdminArticle}
          showArticlePreview={showArticlePreview}
          adminArticles={articles}
        />
      }
    </div>
  )
}

export default AdminArticlesSection;