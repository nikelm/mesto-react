import React from 'react';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import Footer from './Footer';

function App() {

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      closeAllPopups();
    }
  });

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState({});
  const [place, setPlace] =  React.useState(false);

  /*В брифе, и на скриншоте фотографии в брифе, ничего не сказано про название фото, поэтому ранее
  делал без него. Вообще очень странное ощущение от React'a:
  ловишь себя на мысли, что пользуешься читами какими-то...
  Cпасибо за ревью, такой подробно-конкретный feedback не часто приходит */

  function handleCardClick(data) {
    setPlace(true);
    setSelectedCard({
      ...selectedCard,
      ...data
    });

  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);

    setPlace(false);
  }

  return (

   <>

      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onEditAvatar={handleEditAvatarClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick} >

      </Main>

      <ImagePopup
        card={selectedCard ? selectedCard : ''}
        onClose={closeAllPopups}
        isOpen={place ? 'popup_opened' : ''}

      />

      <PopupWithForm
        isOpen={isEditProfilePopupOpen ? 'popup_opened' : ''}
        onClose={closeAllPopups}
        name="user"
        title="Редактировать профиль"
        textButton="Сохранить">

          <input id="name-input" type="text" className="popup__input popup__input_type_name" name="fullname" placeholder="Имя" required minLength="2" maxLength="40" />

          <span id="name-input-error" className="popup__error"></span>
          <label></label>

          <input id="job-input" type="text" className="popup__input popup__input_type_description" name="job" placeholder="О себе" required minLength="2" maxLength="200" />

          <span id="job-input-error" className="popup__error"></span>

      </PopupWithForm>

      <PopupWithForm
        isOpen={isAddPlacePopupOpen ? 'popup_opened' : ''}
        onClose={closeAllPopups}
        name="new"
        title="Новое место"
        textButton="Сохранить">

          <input id="place-input" type="text" className="popup__input popup__input-new_type_name" name="name" placeholder="Название" required minLength="1" maxLength="30" />

          <span id="place-input-error" className="popup__error"></span>
          <label></label>

          <input id="url-input" type="url" className="popup__input popup__input-new_type_link" name="link" placeholder="Ссылка на картинку" required />

          <span id="url-input-error" className="popup__error"></span>

      </PopupWithForm>

      <PopupWithForm
        isOpen={isEditAvatarPopupOpen ? 'popup_opened' : ''}
        onClose={closeAllPopups}
        name="avatar"
        title="Обновить аватар"
        textButton="Сохранить">

          <input id="url-input" type="url" className="popup__input popup__input-avatar_type_link" name="avatar" placeholder="Ссылка на картинку" required />

          <span id="url-input-error" className="popup__error"></span>

      </PopupWithForm>

      <PopupWithForm
        name="delete_place"
        title="Вы уверены?"
        textButton="Да">

      </PopupWithForm>



      <Footer />

   </>
  );
}

export default App;
