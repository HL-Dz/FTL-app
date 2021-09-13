import React from 'react';
import OwnerLabel from '../../../common/OwnerLabel/OwnerLabel';
import articlesData from '../../News/articles-data';
import "./AdminArticlesSection.scss";

const AdminArticlesSection = () => {
  return (
    <div className="admin-section">
      <div className="admin-section__list">
        {
          articlesData.map(elem => {
            let bg = `linear-gradient(45deg, #00000033 50%, #00000040 82%), url(${elem.imgSrc})`
            return (
              <div key={elem.id} className="admin-article" style={{backgroundImage: bg}}>
                <OwnerLabel/>
                <div className="admin-article__time">{elem.createdAt}</div>
                <div className="admin-article__buttons">
                  <div className="article-btn article-edit-btn">Edit</div>
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