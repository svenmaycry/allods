import { MainPage } from '../../pages/Main-page';
import '../../scss/app.scss';
import { Header } from '../Header/Header.jsx';

export const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <MainPage />
    </div>
  );
};
