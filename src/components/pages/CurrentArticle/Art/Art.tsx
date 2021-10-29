import React, { FC, useEffect, useState } from 'react';
import "./Art.scss";
import Comments from '../../../common/Comments/Comments';
import DisabeldComments from '../../../common/Comments/DisabeldComments/DisabeldComments';
import { IArticle } from '../../../../types/articles';
import tfl from '../../../../assets/images/tfl.jpg';
import AdminModal from '../../AdminPanel/AdminModal/AdminModal';
import { delay } from '../../../../helpers/helpers';


interface ArtProps {
  article: IArticle | null
  adminAccess?: boolean
  hideAdminModal?: () => void
}

const Art: FC<ArtProps> = ({article, adminAccess, hideAdminModal}) => {
  const [isImgModal, setIsImgModal] = useState(false);
  const [isFadeOutModal, setIsFadeOutModal] = useState(false);

  const setImageError = async (e: React.SyntheticEvent) => {
    let target = e.target as HTMLImageElement;
    target.src = tfl;
  }

  const hideImgModal = async () => {
    setIsFadeOutModal(true);
    await delay(350);
    setIsFadeOutModal(false);
    setIsImgModal(false);
  }

  const showImgModal = () => {
    setIsImgModal(true);
  }

  const handleImgModal = (e:any) => {
    if(e.key === 'Escape') {
      hideImgModal();
    }
  }

  useEffect(() => {
    window.addEventListener('keyup', handleImgModal)
    return () => {
      window.removeEventListener('keyup', handleImgModal);
    }
  })

  if(!article) return null;
  

  return (
    <div className="art">
      {
        isImgModal ? (
          <AdminModal isFadeOutModal={isFadeOutModal} hideAdminModal={hideImgModal}>
            <div className="art__wrap-pic">
              <i className="art__modal-close fas fa-times" onClick={hideImgModal}></i>
              <img src={article.imgSrc} onError={setImageError} alt="Article" className="art__img-modal" />
            </div>
          </AdminModal>
        ) : null
      }
      <div className="art__header">
        {
          adminAccess ? (
            <div className="art__close" title="Close" onClick={hideAdminModal}>
            <i className="fas fa-arrow-up"></i>
            </div>
          ) : null
        }
        <div className="art__pic">
          <img src={article.imgSrc} onError={setImageError} alt="Elem" className="art__img" />
        </div>
        {adminAccess ? <div className="art__title">{article.title}</div> : null}
        {!adminAccess ? <i className="fas fa-expand art__expand" onClick={showImgModal}></i> :  null}
        <div className="art__time">{article.createdAt}</div>
        <div className="art__status">
          <i className={`fab fa-gripfire article__status article__status_${article.status}`} title={`${article.status} status`}></i>
        </div>
      </div>
      <div className="art__description">
        {article.desc}
        <div className="art__info">
          <div className="art__info-photo">
            Photo <i className="fas fa-camera-retro"></i>:<span>{article.photoBy}</span>
          </div>
          <div className="art__info-author">Source <i className="fas fa-user-check"></i>: <span>{article.articleAuthorName}</span></div>
        </div>
      </div>
      {
        article.displayComments ? (
          <Comments
            comments={article.comments}
            adminAccess={adminAccess && true}
            articleUrl={article.articleUrl}
          />
        ) : (
          <DisabeldComments/>
        )
      }
    </div>
  )
}

export default Art;