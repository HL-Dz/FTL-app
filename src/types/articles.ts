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