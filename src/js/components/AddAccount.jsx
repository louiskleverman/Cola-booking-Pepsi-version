import React from 'react'
import '../../css/addAccount.css'

class AddAccount extends React.Component{
    state = {
        
    }

    componentDidMount(){
    }   

    render(){
        return(
        <div className="addAccount">
            <h3>Add Pepsi Employee</h3>
            <input id="addressInput" type="text" placeholder="0x..."/>
            <button onClick={this.addAccount}>Add employee</button>
        </div>
        );
    }   

    addAccount = () =>{
        //Need regex check here
        let address = document.getElementById("addressInput").value;
        console.log("address",address);
        this.props.addEmployee(address);
    }
    
}

export default AddAccount