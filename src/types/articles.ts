export enum ArticleActionTypes {
  SET_ARTICLES = 'SET_ARTICLES',
  UPDATE_ARTICLE = 'UPDATE_ARTICLE',
  TOGGLE_ARTICLE_LOADING = 'TOGGLE_ARTICLE_LOADING',
  SET_COMPLETED_TASK = 'SET_COMPLETED_TASK',
  SET_COMPLETED_TASK_MESSAGE = 'SET_COMPLETED_TASK_MESSAGE',
  SET_ARTICLE_ERROR_MODAL = 'SET_ARTICLE_ERROR_MODAL',
  SET_ARTICLE_ERROR_MESSAGE = 'SET_ARTICLE_ERROR_MESSAGE',
  SET_EXIST_ARTICLE = 'SET_EXIST_ARTICLE',
  DELETE_ARTICLE = 'DELETE_ARTICLE',
  RESET_ARTICLES = 'RESET_ARTICLES',
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
  createdAt: string
  lastUpdated: string
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
  createdAt: string
  lastUpdate: string
}

export interface SetArticlesAction {
  type: ArticleActionTypes.SET_ARTICLES,
  articles: Array<IArticle> | []
}

export interface UpdateArticleAction {
  type: ArticleActionTypes.UPDATE_ARTICLE
  updatedArticle: IArticle
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

export type ArticlesAction = 
          SetArticlesAction |
          UpdateArticleAction |
          ToggleArticleLoadingAction |
          SetCompletedTaskAction |
          SetCompletedTaskMessageAction |
          SetArticleErrorModalAction |
          SetArticleErrorMessageAction |
          SetExistArticleAction |
          DeleteArticleAction |
          ResetArticlesAction;