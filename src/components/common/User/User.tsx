import React, { FC } from 'react';
import "./User.scss";
import userPhoto from '../../../assets/images/comment-user.png';
import { logout } from '../../../redux/auth-reducer';
import { useState } from 'react';
import Spinner from '../Spinner/Spinner';
import { delay } from '../../../helpers/helpers';
import { IUser } from '../../../types/auth';

interface UserProps {
  user: IUser
}


const User: FC<UserProps> = ({user}) => {
  const [isLogout, setIsLogout] = useState(false);
  const [isVisibleUser, setIsVisibleUser] = useState(false);
  const [isSlowlyAnim, setIsSlowlyAnim] = useState(false);

  const name = user.displayName ?  user.displayName : '-------';
  const email = user.email ? user.email : '-------';
  const photo = user.photoURL ? user.photoURL : userPhoto;
  const phoneNumber = user.phoneNumber ? user.phoneNumber : '-------';

  const handleLogout = async () => {
    setIsLogout(true);
    await delay(500);
    logout();
  }


  const showUserInfo = (e: React.SyntheticEvent) => {
    setIsSlowlyAnim(false);
    let target =  e.target as HTMLDivElement;
    if(target.className === 'user' || target.className === 'user__img') {
      setIsVisibleUser(true);
    }
  }

  const hideUserInfo = async () => {
    setIsSlowlyAnim(true);
    await delay(250);
    setIsVisibleUser(false);
  }
  
  return (
    <div className="user">
      <div className={isVisibleUser ? "user__bg user__bg_active" : "user__bg"} onClick={hideUserInfo}></div>
      <div className="user__pic" onClick={showUserInfo}>
        <img className="user__img" src={photo} alt={name} title={name}/>
      </div>
      {
        isVisibleUser ? (
          <div className={isSlowlyAnim ? "user__info user__info_inactive" : "user__info"}>
            <div className="user__triangle"></div>
            <div className="user__name">
              <span>Name:</span>{`${name}`}
            </div>
            <div className="user__email">
              <span>Email:</span>{`${email}`}
            </div>
            <div className="user__phone">
              <span>Phone:</span>{`${phoneNumber}`}
            </div>
            <div className="user__buttons">
              {isLogout ? <Spinner/> : null}
              <button className="user__out operation__button" onClick={handleLogout}>
                <span>Sign out</span>
              </button>
            </div>
          </div>
        ) : (null)
      }
    </div>
  )
}

export default User;