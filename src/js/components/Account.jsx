import React from 'react'

class AccountList extends React.Component{
    state = {
        account : null
    }


    componentDidMount(){
        this.setState({account : this.props.account}); 
    }   

    render(){
        let classes = this.props.state.account == this.state.account ? "current" : ""
        return(
            <div className={"account " + classes}>
                {this.state.account}
                <div className="delete">
                    <i className="fas fa-times" onClick={this.deleteEmployee}></i>
                </div>
            </div>
        );
    }   

    deleteEmployee = () =>{
        alert("deleted employee " + this.account);
        
        this.props.state.bookingInstance.removePepsiEmployee(this.state.account,{from:this.props.state.account}).then(()=>{
            alert("Employee removed");
        })

    }
}

export default AccountList