import React, { Component } from 'react';
import { submitLogin } from '../actions/authActions';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import '../style/login.css'
import '../style/colors.css'
import '../style/fonts.css'


class Login extends Component {

    constructor(props) {
        super(props);
        this.updateDetails = this.updateDetails.bind(this);
        this.login = this.login.bind(this);

        this.state = {
            details:{
                email: '',
                password: ''
            }
        };
    }

    updateDetails(event){
        let updateDetails = Object.assign({}, this.state.details);

        updateDetails[event.target.id] = event.target.value;
        this.setState({
            details: updateDetails
        });
    }

    login() {
        const {dispatch} = this.props;
        dispatch(submitLogin(this.state.details));
    }

    componentDidMount() {
        // Initialize Apple Sign In
        if (window.AppleID) {
            window.AppleID.auth.init({
                clientId : '[CLIENT_ID]',
                scope : '[SCOPES]',
                redirectURI : '[REDIRECT_URI]',
                state : '[STATE]',
                nonce : '[NONCE]',
                usePopup : true
            });
        } else {
            console.error("Apple Sign In not available.");
        }
    }


    render(){
        return (
            <div className="login-style">
                <h1 className="acm-multi-color">Login to your account</h1><br /><br />
                <Form className='form-horizontal'>
                    
                    <Form.Group controlId="email">
                        <Form.Label style={{ color: 'white' }}>Email</Form.Label>
                        <Form.Control
                            onChange={this.updateDetails} value={this.state.details.email} type="email" 
                            className="textbox-background"
                        /> 
                    </Form.Group>
                    <br /> 
                    
                    <Form.Group controlId="password">
                        <Form.Label style={{ color: 'white' }}>Password</Form.Label>
                        <Form.Control
                            onChange={this.updateDetails} value={this.state.details.password} type="password" 
                            className="textbox-background"
                        />
                    </Form.Group>
                    <br />
                    
                    <div className="button-container"> 
                        <LinkContainer to="./">
                            <Button variant="dark" className="acm-multi-color button" onClick={this.login}>Sign in</Button>
                        </LinkContainer>
                        <LinkContainer to="/register">
                            <Button variant="dark" className="acm-multi-color button">Register</Button> 
                        </LinkContainer>  
                    </div>
                    
                    <br /><br />  
                    <div className="container">
                        <div id="appleid-signin" data-color="black" data-border="true" data-type="sign in"></div>
                    </div>
                 </Form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loggedIn: state.auth.loggedIn,
        email: state.auth.email,
        password: state.auth.password
    }
}

export default connect(mapStateToProps)(Login);