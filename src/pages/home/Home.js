import React from 'react'
import { MdDevices } from "react-icons/md";
import { Link } from 'react-router-dom';
import "./Home.scss";
import heroImg from "../../assets/home-image.webp"
import { ShowInLogin, ShowInLogout } from '../../components/protect/ComponentInHome';


const Home = () => {
  return (
    <div className='home'>
        <nav className='container --flex-middle'>
            <div className='logo'>
                <MdDevices size={35}/>
            </div>
            <ul className='home-links'>

                {/*Register button is shown when user is logged out*/}
                <ShowInLogout>
                    <li>
                        <button className='--button --button-general'>
                            <Link to="/register">Register</Link>
                        </button>
                    </li>
                </ShowInLogout>
                
                {/*Login button is shown when user is logged out*/}
                <ShowInLogout>
                    <li>
                        <button className='--button --button-general'>
                            <Link to="/login">Log In</Link>
                        </button>
                    </li>
                </ShowInLogout>
                
                {/*Dashboard button is shown when user is logged in*/}
                <ShowInLogin>   
                    <li>
                        <button className='--button --button-general'>
                            <Link to="/dashboard">Dashboard</Link>
                        </button>
                    </li>
                </ShowInLogin>
                
            </ul>
        </nav>

        <section className='container hero'>
            
            <div className='home-image'>
                <img src={heroImg} alt='Telit IT Inventory'/>
            </div>
            <div className='home-text'>
                <h2>IT Inventory Management</h2>
                <p>With over 20 years working in the IoT field, we provide secure and advanced IoT solutions. 
                    Our experts have led the way in using a successful end-to-end system to ensure 
                    all components work effiently.</p>
                <p>This application manages all IT equipments of our company. 
                    IT devices of company headquarters all over the world are controlled.
                </p>
                <div className='home-button'>
                    <button className='--button --button-secondary'>
                        <Link to="/dashboard">Device management</Link>
                    </button>
                </div>
            </div>
        </section>

    </div>
  )
}


export default Home