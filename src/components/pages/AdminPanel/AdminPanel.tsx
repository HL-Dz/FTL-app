import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { storage } from '../../../firebase';
import { delay, storageError } from '../../../helpers/helpers';
import RadioInput from '../../common/CustomInputs/RadioInput';
import ErrorModal from '../../common/ErrorModal/ErrorModal';
import "./AdminPanel.scss";
import AdminSidebar from './AdminSidebar/AdminSidebar';

const AdminPanel = () => {
  const [isHiddenSidebar, setIsHiddenSidebar] = useState(false);

  const [title, setTitle] = useState('');  
  const [shortDesc, setShortDesc] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');
  const [checkedStatus, setCheckedStatus] = useState('normal');
  const [displayCheckedComments, setDisplayCheckedComments] = useState(true);

  const [photo, setPhoto] = useState<null | File>(null);
  const [photoName, setPhotoName] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const [photoBy, setPhotoBy] = useState('');

  const [startUpload, setStartUpload] = useState(false);
  const [isSuccessfulUpload, setIsSuccessfulUpload] = useState(false);

  const [errorModal, setErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const statusItems = ['normal', 'high', 'hot'];
  const commentsValueItems = [
    {id: 1, value: true, title: 'Display'},
    {id: 2, value: false, title: 'Hide'},
  ];


  const handleFileChange = (e: React.SyntheticEvent) => {
    let target = e.target as HTMLInputElement;
    if(target.files?.[0]) {
    let alowedTypes = target.files?.[0].type === 'image/jpeg' ||
                     target.files?.[0].type === 'image.jpg' ||
                     target.files?.[0].type === 'image/png' ||
                     target.files?.[0].type === 'image/gif';
      if(alowedTypes) {
        setPhoto(target.files[0]);
        setPhotoName(target.files[0].name)
      } else {
        setErrorModal(true);
        setErrorMessage('Only images can be upload (jpeg | jpg | png | gif).');
        return;
      }
    }
  }

  const resetForm = () => {
    setTitle('');
    setShortDesc('');
    setDescription('');
    setAuthor('');
    setCheckedStatus('normal');
    setDisplayCheckedComments(true);
    setPhoto(null);
    setPhotoName('');
    setPhotoUrl('');
    setPhotoBy('');
    setIsSuccessfulUpload(false);
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
      imgSrc: photoUrl,
      articleAuthor: author,
      status: checkedStatus,
      public: true,
      createdAt: new Date().toLocaleString(), // timestam с сервера Firebase 
      lastUpdate: new Date().toLocaleString(), // timestam с сервера Firebase 
      comments: [],
      displayComments: displayCheckedComments,
      photoBy: photoBy
    }
    console.log(article);
    console.log(photo);
    resetForm()
  }

  const uploadImage = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if(photo) {
      setStartUpload(true);
      await delay(2000);
      const uploadTask = storage.ref(`images/${photo?.name}`).put(photo);
      uploadTask.on(
        "state_changed",
        snapshot => {

        },
        error => {
          let errorMessage = storageError(error.code);
          setStartUpload(false);
          setErrorMessage(errorMessage);
          setErrorModal(true);
          setPhoto(null);
          setPhotoName('');
        },
        () => {
          storage
            .ref('images')
            .child(photo.name)
            .getDownloadURL()
            .then(url => {
              setStartUpload(false);
              setIsSuccessfulUpload(true);
              setPhotoUrl(url);
            })
        }
      )
    }
  }
  
  return (
    <div className="primary-container admin">
      {errorModal ? <ErrorModal errorMessage={errorMessage} setErrorModal={setErrorModal}/> : null}
      <AdminSidebar isHiddenSidebar={isHiddenSidebar} toggleSidebar={toggleSidebar}/>
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
            <div className="operation__row operation__row_multi" >
              <div className="operation__field">
                <span className="operation__sup">Article status</span>
                {statusItems.map((item, ind) => <RadioInput
                  key={ind}
                  radioName="status"
                  labelText={item}
                  checkedValue={checkedStatus}
                  valueElem={item}
                  setValue={() => setCheckedStatus(item)}
                />)}
              </div>
              <div className="operation__field">
                <span className="operation__sup">Comments</span>
                {commentsValueItems.map(elem => <RadioInput
                    key={elem.id}
                    radioName='comment'
                    labelText={elem.title}
                    checkedValue={displayCheckedComments}
                    valueElem={elem.value}
                    setValue={() => setDisplayCheckedComments(elem.value)}
                  />)}
              </div>
              <div className="operation__field">
                <span className="operation__sup">Upload photo</span>
                <label className="label-file">
                  <input 
                    className="file-input" 
                    onChange={handleFileChange} 
                    type="file" 
                    accept="image/png,image/jpg,image/jpeg,image/gif"
                  />
                  <span className="file">
                    <span className="file__text">{!photoName ? 'Choose a file...' : photoName}</span>
                    <i className={`fas fa-cloud-download-alt ${photoName ? 'file__icon file__icon_active' : 'file__icon'}`}></i>
                  </span>
                </label>
                {
                  photo ? (
                    <div className="upload" title={isSuccessfulUpload ? 'Successful finish upload' : "Start upload"}>
                      <button 
                        className={`${startUpload ? 'upload__button upload__button_load' : 'upload__button'} fas fa-server`}
                        onClick={uploadImage}
                        disabled={(startUpload || isSuccessfulUpload) ? true : false}
                      ></button>
                      <i className={`fas fa-arrow-down ${startUpload ? "upload__start upload__start_active" : "upload__start"}`}></i>
                      {isSuccessfulUpload ? <i className="fas fa-check upload__success"></i> :  null}
                    </div>
                  ) : null
                }
              </div>
              <div className="operation__field">
                <span className="operation__sup">Photo URL</span>
                <input 
                  value={photoUrl}
                  type="text"
                  name="photoUrl"
                  className="operation__input-text"
                  placeholder="Type the photo URL..."
                  onChange={(e) => setPhotoUrl(e.target.value)}
                  title={photoUrl}
                />
              </div>
              <div className="operation__field">
                <span className="operation__sup">Photo by:</span>
                <input 
                  value={photoBy}
                  type="text"
                  name="photoAuthor"
                  className="operation__input-text"
                  placeholder="Owner copyright..."
                  onChange={(e) => setPhotoBy(e.target.value)}
                />
              </div>
              <div className="operation__field">
                <span className="operation__sup">Article author</span>
                <input 
                  value={author}
                  type="text"
                  name="author"
                  className="operation__input-text"
                  placeholder="Type the article author..."
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </div>
            </div>
            <div className="operation__row operation__row_buttons">
              <button className="operation__button">Publish article</button>
            </div>
          </form>
        </section>

      </section>
    </div>
  )
}

export default AdminPanel;