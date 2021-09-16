import React, { useState } from 'react';
import { delay } from '../../../../helpers/helpers';
import { IArticle } from '../../../../types/articles';
import OwnerLabel from '../../../common/OwnerLabel/OwnerLabel';
import articlesData from '../../News/articles-data';
import AdminModal from '../AdminModal/AdminModal';
import ArticleForm from '../ArticleForm/ArticleForm';
import "./AdminArticlesSection.scss";

const AdminArticlesSection = () => {
    const [isAdminModal, setIsAdminModal] = useState(false);
    const [isFadeOutModal, setIsFadeOutModal] = useState(false);
    const [selectedAdminArticle, setSelectedAdminArticle] = useState<null | IArticle>(null);

    const showAdminModal = () => {
      setIsAdminModal(true);
    }

    const hideAdminModal = async () => {
      setIsFadeOutModal(true);
      await delay(400);
      setIsFadeOutModal(false);
      setIsAdminModal(false);
    }

    const hideAdminModalWithEscape = (e: any) => {
      if(e.key === 'Escape') {
        hideAdminModal()
      }
    }

    const getSelectedAdminArticle = (article: IArticle) => {
      showAdminModal();
      setSelectedAdminArticle(article)
    }


  return (
    <div className="admin-section">
      {isAdminModal ? (
        <AdminModal isFadeOutModal={isFadeOutModal} hideAdminModalWithEscape={hideAdminModalWithEscape}>
          <ArticleForm 
            editArticleForm 
            articleData={selectedAdminArticle}
            hideAdminModal={hideAdminModal}
          />
        </AdminModal>
      ) : null}
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
                  <div className="article-btn article-preview-btn">Preview</div>
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