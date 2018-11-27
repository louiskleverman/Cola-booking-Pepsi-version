import React from 'react'
import '../../css/reservation.css'

class Reservation extends React.Component{
    state = {
        
    }
    componentDidMount(){
        
    }

    render(){
        let houra = (this.props.reservation.hour+5)%12+1;
        let suffixa = this.props.reservation.hour + 6 < 13 ? "am" : "pm";
        let hourb = (this.props.reservation.hour+6)%12+1;
        let suffixb = this.props.reservation.hour + 7 < 13 ? "am" : "pm";
        return(
        <div className={"company"+this.props.reservation.company + " reservation"}>
            <div className="information" onClick={this.reserve}>
            { houra + suffixa + " - " + hourb + suffixb}
            </div>
            {
               this.props.reservation.reserver == this.props.state.account ?
                <div className="delete" onClick={this.cancelReservation}>x</div>
               : ""
            }
        </div>
        );
    }  
    
    reserve = () =>{
        console.log("Reservation " + this.props.reservation.room + " " + this.props.reservation.hour);
        this.props.reserve(this.props.reservation.room,this.props.reservation.hour);
    }
    cancelReservation = () =>{
        console.log("Canceling Reservation " + this.props.reservation.room + " " + this.props.reservation.hour);
        this.props.cancelReservation(this.props.reservation.room,this.props.reservation.hour);
    }
}

export default Reservation