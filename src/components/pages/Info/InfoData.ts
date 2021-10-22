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
    text: 'TFL articles',
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
    text: `Hi! This application is intended for all users, but more for football fans.
          In the application
          you can find information on football leagues, teams, players. You can read articles, comment on them.
          Articles are added by application administrators. The application has a limit on the number of requests
          behind the data. If the request limit is exceeded, a message will be displayed in
          modal window.`,
    images: [about]
  },
  {
    id: 2,
    pathId: 'league',
    title: 'League',
    cls: 'fas fa-globe',
    text: `On this page you can find information on different football leagues:
          league overview card, standings, league top scorers. You can save commands
          for easy viewing on the "Saved clubs" page.`,
    images: [league]
  },
  {
    id: 3,
    pathId: 'clubs',
    title: 'Saved clubs',
    cls: 'fas fa-folder',
    text: `On this page displays all your saved clubs. You can get brief information
          by club, the player list of the club, view the location of the club on the map. Using drag and drop
          you can arrange your favorite clubs in the desired order.`,
    images: [clubs, map]
  },
  {
    id: 4,
    pathId: 'team',
    title: 'Team',
    cls: 'fas fa-users',
    text: `On this page displays information about the club.`,
    images: [team]
  },
  {
    id: 5,
    pathId: 'player',
    title: 'Player',
    cls: 'fas fa-user-check',
    text: `On this page displays information about the player and his played matches.`,
    images: [player]
  },
  {
    id: 6,
    pathId: 'articles',
    title: 'TFL articles',
    cls: 'far fa-newspaper',
    text: `The page can only be viewed by authorized users.`,
    images: [articles]
  },
  {
    id: 7,
    pathId: 'article',
    title: 'Article',
    cls: 'far fa-newspaper',
    text: `Only authorized users can view and comment on the article page.`,
    images: [article]
  },
  {
    id: 8,
    pathId: 'signin',
    title: 'Sign In',
    cls: 'fas fa-sign-in-alt',
    text: `Form for registration in the application or authorization.`,
    images: [signin]
  },
  {
    id: 9,
    pathId: 'admin',
    title: 'Admin panel',
    cls: 'fas fa-user-shield',
    text: `Administrators are approved by the developer of the application. Administrators
          can write articles, edit them, delete them. In addition, administrators have the right to delete
          comments from users who write in an incorrect and rude form.`,
    images: [admin]
  }
]



export {navigationData, sectionsData};