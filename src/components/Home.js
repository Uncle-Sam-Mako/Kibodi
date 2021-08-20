import React, { Component, Fragment } from 'react';
import homeImg from '../img/keyboard.png';
import logo from '../img/kibodi_logo.svg'
import './Home.css'

class Home extends Component{
    render(){
        return(
            <Fragment>
                <div className="home">
                    <div className="navbar">
                        <div className="navbar-brand">
                            <span className="logo">
                                <img src={logo} alt="logo" />
                            </span>
                            <span className="name">KIBODI</span>
                        </div>
                        <div className="links">
                            <ul>
                                <li><a href="#">about?</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="backround-circle"></div>
                    <header>
                        <div className="home-text">
                            <h3>
                                <span>Welcome to</span>
                                <span>Kibodi!</span>
                            </h3>
                            <p>Let's increase your typing speed</p>
                            <button className="btn btn-white">start</button>
                        </div>
                        <div className="home-img">
                            <img src={homeImg} alt="" />
                        </div>
                    </header>                   
                </div>
            </Fragment>
        )
    }
}

export default Home;