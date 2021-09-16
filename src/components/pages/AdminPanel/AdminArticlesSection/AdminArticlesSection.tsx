import React, { useState } from 'react';
import { delay } from '../../../../helpers/helpers';
import { IArticle } from '../../../../types/articles';
import OwnerLabel from '../../../common/OwnerLabel/OwnerLabel';
import articlesData from '../../News/articles-data';
import AdminModal from '../AdminModal/AdminModal';
import ArticleForm from '../ArticleForm/ArticleForm';
import "./AdminArticlesSection.scss";
import Art from '../../CurrentArticle/Art/Art';

const AdminArticlesSection = () => {
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

    const shoArticlePreview = (article: IArticle) => {
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
            />
          </AdminModal>
        ) : null
      }
      {
       (isAdminModal && isPreview) ?  (
         <AdminModal isFadeOutModal={isFadeOutModal} hideAdminModalWithEscape={hideAdminModalWithEscape}>
           <div className="preview">
            <Art 
              article={selectedAdminArticle}
              adminAccess
              hideAdminModal={hideAdminModal}
            />
           </div>
         </AdminModal>
       ) : null
      }
      <div className="admin-section__list">
        {
          articlesData.map(elem => {
            return (
              <div key={elem.id} className="admin-article">
                <OwnerLabel/>
                <div className="admin-article__pic">
                  <img src={elem.imgSrc} alt="Article" className="admin-article__img" />
                </div>
                <div className="admin-article__time">{elem.createdAt}</div>
                <div className="admin-article__buttons">
                  <div className="article-btn article-edit-btn" onClick={() => getSelectedAdminArticle(elem)}>Edit</div>
                  <div className="article-btn article-preview-btn" onClick={() => shoArticlePreview(elem)}>Preview</div>
                </div>
                <div className="admin-article__title">{elem.title}</div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default AdminArticlesSection;