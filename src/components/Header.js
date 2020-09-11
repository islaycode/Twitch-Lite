import React from 'react'
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => {
    return (
        <div className="ui huge violet inverted menu">

            <Link to="/" className="item">
            
                    <i className="video camera icon"></i>      
                    Twitch Lite
            </Link>
            <div className="right menu">
                <Link to="/" className="item">
                    All Streams
               </Link>
               <GoogleAuth/>
            </div>
        </div>
    )
}

export default Header
//