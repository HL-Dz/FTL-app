import about from '../../../assets/images/InfoImages/about.png';
import league from '../../../assets/images/InfoImages/league.png';
import clubs from '../../../assets/images/InfoImages/clubs.png';
import map from '../../../assets/images/InfoImages/map.png';
import team from '../../../assets/images/InfoImages/team.png';
import player from '../../../assets/images/InfoImages/player.png';
import articles from '../../../assets/images/InfoImages/articles.png';
import article from '../../../assets/images/InfoImages/article.png';
import signin from '../../../assets/images/InfoImages/signin.png';
import admin from '../../../assets/images/InfoImages/admin.png';

const navigationData = [
  {
    id: 1,
    path: 'about',
    text: 'About',
    cls: 'fas fa-address-card'
  },
  {
    id: 2,
    path: 'league',
    text: 'League',
    cls: 'fas fa-globe'
  },
  {
    id: 3,
    path: 'clubs',
    text: 'Saved clubs',
    cls: 'fas fa-folder'
  },
  {
    id: 4,
    path: 'team',
    text: 'Team',
    cls: 'fas fa-users'
  },
  {
    id: 5,
    path: 'player',
    text: 'Player',
    cls: 'fas fa-user-check'
  },
  {
    id: 6,
    path: 'articles',
    text: 'Articles',
    cls: 'far fa-newspaper'
  },
  {
    id: 7,
    path: 'article',
    text: 'Article',
    cls: 'far fa-newspaper'
  },
  {
    id: 8,
    path: 'signin',
    text: 'Sign In',
    cls: 'fas fa-sign-in-alt'
  },
  {
    id: 9,
    path: 'admin',
    text: 'Admin panel',
    cls: 'fas fa-user-shield'
  },
];

const sectionsData = [
  {
    id: 1,
    pathId: 'about',
    title: 'About',
    cls: 'fas fa-address-card',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    images: [about]
  },
  {
    id: 2,
    pathId: 'league',
    title: 'League',
    cls: 'fas fa-globe',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    images: [league]
  },
  {
    id: 3,
    pathId: 'clubs',
    title: 'Saved clubs',
    cls: 'fas fa-folder',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    images: [clubs, map]
  },
  {
    id: 4,
    pathId: 'team',
    title: 'Team',
    cls: 'fas fa-users',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    images: [team]
  },
  {
    id: 5,
    pathId: 'player',
    title: 'Player',
    cls: 'fas fa-user-check',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    images: [player]
  },
  {
    id: 6,
    pathId: 'articles',
    title: 'Articles',
    cls: 'far fa-newspaper',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    images: [articles]
  },
  {
    id: 7,
    pathId: 'article',
    title: 'Article',
    cls: 'far fa-newspaper',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    images: [article]
  },
  {
    id: 8,
    pathId: 'signin',
    title: 'SignIn',
    cls: 'fas fa-sign-in-alt',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    images: [signin]
  },
  {
    id: 9,
    pathId: 'admin',
    title: 'Admin panel',
    cls: 'fas fa-user-shield',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    images: [admin]
  }
]



export {navigationData, sectionsData};