export interface IArticle {
  id: number
  pathName: string
  title: string
  shortDesc: string
  desc: string
  imgSrc: string
  tags?: Array<string>
  status: string
  public: boolean
  createdAt: string
  comments: Array<IComment>
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