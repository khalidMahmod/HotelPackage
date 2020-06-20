import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <section className="jumbotron text-center bg-dark">
                    <div className="container">
                        <h3 className="text-info">Welcome to Hotel Packages Management App</h3>
                        <p className="text-light lead">Grow by offering personified hotel experience for your guests</p>
                    </div>
                </section>
            </div>
        );
    }
}
export default Header