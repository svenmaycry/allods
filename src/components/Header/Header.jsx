import blackBlockLeft from '../../assets/images/header/header-black-left.png';
import blackBlockRight from '../../assets/images/header/header-black-right.png';
import blackBlockBottom from '../../assets/images/header/header-black-bottom.png';
import girl from '../../assets/images/header/header-girl.png';
import man from '../../assets/images/header/header-man.png';
import boxes from '../../assets/images/header/header-boxes.png';
import logo from '../../assets/images/header/header-logo.png';
import blueBottom from '../../assets/images/header/header-blue-bottom.png';
import blueCenter from '../../assets/images/header/header-blue-center.png';

export const Header = () => {
  return (
    <div className="header">
      <div className="header__background">
        <div className="header__background-black-left">
          <img src={blackBlockLeft} alt="black-left" />
        </div>
        <div className="header__background-black-right">
          <img src={blackBlockRight} alt="black-right" />
        </div>
        <div className="header__background-black-bottom">
          <img src={blackBlockBottom} alt="black-bottom" />
        </div>
        <div className="header__background-girl">
          <img src={girl} alt="girl" />
        </div>
        <div className="header__background-man">
          <img src={man} alt="man" />
        </div>
        <div className="header__background-boxes">
          <img src={boxes} alt="boxes" />
        </div>
        <div className="header__background-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="header__background-blue-bottom">
          <img src={blueBottom} alt="blue-bottom" />
        </div>
        <div className="header__background-blue-center">
          <img src={blueCenter} alt="blue-bottom" />
        </div>
        <div className="header__background-text">
          <h3 className="header__background-text-main">
            КОЛЛЕКЦИОННЫЕ ИЗДАНИЯ
          </h3>
          <p className="header__background-text-bottom">
            Побеждайте легко, побеждайте стильно с новыми коллекционными
            изданиями «Аллодов Онлайн»!
          </p>
        </div>
      </div>
    </div>
  );
};
