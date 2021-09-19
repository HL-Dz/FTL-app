import React, { FC, useState } from 'react';
import "./AdminInfoScreen.scss";
import screen from '../../../../assets/images/screen.png';
import { delay } from '../../../../helpers/helpers';
import Instruction from './Instruction';

interface AdminInfoProps {
  
}

const AdminInfoScreen: FC<AdminInfoProps> = () => {
  const [isOnScreen, setIsOnScreen] = useState(false);
  const [isfadeOutScreen, setIsFadeOutScreen] = useState(false);

  const toggleScreen = async () => {
    if(!isOnScreen) {
      setIsOnScreen(true);
    } else {
      setIsFadeOutScreen(true);
      await delay(400);
      setIsFadeOutScreen(false);
      setIsOnScreen(false); 
    }
  }
  
  return (
    <>
      <div className="admin-info__wrap">
        <span>Create a new article or open the section with current articles.</span>
      </div>
      <div className="admin-info__screen">
        <div 
          className={isOnScreen ? "screen-toggle screen-toggle_active" : "screen-toggle"} 
          onClick={toggleScreen}
        ></div>
        {isOnScreen ? <Instruction
          isfadeOutScreen={isfadeOutScreen}
        /> : null}
        <img src={screen} alt="Screen" className="admin-info__img"/>
      </div> 
    </>
  )
}

export default AdminInfoScreen;