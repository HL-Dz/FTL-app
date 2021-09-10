import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { storage } from '../../../firebase';
import { delay, storageError } from '../../../helpers/helpers';
import { articleValidation } from '../../../helpers/validation';
import useForm from '../../../hooks/useForm';
import CharacterCounter from '../../common/CharacterCounter/CharacterCounter';
import RadioInput from '../../common/CustomInputs/RadioInput';
import ErrorModal from '../../common/ErrorModal/ErrorModal';
import "./AdminPanel.scss";
import AdminSidebar from './AdminSidebar/AdminSidebar';

const AdminPanel = () => {
  const [isHiddenSidebar, setIsHiddenSidebar] = useState(false);

  const [checkedStatus, setCheckedStatus] = useState('normal');
  const [displayCheckedComments, setDisplayCheckedComments] = useState(true);

  const [photo, setPhoto] = useState<null | File>(null);
  const [photoName, setPhotoName] = useState('');

  const [startUpload, setStartUpload] = useState(false);
  const [isSuccessfulUpload, setIsSuccessfulUpload] = useState(false);

  const [errorModal, setErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const statusItems = ['normal', 'high', 'hot'];
  const commentsValueItems = [
    {id: 1, value: true, title: 'Display'},
    {id: 2, value: false, title: 'Hide'},
  ];

  let formState = {
    title: '',
    shortDesc: '',
    description: '',
    photoUrl: '',
    photoBy: '',
    author: ''
  }

  const {values, setValues, errors, setErrors, handleChange} = useForm(formState);

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

  function resetForm () {
    setValues({
      ...values,
      title: '',
      shortDesc: '',
      description: '',
      photoUrl: '',
      photoBy: '',
      author: ''
    })
    setCheckedStatus('normal');
    setDisplayCheckedComments(true);
    setPhoto(null);
    setPhotoName('');
    setIsSuccessfulUpload(false);
  }

  const toggleSidebar = () => {
    setIsHiddenSidebar(!isHiddenSidebar);
  }

  const addArticleHandler = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let article = {
      id: uuidv4(),
      title: values.title,
      shortDesc: values.shortDesc,
      desc: values.description,
      imgSrc: values.photoUrl,
      articleAuthor: values.author,
      status: checkedStatus,
      public: true,
      createdAt: new Date().toLocaleString(), // timestam с сервера Firebase 
      lastUpdate: new Date().toLocaleString(), // timestam с сервера Firebase 
      comments: [],
      displayComments: displayCheckedComments,
      photoBy: values.photoBy,
    }

    setErrors(articleValidation(values));
    if(Object.keys(articleValidation(values)).length === 0) {
      console.log(article);
      resetForm();
    } else {
      setErrors(articleValidation(values));
    }
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
              setValues({...values, photoUrl: url});
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
                <CharacterCounter value={values.title} min={20} max={300}/>
              </div>
              <textarea 
                value={values.title}
                name="title" 
                className="operation__textarea operation__textarea_title"
                placeholder="Type the title of the article..."
                autoFocus
                onChange={handleChange}
              ></textarea>
              <div className="operation__error">{errors.title}</div>
            </div>
            <div className="operation__row">
              <div className="operation__title">
                Short article description
                <CharacterCounter value={values.shortDesc} min={20} max={500}/>
              </div>
              <textarea 
                value={values.shortDesc}
                name="shortDesc" 
                className="operation__textarea operation__textarea_shortdesc"
                placeholder="Type a short description of the article..."
                onChange={handleChange}
              ></textarea>
              <div className="operation__error">{errors.shortDesc}</div>
            </div>
            <div className="operation__row">
              <div className="operation__title">
                Article description
                <CharacterCounter value={values.description} min={50} max={20000}/>
              </div>
              <textarea 
                value={values.description}
                name="description"
                className="operation__textarea operation__textarea_description"
                placeholder="Type a full description of the article..."
                onChange={handleChange}
              ></textarea>
              <div className="operation__error">{errors.description}</div>
            </div>
            <div className="operation__row operation__row_multi" >
              <div className="operation__field">
                <div className="operation__field-wrap">
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
              </div>
              <div className="operation__field">
                <div className="operation__field-wrap">
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
              </div>
              <div className="operation__field">
                <div className="operation__field-wrap">
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
              </div>
              <div className="operation__field">
                <div className="operation__field-wrap">
                  <span className="operation__sup">Photo URL</span>
                  <input 
                    value={values.photoUrl}
                    type="text"
                    name="photoUrl"
                    className="operation__input-text"
                    placeholder="Type the photo URL..."
                    onChange={handleChange}
                    title={values.photoUrl}
                  />
                </div>
                <div className="operation__error">{errors.photoUrl}</div>
              </div>
              <div className="operation__field">
                <div className="operation__field-wrap">
                  <span className="operation__sup">
                    Photo by <CharacterCounter value={values.photoBy} min={5} max={50}/>
                  </span>
                  <input 
                    value={values.photoBy}
                    type="text"
                    name="photoBy"
                    className="operation__input-text"
                    placeholder="Owner copyright..."
                    onChange={handleChange}
                  />
                </div>
                <div className="operation__error">{errors.photoBy}</div>
              </div>
              <div className="operation__field">
                <div className="operation__field-wrap">
                  <span className="operation__sup">
                    Article author <CharacterCounter value={values.author} min={5} max={50}/>
                  </span>
                  <input 
                    value={values.author}
                    type="text"
                    name="author"
                    className="operation__input-text"
                    placeholder="Type the article author..."
                    onChange={handleChange}
                  />
                </div>
                <div className="operation__error">{errors.author}</div>
              </div>
            </div>
            <div className="operation__row operation__row_buttons">
              <button className="operation__button" type="submit">Publish article</button>
            </div>
          </form>
        </section>

      </section>
    </div>
  )
}

export default AdminPanel;