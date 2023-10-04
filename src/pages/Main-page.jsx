import dog from '../assets/images/main/main-dog.png';
import ellipse from '../assets/images/main/main-ellipse.png';
import cartDog from '../assets/images/main/main-cart-dog.png';
import blueGlow from '../assets/images/main/main-blue.png';
import { Items } from '../components/Items/Items';

export const MainPage = () => {
  return (
    <div className="main">
      <div className="blue-glow">
        <img src={blueGlow} alt="#" />
      </div>
      <div className="main__dog main-dog">
        <img src={dog} alt="#" className="main-dog__image" />
        <img className="main-dog__ellipse" src={ellipse} alt="" />
      </div>
      <div className="main__content main-content">
        <div className="main-content__title">
          НАБОР «ПОСЫЛКА С КОНТРАБАНДОЙ»
        </div>
        <div className="main-content__servers">
          <div className="main-content__servers-free">Бесплатные сервера</div>
          <div className="main-content__servers-pay">Подписочный сервер</div>
        </div>
        <Items />
        <div className="main-content__cart main-cart">
          <div className="main-cart__image">
            <img src={cartDog} alt="#" />
          </div>
          <div className="main-cart__content">
            <div className="main-cart__price">399 ₽</div>
            <button className="main-cart__button">Приобрести</button>
          </div>
        </div>
      </div>
    </div>
  );
};
