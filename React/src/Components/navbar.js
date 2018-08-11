import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

const NepalFlag = () => (
    <img id="nepal-flag" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Flag_of_Nepal_%28with_spacing%2C_aspect_ratio_4-3%29.svg/220px-Flag_of_Nepal_%28with_spacing%2C_aspect_ratio_4-3%29.svg.png" />
);

const nsasText = {
    fontFamily: 'Knewave, cursive',
    fontSize: '56px',
}

export class CustomNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        }
    }

    toggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }
    render() {
        return (
            <div>
                <ul className="nav justify-content-end container">
                    <li className="nav-item">
                        <a className="nav-link">Student Organization of Nepalese Students at Southeastern | <strong> Questions? Call us at
                            985-687-0912</strong></a>
                    </li>
                </ul>
                <div className="container">
                    <Navbar light expand="md">
                        <h2 className="animated pulse infinite"><span id="nsas-Text" style={nsasText}>NSAS</span></h2>&nbsp;&nbsp;&nbsp;<NepalFlag/>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink tag={Link} to='/' className="btn btn-sm btn-outline-success">
                                        <i className="fas fa-home"></i> Home</NavLink>
                                </NavItem>
                                <NavItem>&nbsp;</NavItem>
                                <NavItem>
                                    <NavLink tag={Link} to='/PanelMembers' className="btn group-btn btn-sm btn-primary"><i className="fas fa-users">
                                    </i> Panel Members</NavLink>
                                </NavItem>
                                <NavItem>&nbsp;</NavItem>
                                <NavItem >
                                    <NavLink tag={Link} to='gallery' className="btn group-btn btn-sm btn-holi"><i className="fas fa-image">
                                    </i> View Gallery</NavLink>
                                </NavItem>
                                <NavItem>&nbsp;</NavItem>
                                <NavItem>
                                    <NavLink tag={Link} to='contactus' className="btn group-btn btn-sm btn-purple">
                                        <i className="fas fa-envelope"></i> Contact Us</NavLink>
                                </NavItem>
                                <NavItem>&nbsp;</NavItem>
                                <NavItem >
                                    <NavLink tag={Link} to='donate_us' className="btn group-btn btn-sm btn-blue"><i className="fab fa-paypal">
                                    </i> Donate Us</NavLink>
                                </NavItem>
                                <NavItem>&nbsp;</NavItem>
                                <NavItem>
                                    <NavLink tag={Link} to='/login' className="btn btn-sm btn-outline-info">
                                        <i className="fas fa-lock"></i> Admin Login</NavLink>&nbsp;
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                    <hr />
                </div>
            </div>
        );
    }
}