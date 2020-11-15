import React from 'react';
import PopupWithForm from './PopupWithForm';
import CurrentUserContext from '../contexts/CurrentUserContext';


function EditProfilePopup(props) {

  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);



  function handleNameChange(evt) {
    setName(evt.target.value);
  }

  function handleDescriptionChange(evt) {
    setDescription(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    props.onUpdateUser({
      name,
      about: description,
    });
  }

  return (
  <>
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      name="user"
      title="Редактировать профиль"
      textButton="Сохранить">

        <input id="name-input" type="text" defaultValue={name} onChange={handleNameChange} className="popup__input popup__input_type_name" name="fullname" placeholder="Имя" required minLength="2" maxLength="40" />

        <span id="name-input-error" className="popup__error"></span>
        <label></label>

        <input id="job-input" type="text" defaultValue={description} onChange={handleDescriptionChange} className="popup__input popup__input_type_description" name="job" placeholder="О себе" required minLength="2" maxLength="200" />

        <span id="job-input-error" className="popup__error"></span>


    </PopupWithForm>



  </>
  )

}

export default EditProfilePopup;
