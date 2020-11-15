import React from 'react';
import PopupWithForm from './PopupWithForm';
import CardsContext from '../contexts/CardsContext';

function AddPlacePopup(props) {

  const [namePlace, setNamePlace] = React.useState('');
  const [placeLink, setPlaceLink] = React.useState('');

  const cards = React.useContext(CardsContext);

  React.useEffect(() => {
    setNamePlace(cards.name);
    setPlaceLink(cards.link);
  }, [cards]);

  React.useEffect(() => {
    setNamePlace('');
    setPlaceLink('');
  }, [props.isOpen]);

  function handleNamePlaceChange(evt) {
    setNamePlace(evt.target.value);
  }

  function handlePlaceLinkChange(evt) {
    setPlaceLink(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    props.onAddPlace({
      name: namePlace,
      link: placeLink,
    });
  }

  return (
    <>

    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      name="new"
      title="Новое место"
      textButton="Сохранить">

      <input value={namePlace || ''} onChange={handleNamePlaceChange} id="place-input" type="text" className="popup__input popup__input-new_type_name" name="name" placeholder="Название" required minLength="1" maxLength="30" />

      <span id="place-input-error" className="popup__error"></span>
      <label></label>

      <input value={placeLink || ''} onChange={handlePlaceLinkChange} id="url-input" type="url" className="popup__input popup__input-new_type_link" name="link" placeholder="Ссылка на картинку" required />

      <span id="url-input-error" className="popup__error"></span>

    </PopupWithForm>

    </>
  )
}

export default AddPlacePopup;
