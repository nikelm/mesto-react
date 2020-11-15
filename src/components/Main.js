import React from 'react';
import CardsContext from '../contexts/CardsContext';
import Card from './Card';
import CurrentUserContext from '../contexts/CurrentUserContext';


function Main(props) {

  const currentUser = React.useContext(CurrentUserContext);
  const cards = React.useContext(CardsContext);

  return (


    <main className="main">

        <section className="profile">

          <button onClick={props.onEditAvatar} className="avatar-button" type="button">
            <img className="avatar" src={currentUser.avatar} alt="Ж.И. Кусто" />
          </button>

          <div className="profile__info">
            <div className="profile__user">
              <h1 className="profile__title">{currentUser.name}</h1>
              <button onClick={props.onEditProfile} className="profile__link" type="button"></button>
            </div>
          <p className="profile__paragraph">{currentUser.about}</p>
          </div>

          <button onClick={props.onAddPlace} className="profile__add" type="button"></button>

        </section>

        <section className="elements">
          {
            cards.map((item) =>
              <Card key={item._id}
                onCardClick={props.onCardClick}
                card={item}
                onCardLike={props.onCardLike}
                onCardDelete={props.onCardDelete}
              />
            )
          }
        </section>

    </main>


  )
}

export default Main;
