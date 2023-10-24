import Main from '../pages/main';

type AppPropsType = {
  placesCount: number;
}

function App({placesCount}: AppPropsType): JSX.Element {
  return (
    <Main placesCount={placesCount}/>
  );
}

export default App;
