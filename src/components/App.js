import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (

   <>
      <Header />
      <Main />
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

      <section className="popup popup_user">
        <form className="popup__form popup__form_user" name="userprofile" noValidate>
          <button className="popup__close popup__close_user" type="button"></button>
          <fieldset className="popup__profile">
            <label className="popup__label">Редактировать профиль</label>
            <input id="name-input" type="text" className="popup__input popup__input_type_name" name="fullname" placeholder="Имя" required minLength="2" maxLength="40" />
            <span id="name-input-error" className="popup__error"></span>
            <label></label>
            <input id="job-input" type="text" className="popup__input popup__input_type_description" name="job" placeholder="О себе" required minLength="2" maxLength="200" />
            <span id="job-input-error" className="popup__error"></span>
          </fieldset>
          <button className="popup__button popup__button_user" type="submit">Сохранить</button>
        </form>
      </section>

      <section className="popup popup_avatar">
        <form className="popup__form popup__form_avatar" noValidate>
          <button className="popup__close popup__close_avatar" type="button"></button>
          <fieldset className="popup__profile popup__profile_avatar">
            <label className="popup__label popup__label_avatar">Обновить аватар</label>
            <input id="url-input" type="url" className="popup__input popup__input-avatar_type_link" name="avatar" placeholder="Ссылка на картинку" required />
            <span id="url-input-error" className="popup__error"></span>
          </fieldset>
          <button className="popup__button popup__button-save-avatar" type="submit">Сохранить</button>
        </form>
      </section>

      <section className="popup popup_new">
        <form className="popup__form popup__form_new" name="newplace" noValidate>
          <button className="popup__close popup__close_new" type="button"></button>
          <fieldset className="popup__profile popup__profile_new">
            <label className="popup__label popup__label_new">Новое место</label>
            <input id="place-input" type="text" className="popup__input popup__input-new_type_name" name="name" placeholder="Название" required minLength="1" maxLength="30" />
            <span id="place-input-error" className="popup__error"></span>
            <label></label>
            <input id="url-input" type="url" className="popup__input popup__input-new_type_link" name="link" placeholder="Ссылка на картинку" required />
            <span id="url-input-error" className="popup__error"></span>
          </fieldset>
          <button className="popup__button popup__button-save" type="submit" disabled>Сохранить</button>
        </form>
      </section>

      <section className="popup popup_delete_place">
        <form className="popup__form popup__form_delete_place" name="deletePlace">
          <button className="popup__close popup__close_delete_place" type="button"></button>
          <fieldset className="popup__profile popup__profile_delete">
            <label className="popup__label popup__label_delete_place">Вы уверены?</label>
          </fieldset>
          <button className="popup__button popup__button_delete_place" type="submit">Да</button>
        </form>
      </section>

   </>   
  );
}

export default App;
