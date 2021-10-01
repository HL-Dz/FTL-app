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
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import firebase from '../../../../firebase';
import UniversalLoader from '../../../common/UniversalLoader/UniversalLoader';

interface ArticleFormProps {
  editArticleForm?: boolean // If true then displays the article edit form
  articleData?: IArticle | null // Object with data for editing an article
  hideAdminModal?: () => void
  setAdminArticles?: any
  adminArticles?: Array<IArticle>
}

const ArticleForm :FC<ArticleFormProps>= ({editArticleForm, articleData, hideAdminModal, setAdminArticles, adminArticles}) => {
  const { user } = useTypedSelector(state => state.auth);

  const [checkedStatus, setCheckedStatus] = useState(articleData?.status || 'normal');
  let serverCommments = editArticleForm ? articleData?.displayComments : true;
  const [displayCheckedComments, setDisplayCheckedComments] = useState<any>(serverCommments);

  const [photo, setPhoto] = useState<null | File>(null);
  const [photoName, setPhotoName] = useState('');

  const [startUpload, setStartUpload] = useState(false);
  const [isSuccessfulUpload, setIsSuccessfulUpload] = useState(false);

  const [errorModal, setErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  let formState = {
    title: editArticleForm ?  articleData?.title : '',
    shortDesc: editArticleForm ?  articleData?.shortDesc :'',
    description: editArticleForm ?  articleData?.desc : '',
    photoUrl: editArticleForm ?  articleData?.imgSrc : '',
    photoBy: editArticleForm ?  articleData?.photoBy : "",
    author: editArticleForm ?  articleData?.articleAuthorName : ''
  }

  const {values, setValues, errors, setErrors, handleChange} = useForm(formState);
  const ref = firebase.firestore().collection('articles');

  const resetForm = () => {
    resetValues();
    setCheckedStatus('normal');
    setDisplayCheckedComments(true);
    setPhoto(null);
    setPhotoName('');
    setIsSuccessfulUpload(false);
  }

  const addNewArticle = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const setArticleUrl = (id: string): string => {
      let titleValue = `${values.title.trim().toLowerCase().slice(0,30)}`;
      let finishValue = titleValue.replace(/[\s&?!#$%^*()+=/><.`~]/gi, '-');
      let chars = id.slice(0, 5);
      let result = `${finishValue}-${chars}`;
      return result;
    }

    let articleId = uuidv4();
    let articleOwnerId = user ? user.uid : '';

    let article = {
      id: articleId,
      articleUrl: setArticleUrl(articleId),
      articleAuthorId: articleOwnerId,
      articleAuthorName: values.author,
      title: values.title,
      shortDesc: values.shortDesc,
      desc: values.description,
      imgSrc: values.photoUrl,
      status: checkedStatus,
      public: true,
      createdAt: new Date().toLocaleString(), // timestam с сервера Firebase 
      lastUpdated: new Date().toLocaleString(), // timestam с сервера Firebase 
      comments: [],
      displayComments: displayCheckedComments,
      photoBy: values.photoBy,
    }

    if(Object.keys(articleValidation(values)).length === 0) {
      resetErrors()
      setIsLoading(true);
      await delay(700);
      ref
        .doc(article.articleUrl)
        .set(article)
        .then(async () => {
          resetFormButton();
          setIsLoading(false);
          alert('Article published');
        })
        .catch(async (err) => {
          setErrorModal(true);
          setErrorMessage(err.message)
          await delay(500);
          setIsLoading(false);
        })
    } else {
      setErrors(articleValidation(values));
    }
  }

  const editArticle = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let updatedArticle = {
      id: articleData?.id,
      articleUrl: articleData?.articleUrl,
      articleAuthorId: articleData?.articleAuthorId,
      articleAuthorName: values.author,
      title: values.title,
      shortDesc: values.shortDesc,
      desc: values.description,
      imgSrc: values.photoUrl,
      status: checkedStatus,
      public: true,
      createdAt: articleData?.createdAt, // timestam с сервера Firebase 
      lastUpdated: new Date().toLocaleString(), // timestam с сервера Firebase 
      comments: [],
      displayComments: displayCheckedComments,
      photoBy: values.photoBy,
    }

    if(Object.keys(articleValidation(values)).length === 0) {
      resetErrors()
      setIsLoading(true);
      await delay(500);
      ref
      .doc(articleData?.articleUrl)
      .update(updatedArticle)
      .then(() => {
        if(adminArticles) {
          let updatedArr =  adminArticles.map((elem: IArticle) => {
            if(elem.articleUrl !== updatedArticle.articleUrl) {
              return elem;
            } else {
              return updatedArticle;
            }
          })
          setAdminArticles(updatedArr);
          setIsLoading(false);
        }
      })
      .catch(async (err) => {
        setErrorModal(true);
        setErrorMessage(err.message)
        await delay(500);
        setIsLoading(false);
      })
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

  const resetFormButton = () => {
    resetForm()
    resetErrors();
  }

  const resetErrors = () => {
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

  const resetValues = () => {
    setValues({
      ...values,
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
      {
      isLoading ? 
        <div className="app-loading">
          <UniversalLoader/>
        </div> : null
      }
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
          <OperationField name="Comments">
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
            <div className="operation__button operation__button_close" onClick={hideAdminModal}><span>Close</span></div>
          ) : null}
          {!editArticleForm ? (
            <div className="operation__button operation__button_reset" onClick={resetFormButton}><span>Reset Form</span></div>
          ) : null}
          <button className="operation__button" type="submit">
            <span>
            {editArticleForm ? "Update article" : "Publish article"}
            </span>
          </button>
        </div>
      </form>
    </>
  )
}

export default ArticleForm;