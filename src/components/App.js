import React from 'react';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import Card from './Card';
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

  const [selectedCard, setSelectedCard] = React.useState({link: ''});
  const [place, setPlace] =  React.useState(false);

  function handleCardClick(props) {
    setPlace(true);
    setSelectedCard({
      ...selectedCard,
      link: props
    })

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
    setSelectedCard({
      ...selectedCard,
      link: '#'
    });
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

      <template className="template">

        <div className="card">

          <button type="button" className="card__button">
            <img className="card__image" alt="Изображение места" />
          </button>

          <button type="button" className="card__delete-icon"></button>

          <div className="card__item-rectangle">
            <h3 className="card__item-subtitle"></h3>
              <div className="card__board">
                <button type="button" className="card__item-button">
                  <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="card__like">
                    <path d="M18.8005 1.95849L18.8023 1.96024C20.7437 3.88233 20.7462 7.03905 18.8005 8.98466L10.361 17.4238L1.94628 9.00951C1.94569 9.00892 1.94511 9.00832 1.94453 9.00772C1.0188 8.06185 0.5 6.81051 0.5 5.48217C0.5 4.14855 1.00122 2.89987 1.94265 1.95849L1.94266 1.95849L1.94441 1.95672C3.86629 0.0157068 7.02186 0.0131363 8.96748 1.97793L8.96922 1.97967L10.0074 3.01784L10.3646 3.37496L10.7181 3.01425L11.7545 1.95673C13.6994 0.0138381 16.8563 0.014425 18.8005 1.95849Z" stroke="black"/>
                  </svg>
                </button>
                <p className="card__counter">0</p>
              </div>
          </div>
        </div>

        <div className="card card__other">

          <button type="button" className="card__button">
            <img className="card__image" alt="Изображение места" />
          </button>

          <button type="button" className="card__delete"></button>

          <div className="card__item-rectangle">
            <h3 className="card__item-subtitle"></h3>
              <div className="card__board">
                <button type="button" className="card__item-button">
                  <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="card__like">
                    <path d="M18.8005 1.95849L18.8023 1.96024C20.7437 3.88233 20.7462 7.03905 18.8005 8.98466L10.361 17.4238L1.94628 9.00951C1.94569 9.00892 1.94511 9.00832 1.94453 9.00772C1.0188 8.06185 0.5 6.81051 0.5 5.48217C0.5 4.14855 1.00122 2.89987 1.94265 1.95849L1.94266 1.95849L1.94441 1.95672C3.86629 0.0157068 7.02186 0.0131363 8.96748 1.97793L8.96922 1.97967L10.0074 3.01784L10.3646 3.37496L10.7181 3.01425L11.7545 1.95673C13.6994 0.0138381 16.8563 0.014425 18.8005 1.95849Z" stroke="black"/>
                  </svg>
                </button>
                <p className="card__counter">0</p>
              </div>
          </div>

        </div>
      </template>

   </>
  );
}

export default App;
