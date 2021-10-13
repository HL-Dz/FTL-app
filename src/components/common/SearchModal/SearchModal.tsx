import React, { FC } from 'react';
import "./SearchModal.scss";

interface SearchModalProps {
  isFadeOutModal: boolean
  hideSearchModal: () => void
}


const SearchModal: FC<SearchModalProps> = ({children, isFadeOutModal, hideSearchModal}) => {

  const closeSearchModal = (e: React.SyntheticEvent) => {
    let target = e.target as HTMLInputElement;
    if(target.className === 'search-modal') {
      hideSearchModal();
    }
  }
  
  return (
    <div className={isFadeOutModal ? "search-modal search-modal_inactive" : "search-modal"} onClick={closeSearchModal}>
      <button className="errorModal__close fas fa-times" onClick={hideSearchModal}></button>
      <div className={isFadeOutModal ? "search-modal__content search-modal__content_inactive" : "search-modal__content"}>
        {children}
      </div>
    </div>
  )
}

export default SearchModal;