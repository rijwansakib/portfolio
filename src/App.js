import './App.css';
import Home from './pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './pages/Banner/Banner';
import RecentWork from './pages/RecentWork/RecentWork';

function App() {
  return (
    <div className="App">
      <Home></Home>
      <Banner></Banner>
      <RecentWork></RecentWork>
    </div>
  );
}

export default App;
