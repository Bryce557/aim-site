import React, { Component} from 'react';
import { submitRegister } from '../actions/authActions';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import '../style/login.css'
import '../style/colors.css'
import '../style/fonts.css'

class Register extends Component {

    constructor(props){
        super(props);

        this.updateDetails = this.updateDetails.bind(this);
        this.register = this.register.bind(this);
        this.state = {
            details:{
                name: '',
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

    register(){
        const {dispatch} = this.props;
        dispatch(submitRegister(this.state.details));
    }

    render(){
        return (
            <div className="login-style">
                <h1 className="acm-multi-color">Create an account</h1><br /><br />
                <Form className='form-horizontal'>
                    
                    <Form.Group controlId="name">
                        <Form.Label style={{ color: 'white' }}>Name</Form.Label>
                        <Form.Control
                            onChange={this.updateDetails} value={this.state.details.name} type="name"
                            className="textbox-background" 
                        /> 
                    </Form.Group>
                    <br /> 
                
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
                        <Form.Text style={{ marginLeft: '25%', marginRight: '25%' }}muted>
                            Your password must be 8-20 characters long and include at least one lowercase
                            and uppercase letter, a number, a special character, and no spaces.
                        </Form.Text><br />
                    </Form.Group>
                    
                    <div className="button-container acm-multi-color"> 
                        <LinkContainer to="./">
                            <Button size="large" className="acm-multi-color button" onClick={this.register}>Register</Button>
                        </LinkContainer>  
                    </div><br /><br />    
                    
                    <div className="container">
                        <div id="appleid-signin" data-color="black" data-border="false" data-type="sign in"></div>
                    </div>

                 </Form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
    }
}

export default connect(mapStateToProps)(Register);