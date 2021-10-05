import React, { FC, useState } from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import SignIn from '../../common/Auth/SignIn';
import Footer from '../../common/Footer/Footer';
import Tournaments from '../News/Tournaments/Tournaments';
import Art from './Art/Art';
import "./CurrentArticle.scss";
import firebase from '../../../firebase';
import { IArticle } from '../../../types/articles';
import tfl from '../../../assets/images/tfl.jpg';

let article = {
  id: '1', // generate uuidv4()
  articleUrl: 'https://tribuna101.global.ssl.fastly.net',
  articleAuthorId: 'fdsr432v4r',
  articleAuthorName: 'Some author',
  title: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, magnam?`,
  shortDesc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, consequuntur! Minima doloribus expedita similique suscipit ipsam, repellatad debitis ea dolorum unde obcaecati quod accusamus laborum excepturi quaerat modi dolor fugit dignissimos repellendus!`,
  desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, amet voluptas! Qui iusto quis dolorum voluptate dolor necessitatibus natus voluptatem molestias nisi aliquid optio repellendus aperiam hic corporis beatae, dignissimos illo ea officia, culpa expedita sed! Dolore aspernatur temporibus reiciendis nostrum consectetur praesentium fugit, accusamus ullam. Ex ab fugiat exercitationem autem dolore maiores suscipit, beatae minima quaerat quia amet sed quod at porro nostrum laudantium nisi necessitatibus alias iure ullam ducimus ut. Rem inventore omnis eum ea dignissimos soluta nobis in repudiandae cupiditate modi, alias dolor praesentium quae quidem tempore officiis dolorum. Blanditiis, omnis sed atque quam totam sint mollitia?`,
  imgSrc: tfl,
  status: 'hot', // ['normal', 'high', 'hot']
  public: true,
  createdAt: 'August 21, 2021 14:45',
  lastUpdated: 'August 21, 2021 14:45',
  comments: [
    {
      id: "4354354-5423543",
      ownerId: "gfdo5h43524v5-424vfr2vt4t",
      ownerEmail: "123@tut.by",
      ownerName: "Dzmitry Hlushak",
      photoUrl: "",
      text: "Greate work, Dzmitry!",
      createdAt: '17.10.2021, 10:00:08',
      lastUpdate: '17.10.2021, 10:00:08'
    },
    {
      id: "4354354-542fdsafds3543",
      ownerId: "gfdo5h43fdasfdsafds524v5-424vfr2vt4t",
      ownerEmail: "1fdsafdsfds23@tut.by",
      ownerName: "John Doe",
      photoUrl: "",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n\n Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      createdAt: '17.10.2021, 11:32:08',
      lastUpdate: '17.10.2021, 11:32:08'
    }
  ],
  displayComments: true,
  photoBy: 'Dzmitry Hlushak'
};

// interface CurrentArticleParams {
//   id: string
// }


const CurrentArticle: FC = () => {
  // const dispatch = useDispatch();
  const { user } = useTypedSelector(state => state.auth);
  // const { id } = useParams<CurrentArticleParams>();
  // const [article, setArticle] = useState<IArticle | null>(null);

  // const ref = firebase.firestore().collection('articles').doc('fZGoUeMHbbdic0vxw7TM');
  // let unsbscribe: () => void;
  
  // const getCurrentArticeData  = () => {
  //   unsbscribe =  ref.onSnapshot((doc:any) => {
  //     setArticle(doc.data())
  //   })
  // }
  
  // useEffect(() => {
  //   if(user) {
  //     getCurrentArticeData()
  //   }
  //   return unsbscribe;
  // }, [])
  
  
  return (
    <div className="primary-container articles scroll-container">
      <div className="container">
        {
          !user ? <SignIn/> : (
            <>
              <header className="articles__header">
                <h1 className="articles__title">tfl articles</h1>
              </header>
              <div className="articles__container">
                <div className="articles__content">
                  <Art article={article}/>
                </div>
                <aside className="articles__sidebar">
                  <Tournaments disTournament/>
                </aside>
              </div>
            </>
          )
        }
      </div>
      <Footer/>
    </div>
  )
}

export default CurrentArticle;