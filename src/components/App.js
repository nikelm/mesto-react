import React from 'react';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ImagePopup from './ImagePopup';
import Footer from './Footer';
import apiCards from '../utils/Api';
import CurrentUserContext from '../contexts/CurrentUserContext';
import CardsContext from '../contexts/CardsContext';


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

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    apiCards.getInitialCards().then((data) => {

      setCards(data);
    }).catch((err) => {
      console.log(err);
    })
  }, [])

  function handleCardLike(card) {

    const isLiked = card.likes.some(i => i._id === currentUser._id);

    apiCards.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {

      const newCards = cards.map((c) => c._id === card._id ? newCard : c);

      setCards(newCards);
    }).catch((err) => {
      console.log(err);
    });

  }

  function handleCardDelete(card) {

    apiCards.deleteMyCard(card._id).then(() => {
      const newCards = cards.filter((myCard) => {
        return myCard._id  !== card._id;
      });
      setCards(newCards);
    }).catch((err) => {
      console.log(err);
    });
  }

  const [currentUser, setCurrentUser] = React.useState([]);

  React.useEffect(() => {
    apiCards.getUserInfo().then((data) => {
      setCurrentUser(data);

    }).catch((err) => {
      console.log(err);
    })
  }, [])


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

  function handleUpdateUser(currentUser) {
    apiCards.saveUserInfo(currentUser).then((data) => {

      setCurrentUser(data);
      closeAllPopups();
    }).catch((err) => {
      console.log(err);
      })

  }

  function handleUpdateAvatar(link) {
    apiCards.saveUserAvatar(link).then((data) => {
      setCurrentUser(data);
      closeAllPopups();
    }).catch((err) => {
      console.log(err);
      })
  }

  function handleAddPlaceSubmit(place) {
    apiCards.addCardNew(place)
    .then((newCard) => {
      setCards([newCard, ...cards])
      closeAllPopups();
      document.querySelector('.popup__form_new').reset();
    }).catch((err) => {
      console.log(err);
      })
  }

  return (

   <>
      <CurrentUserContext.Provider value={currentUser}>
      <CardsContext.Provider value={cards}>

      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onEditAvatar={handleEditAvatarClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
        onCardLike={handleCardLike}
        onCardDelete={handleCardDelete}
        cards={cards} >

      </Main>

      <ImagePopup
        card={selectedCard ? selectedCard : ''}
        onClose={closeAllPopups}
        isOpen={place ? 'popup_opened' : ''}

      />

      <EditProfilePopup
        isOpen={isEditProfilePopupOpen ? 'popup_opened' : ''}
        onClose={closeAllPopups}
        onUpdateUser={handleUpdateUser}
      />

      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen ? 'popup_opened' : ''}
        onClose={closeAllPopups}
        linkAvatar={currentUser.avatar}
        onUpdateAvatar={handleUpdateAvatar}
      />

      <AddPlacePopup
        isOpen={isAddPlacePopupOpen ? 'popup_opened' : ''}
        onClose={closeAllPopups}
        onAddPlace={handleAddPlaceSubmit}
      />

      <PopupWithForm
        name="delete_place"
        title="Вы уверены?"
        textButton="Да">

      </PopupWithForm>

      <Footer />

      </CardsContext.Provider>
      </CurrentUserContext.Provider>
   </>
  );
}

export default App;
