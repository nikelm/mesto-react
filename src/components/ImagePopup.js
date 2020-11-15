import React from 'react';

function ImagePopup(props) {

  return (

    <section className={`popup-place ${props.isOpen}`}>

      <div className="popup-place__container">
        <button onClick={props.onClose} className="popup__close popup-place__close" type="button"></button>
          <img src={props.card.link} alt={props.card.name} className="popup-place__image" />
          <p className="popup-place__title">{props.card.name}</p>
      </div>

    </section>

  )
}

export default ImagePopup;
