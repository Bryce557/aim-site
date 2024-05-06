import React, { Component} from 'react';
import { connect } from 'react-redux'
import Login from './login';
import Register from './register';
import { logoutUser } from '../actions/authActions';

class Authentication extends Component {

    constructor(){
        super();

        this.state = {
            toggleReg: false
        };
    }

    componentDidMount(){

    }

    showLogin(){
        this.setState({
            toggleReg: false
        });
    }

    showReg(){
        this.setState({
            toggleReg: true
        });
    }

    logout(){
        this.props.dispatch(logoutUser());
    }

    render(){
        const userNotLoggedIn = (
            <div>
                { this.state.toggleReg ? <Register /> : <Login /> }
            </div>
        );
        const userLoggedIn = this.props.email;
        return (
            <div>
                {this.props.loggedIn ? userLoggedIn : userNotLoggedIn}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loggedIn: state.auth.loggedIn,
        email: state.auth.email
    }
}

export default connect(mapStateToProps)(Authentication)