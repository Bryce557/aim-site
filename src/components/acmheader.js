import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {logoutUser} from "../actions/authActions";
import {connect} from 'react-redux';
import logo from '../logo.png'
import '../style/acmheader.css'
import './homepage'
import '../style/colors.css'
import '../style/fonts.css'

class AcmHeader extends Component {
    logout() {
        this.props.dispatch(logoutUser());
    }

    render() {
        return (
            <div>
                <Navbar className="navbar" expand="lg" variant="dark">
                    <Navbar.Brand>
                        <span className="acm-heavier"><img src={logo} style={{ width: '40px', height: 'auto' }} alt="Logo" /> at CU Denver</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="nav-style">
                            <LinkContainer to="/">
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/blog">
                                <Nav.Link disabled={!this.props.loggedIn}>Blog</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/signin">
                                <Nav.Link>{this.props.loggedIn ? <button onClick={this.logout.bind(this)}>Logout</button> : 'Login'}</Nav.Link>
                            </LinkContainer>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loggedIn : state.auth.loggedIn,
        email : state.auth.email,
        //selectedMovie: state.movie.selectedMovie
    }
}

export default connect(mapStateToProps)(AcmHeader);

