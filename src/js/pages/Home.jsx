import React from 'react'
import '../../css/home.css'
import { NavLink } from 'react-router-dom';

class Home extends React.Component{
    
    render(){
        let indexes = [];
        return(
        <React.Fragment>
            <div className="container home">
                <div className="text-center">
                    <h2>Welcome</h2>
                    <h5>To the Pepsi Booking App</h5>    
                </div>
                <br/>
                <h2>How to use the application</h2>
                <p>
                Praesent sapien dolor, tempor eu augue quis, sollicitudin porta eros. Duis vel odio ligula. Sed a augue vel diam egestas 
                auctor. Donec egestas maximus ipsum ullamcorper egestas. Aliquam placerat blandit urna, et consequat nulla feugiat eu. 
                Proin posuere aliquam pharetra. Duis in ante mauris. Vivamus commodo, nisi bibendum vestibulum bibendum, libero nisl hendrerit
                    est, vel elementum odio quam at magna.
                </p>
                <br/>
                <h2>Additional information</h2>
                <p>
                Praesent sapien dolor, tempor eu augue quis, sollicitudin porta eros. Duis vel odio ligula. Sed a augue vel diam egestas 
                auctor. Donec egestas maximus ipsum ullamcorper egestas. Aliquam placerat blandit urna, et consequat nulla feugiat eu. 
                Proin posuere aliquam pharetra. Duis in ante mauris. Vivamus commodo, nisi bibendum vestibulum bibendum, libero nisl hendrerit
                    est, vel elementum odio quam at magna.
                </p>
            
            </div>
        </React.Fragment>
        );
    }

}

export default Home