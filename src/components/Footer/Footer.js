import { Navigate } from "../Navigate";

export const Footer = () => {
  return (
    <footer className="footer container">
      <div className="footer_wrap">
        <h2 className="footer_title">Оформимо ваш інтер’єр із бездоганним стилем</h2>
        <h2 className="footer_title">+38 067 939 06 77</h2>
      </div>
      <div className="footer_wrap">
        <p className="footer_text">
          Або ви можете залишити свій номер телефону, і наші фахівці зв’яжуться
          з вами, щоб відповісти на всі ваші запитання та допомогти створити
          унікальне текстильне оформлення вашого інтер’єру.
        </p>
        <form>
          <label >Номер телефону</label>
          <input id="tel" type="tel" name="tel"></input>
          <input type="submit" value="Надіслати"/>
        </form>
      </div>
      <Navigate />
    </footer>
  );
};
