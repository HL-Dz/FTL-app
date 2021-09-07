export interface IArticle {
  id: number
  title: string
  shortDesc: string
  desc: string
  articleAuthor: string
  imgSrc: string
  status: string
  public: boolean
  createdAt: string
  comments: Array<IComment>
  displayComments: boolean
  photoBy: string
  // lastUpdated: string
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