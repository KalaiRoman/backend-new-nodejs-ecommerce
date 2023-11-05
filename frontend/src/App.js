
import './App.scss';
import Header from './pages/home/Header';
import Router from './router/Router';
function App() {
  return (
    <div className='main-home-section'>
      <div className='inside-home-section'>
        <div className='header-section-home'>
          <Header />
        </div>
        <div>
          <Router />
        </div>
      </div>
    </div>
  );
}

export default App;
