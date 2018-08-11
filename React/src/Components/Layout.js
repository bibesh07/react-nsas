import React, { Component } from 'react';
import { CustomNav } from './navbar.js';

export class Layout extends Component {
  render() {
    return (
        <div>
            <CustomNav />
            {this.props.children}
            <footer className="page-footer font-small cyan darken-3">

                <div className="container">

                    <div className="row">

                        <div className="col-md-12 py-5 text-center">
                            <div className="flex-center">

                                <a className="fb-ic">
                                    <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                                </a>
                                <a className="tw-ic">
                                    <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                                </a>
                                <a className="gplus-ic">
                                    <i className="fab fa-google-plus fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                                </a>
                                <a className="ins-ic">
                                    <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                                </a>
                                <a >
                                    <i className="fas fa-university white-text mr-md-5 mr-3 fa-2x"></i>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="footer-copyright text-center py-3">© 2018 Copyright:
                    <a href="https://nsas.com/"> NSAS.com</a>
                </div>

            </footer>
        </div>
    );
  }
}