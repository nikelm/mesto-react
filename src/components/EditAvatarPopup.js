import React from 'react';
import PopupWithForm from './PopupWithForm';


function EditAvatarPopup(props) {

  const inputAvatar = React.useRef();

  function handleSubmit(evt) {
    evt.preventDefault();

    props.onUpdateAvatar({
      avatar: inputAvatar.current.value,
    });

  }

  return (
    <>
      <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      name="avatar"
      title="Обновить аватар"
      textButton="Сохранить">

      <input ref={inputAvatar} defaultValue={props.linkAvatar} id="url-input" type="url" className="popup__input popup__input-avatar_type_link" name="avatar" placeholder="Ссылка на картинку" required></input>

      <span id="url-input-error" className="popup__error"></span>

    </PopupWithForm>
    </>
  )

}

export default EditAvatarPopup;
