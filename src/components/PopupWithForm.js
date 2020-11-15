import React from 'react';

function PopupWithForm(props) {

  return (
    <section className={`popup popup_${props.name} ${props.isOpen}`}>
    <form onSubmit={props.onSubmit} className={`popup__form popup__form_${props.name}`} name={props.name} noValidate>
      <button onClick={props.onClose} className={`popup__close popup__close_${props.name}`} type="button"></button>
      <fieldset className="popup__profile">
        <label className="popup__label">{ props.title }</label>
        {props.children}
      </fieldset>
      <button className={`popup__button popup__button_${props.name}`} type="submit">{props.textButton}</button>
    </form>
  </section>

  )
}

export default PopupWithForm;
