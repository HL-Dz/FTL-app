import React, { FC } from 'react';
import { IArticle } from '../../../../types/articles';
import Art from '../../CurrentArticle/Art/Art';
import "./ArticlePreview.scss";

interface ArticlePreviewProps {
  article: IArticle | null
  hideAdminModal?: () => void
}

const ArticlePreview: FC<ArticlePreviewProps> = ({article, hideAdminModal}) => {
  return (
    <div className="preview">
      <Art 
        article={article}
        adminAccess
        hideAdminModal={hideAdminModal}
      />
      </div>
  )
}

export default ArticlePreview;