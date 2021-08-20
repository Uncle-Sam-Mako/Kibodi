import React, { Component, Fragment } from 'react';
import homeImg from '../img/undraw_dev_productivity_umsq.svg';

class Home extends Component{
    render(){
        return(
            <Fragment>
                <div className="home">
                    <div className="backround-rect"></div>
                    <div className="backround-circle"></div>
                    <div className="home-img">
                        <img src={homeImg} alt="" />
                    </div>
                    <div className="home-text">
                        <h3>Welcome to Kibodi !</h3>
                        <p>Let's increase your typing speed</p>
                        <button className="btn btn-white">start</button>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Home;