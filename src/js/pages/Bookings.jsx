import React from 'react'
import '../../css/booking.css'
import Reservation from "../components/Reservation.jsx"

class Bookings extends React.Component{
    state = {
        
    }


    componentDidMount(){
        
        }

    render(){
        return(
            
        <div className="bookings-section">
            <div className="booking">
                {
                    this.props.state.bookings != null ?
                    <div className="table">{
                        this.props.state.bookings.map(rooms => (
                            <div className="row">
                                <div className="index">Room { rooms[0].room+1}</div>
                                <div className="booking-row">
                                {
                                    rooms.map(reservation => (
                                        <div className="cell"><Reservation state={this.props.state} cancelReservation={this.props.cancelReservation} reserve={this.props.reserve} reservation={reservation}/></div>
                                    ))
                                }
                                </div>
                            </div>
                        ))
                    }
                    </div>
                    : ""
                }
            </div>
        </div>
        );
    }  
    
}

export default Bookings