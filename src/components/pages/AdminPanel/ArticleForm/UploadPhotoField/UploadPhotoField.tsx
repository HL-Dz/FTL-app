import React, { FC } from 'react';

interface UploadPhotoFieldProps {
  photo: File | null
  photoName: string
  isSuccessfulUpload: boolean
  startUpload: boolean
  uploadImage: (e: React.FormEvent<HTMLButtonElement>) => void
  setPhoto: (photo: File | null) => void
  setPhotoName: (name: string) => void
  setErrorModal: (val: boolean) => void
  setErrorMessage: (text: string) => void
}


const UploadPhotoField: FC<UploadPhotoFieldProps> = ({
  photo,
  photoName,
  isSuccessfulUpload,
  startUpload,
  uploadImage,
  setPhoto,
  setPhotoName,
  setErrorModal,
  setErrorMessage
}) => {
  
  const handleFileChange = (e: React.SyntheticEvent) => {
    let target = e.target as HTMLInputElement;
    if(target.files?.[0]) {
    let alowedTypes = target.files?.[0].type === 'image/jpeg' ||
                     target.files?.[0].type === 'image.jpg' ||
                     target.files?.[0].type === 'image/png' ||
                     target.files?.[0].type === 'image/gif';
      if(alowedTypes) {
        setPhoto(target.files[0]);
        setPhotoName(target.files[0].name)
      } else {
        setErrorModal(true);
        setErrorMessage('Only images can be upload (jpeg | jpg | png | gif).');
        return;
      }
    }
  }
  
  return (
    <>
      <label className="label-file">
        <input 
          className="file-input" 
          onChange={handleFileChange}
          type="file" 
          accept="image/png,image/jpg,image/jpeg,image/gif"
        />
        <span className="file">
          <span className="file__text">{!photoName ? 'Choose a file...' : photoName}</span>
          <i className={`fas fa-cloud-download-alt ${photoName ? 'file__icon file__icon_active' : 'file__icon'}`}></i>
        </span>
      </label>
      {
        photo ? (
          <div className="upload" title={isSuccessfulUpload ? 'Successful finish upload' : "Start upload"}>
            <button 
              className={`${startUpload ? 'upload__button upload__button_load' : 'upload__button'} fas fa-server`}
              onClick={uploadImage}
              disabled={(startUpload || isSuccessfulUpload) ? true : false}
            ></button>
            <i className={`fas fa-arrow-down ${startUpload ? "upload__start upload__start_active" : "upload__start"}`}></i>
            {isSuccessfulUpload ? <i className="fas fa-check upload__success"></i> :  null}
          </div>
        ) : null
      }
    </>
  )
}

export default UploadPhotoField;