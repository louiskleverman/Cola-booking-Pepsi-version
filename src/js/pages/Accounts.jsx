import React from 'react'
import '../../css/accounts.css'
import AccountList from "../components/AccountList.jsx"
import AddAccount from "../components/AddAccount.jsx"
import { NavLink } from 'react-router-dom';

class Accounts extends React.Component{
    
    render(){
        let indexes = [];
        return(
        <React.Fragment>
            <div className="accounts container">
                <div className="row">
                    <div className="col">
                        <AddAccount addEmployee={this.props.addEmployee}/>
                    </div>
                    <div className="col">
                        <AccountList state={this.props.state}/>
                    </div>
                </div>
            </div>
        </React.Fragment>
        );
    }

}

export default Accounts