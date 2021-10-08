import { delay } from './../helpers/helpers';
import { Dispatch } from 'redux';
import { 
  IArticle,
  ArticleActionTypes,
  ArticlesAction,
  SetArticlesAction,
  ToggleArticleLoadingAction,
  SetArticleErrorModalAction,
  SetArticleErrorMessageAction,
  DeleteArticleAction,
  SetCompletedTaskAction,
  SetCompletedTaskMessageAction,
  UpdateArticleAction,
  SetExistArticleAction,
  SetArticlePreviewAction,
  SetArticlePreviewError,
  ResetArticlePreviewAction,
  SetArticlePreviewLoadingAction
} from './../types/articles';
import firebase from '../firebase';

const ref = firebase.firestore().collection('articles');

let initialState = {
  articles: [] as Array<IArticle> | [],
  articlePreview: null as IArticle | null,
  articlePreviewError: false,
  articlePreviewLoading: false,
  updatedArticle: null as IArticle | null,
  isLoading: false,
  completedTask: false,
  completedTaskMessage: '',
  errorModal: false,
  errorMessage: '',
  isExistArticle: true,
}

type ArticleInitialState = typeof initialState;


const articlesReduer = (state = initialState, action: ArticlesAction): ArticleInitialState => {
  switch(action.type) {
      case ArticleActionTypes.SET_ARTICLES:
        return {
          ...state,
          articles: action.articles
        }
      case ArticleActionTypes.SET_ARTICLE_PREVIEW:
        return {
          ...state,
          articlePreview: action.articlePreview
        }
      case ArticleActionTypes.SET_ARTICLE_PREVIEW_LOADING:
        return {
          ...state,
          articlePreviewLoading: action.articlePreviewLoading
        }
      case ArticleActionTypes.SET_ARTICLE_PREVIEW_ERROR:
        return {
          ...state,
          articlePreviewError: action.articlePreviewError
        }
      case ArticleActionTypes.UPDATE_ARTICLE:
        return {
          ...state,
          articles: state.articles.map(elem => {
            if(elem.articleUrl !== action.updatedArticle.articleUrl) {
              return elem;
            } else {
              return {...elem, ...action.updatedArticle}; // Вопросы по данному кейсу!!!!!!
            }
          })
        }
      case ArticleActionTypes.DELETE_ARTICLE:
        return {
          ...state,
          articles: state.articles.filter(elem => elem.articleUrl !== action.articleUrl)
        }
      case ArticleActionTypes.TOGGLE_ARTICLE_LOADING:
        return {
          ...state,
          isLoading: action.isLoading
        }
      case ArticleActionTypes.SET_COMPLETED_TASK:
        return {
          ...state,
          completedTask: action.completedTask
        }
      case ArticleActionTypes.SET_COMPLETED_TASK_MESSAGE:
        return {
          ...state,
          completedTaskMessage: action.completedTaskMessage
        }
      case ArticleActionTypes.SET_ARTICLE_ERROR_MODAL:
        return {
          ...state,
          errorModal: action.errorModal
        }
      case ArticleActionTypes.SET_ARTICLE_ERROR_MESSAGE:
        return {
          ...state,
          errorMessage: action.errorMessage
        }
      case ArticleActionTypes.SET_EXIST_ARTICLE:
        return {
          ...state,
          isExistArticle: action.isExistArticle
        }
        case ArticleActionTypes.RESET_ARTICLES:
          return {
            ...state,
            articles: []
          }
        case ArticleActionTypes.RESET_ARTICLE_PREVIEW:
          return {
            ...state,
            articlePreview: null,
          }
      default:
        return state
  }
}


export const setArticles = (articles: Array<IArticle> | []): SetArticlesAction => ({
  type: ArticleActionTypes.SET_ARTICLES,
  articles
});
export const setArticlePreview = (articlePreview: IArticle): SetArticlePreviewAction => ({
  type: ArticleActionTypes.SET_ARTICLE_PREVIEW,
  articlePreview
});
export const setArticlePreviewLoading = (articlePreviewLoading: boolean): SetArticlePreviewLoadingAction => ({
  type: ArticleActionTypes.SET_ARTICLE_PREVIEW_LOADING,
  articlePreviewLoading
});
export const setArticlePreviewError = (articlePreviewError: boolean): SetArticlePreviewError => ({
  type: ArticleActionTypes.SET_ARTICLE_PREVIEW_ERROR,
  articlePreviewError
});
export const updateArticle = (updatedArticle: IArticle): UpdateArticleAction => ({
  type: ArticleActionTypes.UPDATE_ARTICLE,
  updatedArticle
});
export const deleteArticle = (articleUrl: string): DeleteArticleAction => ({
  type: ArticleActionTypes.DELETE_ARTICLE,
  articleUrl
})
export const toggleArticleLoading = (isLoading: boolean): ToggleArticleLoadingAction => ({
  type: ArticleActionTypes.TOGGLE_ARTICLE_LOADING,
  isLoading
});
export const setCompletedTask = (completedTask: boolean): SetCompletedTaskAction => ({
  type: ArticleActionTypes.SET_COMPLETED_TASK, completedTask
});
export const setCompletedTaskMessage = (completedTaskMessage: string): SetCompletedTaskMessageAction => ({
  type: ArticleActionTypes.SET_COMPLETED_TASK_MESSAGE,
  completedTaskMessage
});
export const setArticleErrorModal = (errorModal: boolean): SetArticleErrorModalAction => ({
  type: ArticleActionTypes.SET_ARTICLE_ERROR_MODAL, errorModal
});
export const setArticleErrorMessage = (errorMessage: string): SetArticleErrorMessageAction => ({
  type: ArticleActionTypes.SET_ARTICLE_ERROR_MESSAGE,
  errorMessage
});
export  const setExistArticle = (isExistArticle: boolean): SetExistArticleAction => ({
  type: ArticleActionTypes.SET_EXIST_ARTICLE,
  isExistArticle
});
export const resetArticles = () => ({
  type: ArticleActionTypes.RESET_ARTICLES
})
export const resetArticlePreview = (): ResetArticlePreviewAction => ({
  type: ArticleActionTypes.RESET_ARTICLE_PREVIEW
})


// GET ARTICLES FROM SERVER
export const getArticlesFromServer = () => async (dispatch: Dispatch<ArticlesAction>) => {
  dispatch(setArticleErrorMessage(''))
  dispatch(toggleArticleLoading(true));
  await delay(300);
  ref.get()
  .then(async (item) => {
    let articles = item.docs.map((doc:any) => doc.data());
    dispatch(setArticles(articles));
    await delay(300);
    dispatch(toggleArticleLoading(false));
  })
  .catch(async (err: any) => {
    dispatch(setArticleErrorModal(true));
    dispatch(setArticleErrorMessage(err.message))
    await delay(500);
    dispatch(toggleArticleLoading(false));
  })
}

// GET ARTICLE PREVIEW FROM SERVER
export const getArticlePreviewFromServer = (article: IArticle) => async (dispatch: Dispatch<ArticlesAction>) => {
  dispatch(resetArticlePreview());
  dispatch(setArticlePreviewError(false));
  dispatch(setExistArticle(true))
  dispatch(setArticleErrorMessage(''))
  dispatch(setArticlePreviewLoading(true));
  await delay(700);
  if(article) {
    ref.doc(article.articleUrl).get()
      .then((docSnapshot) => {
        if(docSnapshot.exists) {
          ref
          .doc(article.articleUrl)
          .onSnapshot((doc: any) => {
              dispatch(setArticlePreview(doc.data()));
              dispatch(setArticlePreviewLoading(false));
              dispatch(setArticlePreviewError(false));
            },
            (error) => {
              dispatch(setArticlePreviewLoading(false));
              dispatch(setArticlePreviewError(true));
              dispatch(setArticleErrorMessage(error.message))
            }
          )
        } else {
          dispatch(setArticlePreviewLoading(false));
          dispatch(setExistArticle(false))
          dispatch(setArticleErrorMessage('No such document exists...'));
        }
      })
      .catch(error => {
        dispatch(setArticlePreviewLoading(false));
        dispatch(setArticlePreviewError(true));
        dispatch(setArticleErrorMessage(error.message));
      })
  }
}


// ADD ARTICLE TO SERVER
export const addArticleToServer = (article:IArticle, callback: () => void) => async (dispatch: Dispatch<ArticlesAction>) => {
  dispatch(toggleArticleLoading(true));
  await delay(500);
  ref
    .doc(article.articleUrl)
    .set(article)
    .then(async () => {
      callback()
      dispatch(setCompletedTask(true));
      dispatch(setCompletedTaskMessage('Article has been published.'))
      await delay(490);
      dispatch(toggleArticleLoading(false));
    })
    .catch(async (err) => {
      dispatch(setArticleErrorModal(true));
      dispatch(setArticleErrorMessage(err.message))
      await delay(500);
      dispatch(toggleArticleLoading(false));
    })
}

// UPDATE ARTICLE 
export const updateArticleOnTheServer = (currentArticle:IArticle, updatedArticle:IArticle) => async (dispatch: Dispatch<ArticlesAction>) => {
  dispatch(toggleArticleLoading(true));
  await delay(500);
  ref
  .doc(currentArticle.articleUrl)
  .update(updatedArticle)
  .then(async () => {
    if(currentArticle) {
      dispatch(updateArticle(updatedArticle))
      dispatch(setCompletedTask(true));
      dispatch(setCompletedTaskMessage('The article has been updated.'));
      await delay(500);
      dispatch(toggleArticleLoading(false));
    }
  })
  .catch(async (err) => {
    dispatch(setArticleErrorModal(true));
    dispatch(setArticleErrorMessage(err.message))
    await delay(500);
    dispatch(toggleArticleLoading(false));
  })
}

// DELETE ARTICLE FROM SERVER
export const deleteArticleFromServer = (articleUrl: string) => async (dispatch: Dispatch<ArticlesAction>) => {
  dispatch(toggleArticleLoading(true));
  await delay(500);
  ref
  .doc(articleUrl)
  .delete()
  .then(async () => {
    dispatch(deleteArticle(articleUrl));
    await delay(500);
    dispatch(toggleArticleLoading(false));
  })
  .catch(async (err: any) => {
    dispatch(setArticleErrorModal(true));
    if(err.code === 'permission-denied') {
      dispatch(setArticleErrorMessage("You can't delete articles. No access."))
    } else {
      dispatch(setArticleErrorMessage(err.message))
    }
    await delay(500);
    dispatch(toggleArticleLoading(false));
  })
}


export default articlesReduer;