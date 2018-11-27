import React from 'react'
import '../../css/navbar.css'
import { NavLink } from 'react-router-dom'

class Navbar extends React.Component{
    state = {
        
    }


    componentDidMount(){
        
        }

    render(){
        return(
            <div className="navbar">
                <NavLink to="/" className="link" exact>Home</NavLink>
                <NavLink to="/bookings" className="link">Bookings</NavLink>
                <NavLink to="/accounts" className="link">Authorized accounts</NavLink>
            </div>
        );
    }  
    
}

export default Navbar