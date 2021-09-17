import React, {FC, useState} from 'react';
import useForm from '../../../../hooks/useForm';
import { v4 as uuidv4 } from 'uuid';
import { storage } from '../../../../firebase';
import "./ArticleForm.scss";
import { articleValidation } from '../../../../helpers/validation';
import { delay, storageError } from '../../../../helpers/helpers';
import CharacterCounter from '../../../common/CharacterCounter/CharacterCounter';
import RadioInput from '../../../common/CustomInputs/RadioInput';
import ErrorModal from '../../../common/ErrorModal/ErrorModal';
import { IArticle } from '../../../../types/articles';
import { commentsItemsData, statusItemsData, textareaFieldsData } from './formFieldsData';
import TextareaField from './TextareaField/TextareaField';
import OperationField from './OperationField/OperationField';
import UploadPhotoField from './UploadPhotoField/UploadPhotoField';

interface ArticleFormProps {
  editArticleForm?: boolean // If true then displays the article edit form
  articleData?: IArticle | null // Object with data for editing an article
  hideAdminModal?: () => void
}

const ArticleForm :FC<ArticleFormProps>= ({editArticleForm, articleData, hideAdminModal}) => {
  const [checkedStatus, setCheckedStatus] = useState(articleData?.status || 'normal');
  let serverCommments = editArticleForm ? articleData?.displayComments : true;
  const [displayCheckedComments, setDisplayCheckedComments] = useState<any>(serverCommments);

  const [photo, setPhoto] = useState<null | File>(null);
  const [photoName, setPhotoName] = useState('');

  const [startUpload, setStartUpload] = useState(false);
  const [isSuccessfulUpload, setIsSuccessfulUpload] = useState(false);

  const [errorModal, setErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  let formState = {
    title: editArticleForm ?  articleData?.title : '',
    shortDesc: editArticleForm ?  articleData?.shortDesc :'',
    description: editArticleForm ?  articleData?.desc : '',
    photoUrl: editArticleForm ?  articleData?.imgSrc : '',
    photoBy: editArticleForm ?  articleData?.photoBy : "",
    author: editArticleForm ?  articleData?.articleAuthor : ''
  }

  const {values, setValues, errors, setErrors, handleChange} = useForm(formState);

  const resetForm = () => {
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

  const addNewArticle = (e:React.FormEvent<HTMLFormElement>) => {
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
      resetForm();
    } else {
      setErrors(articleValidation(values));
    }
  }

  const editArticle = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Updated!');
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

  const resetFormButton = () => {
    resetForm()
    setErrors({
      ...errors,
      title: '',
      shortDesc: '',
      description: '',
      photoUrl: '',
      photoBy: '',
      author: ''
    })
  }
  

  return (
    <>
      {errorModal ? <ErrorModal errorMessage={errorMessage} setErrorModal={setErrorModal}/> : null}
      <form className="operation" onSubmit={editArticleForm ? editArticle : addNewArticle}>
        {
          textareaFieldsData.map((elem) => <TextareaField
            key={elem.id}
            field={elem}
            value={values}
            errors={errors}
            handleChange={handleChange}
          />)
        }
        <div className="operation__row operation__row_multi" >
          <OperationField name="Article status">
            {statusItemsData.map((item, ind) => <RadioInput
                key={ind}
                radioName="status"
                labelText={item}
                checkedValue={checkedStatus}
                valueElem={item}
                setValue={() => setCheckedStatus(item)}
              />)}
          </OperationField>
          <OperationField name="Comment">
            {commentsItemsData.map(elem => <RadioInput
              key={elem.id}
              radioName='comment'
              labelText={elem.title}
              checkedValue={displayCheckedComments}
              valueElem={elem.value}
              setValue={() => setDisplayCheckedComments(elem.value)}
            />)}
          </OperationField>
          <OperationField name="Upload photo">
            <UploadPhotoField
              photo={photo}
              photoName={photoName}
              isSuccessfulUpload={isSuccessfulUpload}
              startUpload={startUpload}
              uploadImage={uploadImage}
              setPhoto={setPhoto}
              setPhotoName={setPhotoName}
              setErrorModal={setErrorModal}
              setErrorMessage={setErrorMessage}
            />
          </OperationField>
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
          {editArticleForm ? (
            <div className="operation__button operation__button_close" onClick={hideAdminModal}>Close</div>
          ) : null}
          {!editArticleForm ? (
            <div className="operation__button operation__button_reset" onClick={resetFormButton}>Reset Form</div>
          ) : null}
          <button className="operation__button" type="submit">
            {editArticleForm ? "Update article" : "Publish article"}
          </button>
        </div>
      </form>
    </>
  )
}

export default ArticleForm;