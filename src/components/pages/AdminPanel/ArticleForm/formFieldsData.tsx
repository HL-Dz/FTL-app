export interface IFieldData {
  id: number,
  textareaTitle: string
  minCharacters: number
  maxCharacters: number
  name: string
  class: string
  placeholder: string
  autoFocus?: boolean
}

const textareaFieldsData : Array<IFieldData> = [
  {
    id: 1,
    textareaTitle: 'Article title',
    minCharacters: 20,
    maxCharacters: 150,
    name: 'title',
    class: 'operation__textarea_title',
    placeholder: 'Type the title of the article...',
    autoFocus: true
  },
  {
    id: 2,
    textareaTitle: 'Short article description',
    minCharacters: 20,
    maxCharacters: 300,
    name: 'shortDesc',
    class: 'operation__textarea_shortdesc',
    placeholder: 'Type a short description of the article...',
    autoFocus: false
  },
  {
    id: 3,
    textareaTitle: 'Article description',
    minCharacters: 50,
    maxCharacters: 20000,
    name: 'description',
    class: 'operation__textarea_description',
    placeholder: 'Type a full description of the article...',
    autoFocus: false
  },
];

const statusItemsData: Array<string> = ['normal', 'high', 'hot'];

export interface CommentProps {
  id: number
  value: boolean,
  title: string
}

const commentsItemsData: Array<CommentProps>  = [
  {id: 1, value: true, title: 'Display'},
  {id: 2, value: false, title: 'Hide'},
]

export {
  textareaFieldsData,
  statusItemsData,
  commentsItemsData
}