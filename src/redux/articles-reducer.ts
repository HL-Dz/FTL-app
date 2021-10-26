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
  ResetArticlesAction,
  SetSearchedArticleAction,
  ResetSearchedArticleAction,
  SetLastArticleAction,
  SetMoreArticlesAction,
  UpdateArticleTimeAction
} from './../types/articles';
import firebase from '../firebase';

const ref = firebase.firestore().collection('articles');

let initialState = {
  articles: [] as Array<IArticle> | [],
  lastArticle: null as any,
  updatedArticle: null as IArticle | null,
  searchedArticle: null as IArticle | null,
  isLoading: false,
  completedTask: false,
  completedTaskMessage: '',
  errorModal: false,
  errorMessage: '',
}

type ArticleInitialState = typeof initialState;


const articlesReduer = (state = initialState, action: ArticlesAction): ArticleInitialState => {
  switch(action.type) {
      case ArticleActionTypes.SET_ARTICLES:
        return {
          ...state,
          articles: action.articles
        }
      case ArticleActionTypes.SET_LAST_ARTICLE:
        return {
          ...state,
          lastArticle: action.lastArticle
        }
      case ArticleActionTypes.SET_MORE_ARTICLES:
        return {
          ...state,
          articles: [...state.articles, ...action.articles]
        }
      case ArticleActionTypes.UPDATE_ARTICLE:
        return {
          ...state,
          articles: state.articles.map(elem => {
            if(elem.articleUrl !== action.updatedArticle.articleUrl) {
              return elem;
            } else {
              return {...elem, ...action.updatedArticle};
            }
          }),
          searchedArticle: {...state.searchedArticle, ...action.updatedArticle}
        }
      case ArticleActionTypes.UPDATE_ARTICLE_TIME:
        return {
          ...state,
          articles: state.articles.map(elem => {
            if(elem.articleUrl !== action.updatedArticleTime.articleUrl) {
              return elem;
            } else {
              return {...elem, ...action.updatedArticleTime};
            }
          }),
          searchedArticle: {...state.searchedArticle, ...action.updatedArticleTime}
        }
      case ArticleActionTypes.DELETE_ARTICLE:
        return {
          ...state,
          articles: state.articles.filter(elem => elem.articleUrl !== action.articleUrl)
        }
      case ArticleActionTypes.SET_SEARCHED_ARTICLE:
        return {
          ...state,
          searchedArticle: action.searchedArticle
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
      case ArticleActionTypes.RESET_ARTICLES:
        return {
          ...state,
          articles: [],
          lastArticle: null
        }
      case ArticleActionTypes.RESET_SEARCHED_ARTICLE:
        return {
          ...state,
          searchedArticle: null
        }
      default:
        return state
  }
}


export const setArticles = (articles: Array<IArticle> | []): SetArticlesAction => ({
  type: ArticleActionTypes.SET_ARTICLES,
  articles
});
export const setMoreArticles = (articles: Array<IArticle> | []): SetMoreArticlesAction => ({
  type: ArticleActionTypes.SET_MORE_ARTICLES,
  articles
})
export const setLastArticle = (lastArticle: any): SetLastArticleAction => ({
  type: ArticleActionTypes.SET_LAST_ARTICLE,
  lastArticle
})
export const updateArticle = (updatedArticle: IArticle): UpdateArticleAction => ({
  type: ArticleActionTypes.UPDATE_ARTICLE,
  updatedArticle
});
export const updateArticleTime = (updatedArticleTime : any) : UpdateArticleTimeAction => ({
  type: ArticleActionTypes.UPDATE_ARTICLE_TIME,
  updatedArticleTime
})
export const deleteArticle = (articleUrl: string): DeleteArticleAction => ({
  type: ArticleActionTypes.DELETE_ARTICLE,
  articleUrl
})
export const setSearchedArticle = (searchedArticle: IArticle): SetSearchedArticleAction => ({
  type: ArticleActionTypes.SET_SEARCHED_ARTICLE,
  searchedArticle
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
export  const setIsNotExistArticle = (isNotExistArticle: boolean): SetExistArticleAction => ({
  type: ArticleActionTypes.SET_EXIST_ARTICLE,
  isNotExistArticle
});
export const resetArticles = (): ResetArticlesAction => ({
  type: ArticleActionTypes.RESET_ARTICLES
})
export const resetSearchedArticle = (): ResetSearchedArticleAction => ({
  type: ArticleActionTypes.RESET_SEARCHED_ARTICLE
})


// GET ARTICLES FROM SERVER
export const getArticlesFromServer = () => async (dispatch: Dispatch<ArticlesAction>) => {
  dispatch(resetArticles());
  dispatch(setArticleErrorMessage(''))
  dispatch(toggleArticleLoading(true));
  await delay(300);
  ref.orderBy('createdAt', 'desc').limit(3).get()
  .then(async (item) => {
    let articles = item.docs.map((doc:any) => doc.data());
    let lastDoc:any = item.docs[item.docs.length - 1];
    dispatch(setArticles(articles));
    dispatch(setLastArticle(lastDoc))
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

export const getMoreArticles = (lastArticle:any) => async (dispatch: Dispatch<ArticlesAction>) => {
  dispatch(toggleArticleLoading(true));
  await delay(300)
  ref.orderBy('createdAt', 'desc')
    .startAfter(lastArticle)
    .limit(3)
    .get()
    .then(async (item) => {
      let articles = item.docs.map((doc:any) => doc.data());
      let lastDoc:any = item.docs[item.docs.length - 1];
      const isColletionEmpty = item.size === 0;
      if(!isColletionEmpty) {
        dispatch(setMoreArticles(articles));
        dispatch(setLastArticle(lastDoc));
        await delay(500);
        dispatch(toggleArticleLoading(false));
      } else {
        dispatch(setArticleErrorModal(true));
        dispatch(setArticleErrorMessage('No more articles.'))
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

export const updateArticleTimeOnServer = (article: IArticle) => async (dispatch: Dispatch<ArticlesAction>) => {
  const updatedArticleTime = {
    articleUrl: article.articleUrl,
    createdAt: new Date().toLocaleString(),
    lastUpdated: new Date().toLocaleString(),
  }
  
  ref
    .doc(article.articleUrl)
    .update(updatedArticleTime)
    .then(async () => {
      dispatch(updateArticleTime(updatedArticleTime));
    })
    .catch(err => {
      dispatch(setArticleErrorModal(true));
      dispatch(setArticleErrorMessage(err.message))
    })
}

// DELETE ARTICLE FROM SERVER
export const deleteArticleFromServer = (articleUrl: string, callback: () => void) => async (dispatch: Dispatch<ArticlesAction>) => {
  dispatch(toggleArticleLoading(true));
  await delay(500);
  ref
  .doc(articleUrl)
  .delete()
  .then(async () => {
    dispatch(deleteArticle(articleUrl));
    await delay(500);
    dispatch(toggleArticleLoading(false));
    callback()
  })
  .catch(async (err: any) => {
    dispatch(setArticleErrorModal(true));
    if(err.code === 'permission-denied') {
      dispatch(setArticleErrorMessage("You do not have access or the article has been deleted."))
    } else {
      dispatch(setArticleErrorMessage(err.message))
    }
    await delay(500);
    dispatch(toggleArticleLoading(false));
  })
}

export const searchAdminArticle = (articleUrl: string) => async (dispatch: Dispatch<ArticlesAction>) => {
  dispatch(toggleArticleLoading(true));
  await delay(500);
  ref.doc(articleUrl)
    .get()
    .then(async (doc: firebase.firestore.DocumentData) => {
      if(doc.exists) {
        dispatch(setSearchedArticle(doc.data()));
        await delay(500);
        dispatch(toggleArticleLoading(false));
      } else {
        dispatch(setArticleErrorModal(true));
        dispatch(setArticleErrorMessage("Article not found."))
        await delay(500);
        dispatch(toggleArticleLoading(false));
        dispatch(resetSearchedArticle());
      }
    })
    .catch(async (err) => {
      dispatch(setArticleErrorModal(true));
      dispatch(setArticleErrorMessage(err.message));
      await delay(500);
      dispatch(toggleArticleLoading(false));
    })
}


export default articlesReduer;