import React from 'react';

function ImagePopup(props) {

  return (

    <section className={`popup-place ${props.isOpen}`}>

      <div className="popup-place__container">
        <button onClick={props.onClose} className="popup__close popup-place__close" type="button"></button>
          <img src={props.link} alt="Изображение места" className="popup-place__image" />
          <p className="popup-place__title">{props.name}</p>
      </div>

    </section>

  )
}

export default ImagePopup;
