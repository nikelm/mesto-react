import React from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';


function Card(props) {

  const currentUser = React.useContext(CurrentUserContext);

  function handleClick() {
    props.onCardClick(props.card);
  }

  function handleLikeClick () {
    props.onCardLike(props.card);
  }

  function handleCardDelete() {
    props.onCardDelete(props.card);
  }

  function cardDeleteButtonClassName(item) {
    const isOwn = item.owner._id === currentUser._id;
    return (`${isOwn ? 'card__delete-icon' : 'card__delete-icon_hidden'}`);

  }

  function cardLikeButtonClassName(item) {
    const isLiked = item.likes.some(i => i._id === currentUser._id);

    return (`${isLiked ? 'card__like_active' : 'card__like'}`);
  }

  return (
    <>


    <div className="card">

      <button onClick={handleClick} type="button" className="card__button">
        <img className="card__image" alt={props.card.name} src={props.card.link} />
      </button>

      <button onClick={handleCardDelete} type="button" className={cardDeleteButtonClassName(props.card)}></button>

        <div className="card__item-rectangle">
          <h3 className="card__item-subtitle">{props.card.name}</h3>
            <div className="card__board">
              <button onClick={handleLikeClick} type="button" className="card__item-button">
                <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg" className={cardLikeButtonClassName(props.card)}>
                  <path d="M18.8005 1.95849L18.8023 1.96024C20.7437 3.88233 20.7462 7.03905 18.8005 8.98466L10.361 17.4238L1.94628 9.00951C1.94569 9.00892 1.94511 9.00832 1.94453 9.00772C1.0188 8.06185 0.5 6.81051 0.5 5.48217C0.5 4.14855 1.00122 2.89987 1.94265 1.95849L1.94266 1.95849L1.94441 1.95672C3.86629 0.0157068 7.02186 0.0131363 8.96748 1.97793L8.96922 1.97967L10.0074 3.01784L10.3646 3.37496L10.7181 3.01425L11.7545 1.95673C13.6994 0.0138381 16.8563 0.014425 18.8005 1.95849Z" stroke="black"/>
                </svg>
              </button>
              <p className="card__counter">{props.card.likes.length}</p>
            </div>
        </div>
    </div>

  </>
  )
}

export default Card;
