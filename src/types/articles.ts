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

interface IComment {
  name: string
  surname: string
  createdAt: string
}