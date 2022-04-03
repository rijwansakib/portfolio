import './App.css';
import Home from './pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './pages/Banner/Banner';
import RecentWork from './pages/RecentWork/RecentWork';
import FeaturedProject from './pages/FeaturedProject/FeaturedProject';
import Contact from './pages/Contact/Contact';
import Admin from './Admin/Admin/Admin';
import DashBoard from './Admin/DashBord/DashBoard';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Projects from './Admin/Projects/Projects';
import RecentWorkDashborad from './Admin/RecentWorkDashborad/RecentWorkDashborad';
import ProjectManage from './Admin/ProjectManage/ProjectManage';
import BannerImage from './Admin/BannerImage/BannerImage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}>
        </Route>
        <Route path='/home' element={<Home></Home>}>
        </Route>
        <Route path='/banner' element={<Banner></Banner>}>
        </Route>
        <Route path='/recent-work' element={<RecentWork></RecentWork>}>
        </Route>
        <Route path='/featured-project' element={<FeaturedProject></FeaturedProject>}>
        </Route>
        <Route path='/contact' element={<Contact></Contact>}>
        </Route>



        <Route path='/admin' element={<Admin></Admin>}>
        </Route>


                  <Route path='/dashboard' element={<DashBoard></DashBoard>}>
                 
                  <Route path='project' element={<Projects></Projects>}>
                  </Route> 
                  <Route path='recent' element={<RecentWorkDashborad></RecentWorkDashborad>}>
                  </Route>
                  <Route path='project-manage' element={<ProjectManage></ProjectManage>}>
                  </Route>
                  <Route path='banner' element={<BannerImage></BannerImage>}>
                  </Route>

                  </Route> 
              



      </Routes>
    </div>
  );
}

export default App;
