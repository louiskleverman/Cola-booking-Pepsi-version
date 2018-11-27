import React from 'react'
import '../../css/banner.css'
import { NavLink } from 'react-router-dom';

class Banner extends React.Component{
    state = {
        
    }


    componentDidMount(){
        
        }

    render(){
        return(
        <div className="banner">
            <div className="banner-title">
                PEPSI<br/>BOOKING<br/>APP
            </div>
            <div className="banner-image">
                <NavLink to="/">
                    <img src="../images/pepsi_logo.png"/>
                </NavLink>
            </div>
            <div className="banner-address">
                <div className="address-text">Current address</div>
                {   this.props.address != null ?
                    this.props.address
                    :
                    <em>You are not connected</em>
                }
            </div>
        </div>
        );
    }   
}

export default Banner