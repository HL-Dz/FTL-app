import React, { FC } from 'react';
import "./Art.scss";
import noArticleImg from  '../../../../assets/images/noArticleImg.jpg';
import test from '../../../../assets/images/test2.jpg'
import Comments from '../../../common/Comments/Comments';
import DisabeldComments from '../../../common/Comments/DisabeldComments/DisabeldComments';
import { IArticle } from '../../../../types/articles';

let article = {
  id: 1, // generate uuidv4()
  title: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, magnam?`,
  shortDesc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              Asperiores, consequuntur! Minima doloribus expedita similique suscipit ipsam, repellat
              ad debitis ea dolorum unde obcaecati quod accusamus laborum excepturi quaerat modi dolor fugit dignissimos repellendus!`,
  desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit, amet voluptas! Qui iusto quis dolorum voluptate  dolor necessitatibus natus voluptatem molestias nisi aliquid optio repellendus aperiam hic corporisbeatae, dignissimos illo ea officia, culpa expedita sed! Dolore aspernatur temporibus reiciendis nostrum consectetur praesentium fugit, accusamus ullam. Ex ab fugiat exercitationem autem dolore maiores suscipit, beatae minima quaerat quia amet sed quod at porro nostrum laudantium nisi necessitatibus alias iure ullam ducimus ut. Rem inventore omnis eum ea dignissimos soluta nobis in repudiandae cupiditate modi, alias dolor praesentium quae quidem tempore officiis dolorum. Blanditiis, omnis sed atque quam totam sint mollitia?`,
  imgSrc: '',
  articleAuthor: 'John Doe',
  status: 'hot', // ['normal', 'high', 'hot']
  public: true,
  createdAt: 'August 21, 2021 14:45', // с сервера Firebase firebase.firestore.FieldValue.serverTimestamp()
  lastUpdated: 'August 21, 2021 15:32', // с сервера Firebase firebase.firestore.FieldValue.serverTimestamp()
  comments: [],
  displayComments: true
}


interface ArtProps {
  article: IArticle | null
}

const Art: FC<ArtProps> = ({article}) => {
  if(!article) return null;
  
  return (
    <div className="art">
      <div className="art__header" style={{backgroundImage: `url(${article.imgSrc || test})`}}>
        <div className="art__title">{article.title}</div>
        <div className="art__time">{article.createdAt}</div>
        <div className="art__status">
          <i className={`fab fa-gripfire article__status article__status_${article.status}`} title={`${article.status} status`}></i>
        </div>
      </div>
      <div className="art__description">
        <div className="art__author">Author :<span>{article.articleAuthor}</span></div>
        {article.desc}
      </div>
      {
        article.displayComments ? <Comments comments={article.comments}/> : <DisabeldComments/>
      }
    </div>
  )
}

export default Art;