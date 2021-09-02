import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import "./AdminPanel.scss";

const AdminPanel = () => {
  const [isHiddenSidebar, setIsHiddenSidebar] = useState(false);

  const [title, setTitle] = useState('');  
  const [shortDesc, setShortDesc] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');
  const [checkedStatus, setCheckedStatus] = useState('normal');
  const [displayCheckedComments, setDisplayCheckedComments] = useState(true);

  const statusItems = ['normal', 'high', 'hot'];
  const commentsValueItems = [
    {id: 1, value: true, title: 'Display'},
    {id: 2, value: false, title: 'Hide'},
  ];

  const resetForm = () => {
    setTitle('');
    setShortDesc('');
    setDescription('');
    setAuthor('');
    setCheckedStatus('normal');
    setDisplayCheckedComments(true);
  }

  const toggleSidebar = () => {
    setIsHiddenSidebar(!isHiddenSidebar);
  }

  const addArticleHandler = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let article = {
      id: uuidv4(),
      title,
      shortDesc,
      desc: description,
      imgSrc: '',
      articleAuthor: author,
      status: checkedStatus,
      public: true,
      createdAt: new Date().toLocaleString(), // timestam с сервера Firebase 
      lastUpdate: new Date().toLocaleString(), // timestam с сервера Firebase 
      comments: [],
      displayComments: displayCheckedComments
    }
    console.log(article);
    resetForm()
  }
  
  return (
    <div className="primary-container admin">

      <aside className={isHiddenSidebar ? "admin__sidebar admin__sidebar_hide" : "admin__sidebar"}>
        <div className="toggle-sidebar" onClick={toggleSidebar}>
          <i className="fas fa-chevron-left toggle-sidebar-icon"></i>
        </div>
        <div className="admin__name" title="Administrator">
          <i className="fas fa-user-shield admin__icon"></i>
          <span>Dzmitry Hlushak</span>
        </div>
        <div className="admin__elems">
          <div className="admin__elem">
            <div className="admin__elem-wrap">
              <i className="far fa-newspaper admin__elem-icon"></i>
            </div>
            <span className="admin__elem-text">Current articles</span>
          </div>
          <div className="admin__elem">
            <div className="admin__elem-wrap">
              <i className="fas fa-plus admin__elem-icon"></i>
            </div>
            <span className="admin__elem-text">New article</span>
          </div>
        </div>
      </aside>

      <section className="admin__content">
        
        <section className="form-control">
          <form className="operation" onSubmit={addArticleHandler}>
            <div className="operation__row">
              <div className="operation__title">
                Article title
              </div>
              <textarea 
                value={title}
                name="title" 
                className="operation__textarea operation__textarea_title"
                placeholder="Type the title of the article..."
                autoFocus
                onChange={(e) => setTitle(e.target.value)}
              ></textarea>
              {/* <div className="operation__error">Something wrong. Please try a little later</div> */}
            </div>
            <div className="operation__row">
              <div className="operation__title">
                Short article description
              </div>
              <textarea 
                value={shortDesc}
                name="short-description" 
                className="operation__textarea operation__textarea_shortdesc"
                placeholder="Type a short description of the article..."
                onChange={(e) => setShortDesc(e.target.value)}
              ></textarea>
              {/* <div className="operation__error">Something wrong. Please try a little later. Maybe we have very important error. Firebase error!</div> */}
            </div>
            <div className="operation__row">
              <div className="operation__title">
                Article description
              </div>
              <textarea 
                value={description}
                name="description"
                className="operation__textarea operation__textarea_description"
                placeholder="Type a full description of the article..."
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
              {/* <div className="operation__error">Something wrong. Please try a little later. Maybe we have very important error. Firebase error!</div> */}
            </div>
            <div className="operation__row">
              <div className="operation__field">
                <span className="operation__sup">Author</span>
                <input 
                  value={author}
                  type="text"
                  name="author" 
                  className="operation__input-text"
                  placeholder="Type the author..."
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </div>
              <div className="operation__field">
                <span className="operation__sup">Article status</span>
                {statusItems.map((item, ind) => {
                  return (
                    <label key={ind}>
                      <input
                        type="radio"
                        checked={checkedStatus === item}
                        name="status"
                        onChange={() => setCheckedStatus(item)}
                      />{item}
                    </label>    
                  )
                })}
              </div>
              <div className="operation__field">
                <span className="operation__sup">Display comments</span>
                {commentsValueItems.map(elem => {
                  return (
                    <label key={elem.id}>
                      <input
                        type="radio"
                        name="comment"
                        checked={displayCheckedComments === elem.value}
                        onChange={() => setDisplayCheckedComments(elem.value)}
                      />{elem.title}
                    </label>
                  )
                })}
              </div>
              <div className="operation__field">
                <span className="operation__sup">Download image</span>
                <input type="file" name="Hello" accept="jpg,png,gif"/>
              </div>
              {/* <div className="operation__error">Something wrong. Please try a little later. Maybe we have very important error. Firebase error!</div> */}
            </div>
            <div className="operation__row operation__row_buttons">
              <button className="operation__button">Add article</button>
            </div>
          </form>
        </section>

      </section>
    </div>
  )
}

export default AdminPanel;