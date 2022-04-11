import'./Dashboard.css'
import { Link, Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div className='dashboard mb-5'>
            
            <div className="side-bar d-flex ">
                    <div className='header' >
                        <h1 className='mt-3'>DashBoard</h1>  
                        <nav className=' mt-5' >
                            <div className='porject-header  d-flex flex-column'>
                                <Link className='link text-decoration-none '  to="project-manage" >Project Manage</Link> 
                                <Link className='link text-decoration-none '  to="project" >Add Projects</Link> 
                                <Link className='link text-decoration-none '  to="banner" >Add Banner Image</Link>
                            </div>
                        </nav>
                    </div>


                       <Outlet />
                
                    </div> 
        </div>

    );
};

export default DashBoard;