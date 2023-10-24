import Header from '../components/header';
import Card from '../components/card';
import LocationsTabs from '../components/cities';
import Form from '../components/form';


type MainPropsType = {
    placesCount: number;
  }

function Main({placesCount}: MainPropsType): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <LocationsTabs />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">312 places to stay in Amsterdam</b>
              <Form />

              <div className="cities__places-list places__list tabs__content">
                {Array.from({length: placesCount}, (_, index) => <Card key={index}/>)}
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
