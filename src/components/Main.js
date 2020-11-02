import React from 'react';
import apiCards from '../utils/Api';
import Card from './Card';


function Main(props) {

  const [userName, setUserName] = React.useState([]);
  const [userDescription, setUserDescription ] = React.useState([]);
  const [userAvatar, setUserAvatar] = React.useState([]);

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    apiCards.getUserData().then((data) => {

      setUserAvatar(data.avatar);
      setUserDescription(data.about);
      setUserName(data.name)
    })
  }, [userAvatar, userName, userDescription])

  React.useEffect(() => {
    apiCards.getInitialCards().then((data) => {

      setCards(data.map((item =>({
        id: item._id,
        name: item.name,
        link: item.link,
        onCardClick: props.onCardClick,
        })))
      )
    })
  }, [])


  return (


    <main className="main">

        <section className="profile">

          <button onClick={props.onEditAvatar} className="avatar-button" type="button">
            <img className="avatar" src={userAvatar} alt="Ж.И. Кусто" />
          </button>

          <div className="profile__info">
            <div className="profile__user">
              <h1 className="profile__title">{userName}</h1>
              <button onClick={props.onEditProfile} className="profile__link" type="button"></button>
            </div>
          <p className="profile__paragraph">{userDescription}</p>
          </div>

          <button onClick={props.onAddPlace} className="profile__add" type="button"></button>

        </section>

        <section className="elements">
          {
            cards.map(({id, ...props}) =>
              <Card key={id} {...props} />
            )
          }

        </section>

    </main>


  )
}

export default Main;
