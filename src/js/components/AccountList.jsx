import React from 'react'
import '../../css/accountList.css'
import Account from "./Account.jsx"

class AccountList extends React.Component{
    state = {
        
    }


    componentDidMount(){
        
        }   

    render(){
        //console.log(this.props.state.accounts);
        return(
        <div className="accountList">
            <h3>Pepsi Employees</h3>    
           {
               this.props.state.accounts != null ?
               this.props.state.accounts.map(account =>(
                   account != "0x0000000000000000000000000000000000000000"?
                   <Account state={this.props.state} account={account}/>
                   :""
               ))
               :""
           }
        </div>
        );
    }   
    
}

export default AccountList