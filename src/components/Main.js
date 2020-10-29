function Main() {
  return (

    <main className="main">

        <section className="profile">

          <button className="avatar-button" type="button">
            <img className="avatar" src="" alt="Ж.И. Кусто" />
          </button>

          <div className="profile__info">
            <div className="profile__user">
              <h1 className="profile__title">Жак-Ив Кусто</h1>
              <button className="profile__link" type="button"></button>
            </div>
          <p className="profile__paragraph">Исследователь океана</p>
          </div>

          <button className="profile__add" type="button"></button>

        </section>

        <section className="popup-place">

          <div className="popup-place__container">
            <button className="popup__close popup-place__close" type="button"></button>
            <img src="#" alt="Изображение места" className="popup-place__image" />
            <p className="popup-place__title"></p>
          </div>

        </section>

        <section className="elements"></section>

      </main>
  )
}

export default Main;