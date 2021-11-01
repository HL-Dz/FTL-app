export enum ArticleActionTypes {
  SET_ARTICLES = 'SET_ARTICLES',
  SET_MORE_ARTICLES = 'SET_MORE_ARTICLES',
  SET_LAST_ARTICLE = 'SET_LAST_ARTICLE',
  SET_SEARCHED_ARTICLE = 'SET_SEARCHED_ARTICLE',
  UPDATE_ARTICLE = 'UPDATE_ARTICLE',
  UPDATE_ARTICLE_TIME = 'UPDATE_ARTICLE_TIME',
  TOGGLE_ARTICLE_LOADING = 'TOGGLE_ARTICLE_LOADING',
  SET_COMPLETED_TASK = 'SET_COMPLETED_TASK',
  SET_COMPLETED_TASK_MESSAGE = 'SET_COMPLETED_TASK_MESSAGE',
  SET_ARTICLE_ERROR_MODAL = 'SET_ARTICLE_ERROR_MODAL',
  SET_ARTICLE_ERROR_MESSAGE = 'SET_ARTICLE_ERROR_MESSAGE',
  SET_EXIST_ARTICLE = 'SET_EXIST_ARTICLE',
  SET_IS_SEARCH_MODAL = 'SET_IS_SEARCH_MODAL',
  DELETE_ARTICLE = 'DELETE_ARTICLE',
  RESET_ARTICLES = 'RESET_ARTICLES',
  RESET_SEARCHED_ARTICLE = 'RESET_SEARCHED_ARTICLE'
}

export interface IArticle {
  id: string
  articleUrl: string
  articleAuthorId: string
  articleAuthorName: string
  title: string
  shortDesc: string
  desc: string
  imgSrc: string
  status: string
  public: boolean
  createdAt: number
  lastUpdated: number
  comments: Array<IComment>
  displayComments: boolean
  photoBy: string
}

export interface IComment {
  id: string
  ownerId: string
  ownerEmail: string
  ownerName: string | null
  photoUrl: string | null
  text: string
  createdAt: number
  lastUpdate: number
}

export interface SetArticlesAction {
  type: ArticleActionTypes.SET_ARTICLES,
  articles: Array<IArticle> | []
}

export interface SetMoreArticlesAction {
  type: ArticleActionTypes.SET_MORE_ARTICLES
  articles: Array<IArticle> | []
}

export interface SetLastArticleAction {
  type: ArticleActionTypes.SET_LAST_ARTICLE
  lastArticle: any
}

export interface SetIsSearchModalAction {
  type: ArticleActionTypes.SET_IS_SEARCH_MODAL,
  isSearchModal: boolean
}

export interface UpdateArticleAction {
  type: ArticleActionTypes.UPDATE_ARTICLE
  updatedArticle: IArticle
}

export interface UpdateArticleTimeAction {
  type: ArticleActionTypes.UPDATE_ARTICLE_TIME,
  updatedArticleTime: IArticle
}

export interface ToggleArticleLoadingAction {
  type: ArticleActionTypes.TOGGLE_ARTICLE_LOADING
  isLoading: boolean
}

export interface SetCompletedTaskAction {
  type: ArticleActionTypes.SET_COMPLETED_TASK
  completedTask: boolean
}

export interface SetCompletedTaskMessageAction {
  type: ArticleActionTypes.SET_COMPLETED_TASK_MESSAGE
  completedTaskMessage: string
}

export interface SetArticleErrorModalAction {
  type: ArticleActionTypes.SET_ARTICLE_ERROR_MODAL
  errorModal: boolean
}

export interface SetArticleErrorMessageAction {
  type: ArticleActionTypes.SET_ARTICLE_ERROR_MESSAGE
  errorMessage: string
}

export interface SetExistArticleAction {
  type: ArticleActionTypes.SET_EXIST_ARTICLE
  isNotExistArticle: boolean
}

export interface DeleteArticleAction {
  type: ArticleActionTypes.DELETE_ARTICLE
  articleUrl: string
}

export interface ResetArticlesAction {
  type: ArticleActionTypes.RESET_ARTICLES
}

export interface SetSearchedArticleAction {
  type: ArticleActionTypes.SET_SEARCHED_ARTICLE
  searchedArticle: IArticle
}
export interface ResetSearchedArticleAction {
  type: ArticleActionTypes.RESET_SEARCHED_ARTICLE
}

export type ArticlesAction = 
          SetArticlesAction |
          SetMoreArticlesAction |
          SetLastArticleAction |
          SetIsSearchModalAction |
          UpdateArticleAction |
          UpdateArticleTimeAction |
          ToggleArticleLoadingAction |
          SetCompletedTaskAction |
          SetCompletedTaskMessageAction |
          SetArticleErrorModalAction |
          SetArticleErrorMessageAction |
          SetExistArticleAction |
          DeleteArticleAction |
          ResetArticlesAction |
          SetSearchedArticleAction |
          ResetSearchedArticleAction;