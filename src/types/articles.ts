export enum ArticleActionTypes {
  SET_ARTICLES = 'SET_ARTICLES',
  SET_ARTICLE_PREVIEW = 'SET_ARTICLE_PREVIEW',
  SET_ARTICLE_PREVIEW_ERROR = 'SET_ARTICLE_PREVIEW_ERROR',
  SET_ARTICLE_PREVIEW_LOADING = 'SET_ARTICLE_PREVIEW_LOADING',
  UPDATE_ARTICLE = 'UPDATE_ARTICLE',
  TOGGLE_ARTICLE_LOADING = 'TOGGLE_ARTICLE_LOADING',
  SET_COMPLETED_TASK = 'SET_COMPLETED_TASK',
  SET_COMPLETED_TASK_MESSAGE = 'SET_COMPLETED_TASK_MESSAGE',
  SET_ARTICLE_ERROR_MODAL = 'SET_ARTICLE_ERROR_MODAL',
  SET_ARTICLE_ERROR_MESSAGE = 'SET_ARTICLE_ERROR_MESSAGE',
  SET_EXIST_ARTICLE = 'SET_EXIST_ARTICLE',
  DELETE_ARTICLE = 'DELETE_ARTICLE',
  RESET_ARTICLES = 'RESET_ARTICLES',
  RESET_ARTICLE_PREVIEW = 'RESET_ARTICLE_PREVIEW'
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

export interface SetArticlePreviewAction {
  type: ArticleActionTypes.SET_ARTICLE_PREVIEW
  articlePreview: null | IArticle
}

export interface SetArticlePreviewLoadingAction {
  type: ArticleActionTypes.SET_ARTICLE_PREVIEW_LOADING,
  articlePreviewLoading: boolean
}

export interface SetArticlePreviewError {
  type: ArticleActionTypes.SET_ARTICLE_PREVIEW_ERROR
  articlePreviewError: boolean
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
  isExistArticle: boolean
}

export interface DeleteArticleAction {
  type: ArticleActionTypes.DELETE_ARTICLE
  articleUrl: string
}

export interface ResetArticlesAction {
  type: ArticleActionTypes.RESET_ARTICLES
}

export interface ResetArticlePreviewAction {
  type: ArticleActionTypes.RESET_ARTICLE_PREVIEW
}

export type ArticlesAction = 
          SetArticlesAction |
          SetArticlePreviewAction |
          SetArticlePreviewLoadingAction |
          SetArticlePreviewError |
          UpdateArticleAction |
          ToggleArticleLoadingAction |
          SetCompletedTaskAction |
          SetCompletedTaskMessageAction |
          SetArticleErrorModalAction |
          SetArticleErrorMessageAction |
          SetExistArticleAction |
          DeleteArticleAction |
          ResetArticlesAction |
          ResetArticlePreviewAction;