import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    render(){
        return (
            <body>
                <header id="home-header">
                    <div id="home-header-container">
                        <h1 id="home-h1">Anywhere Fitness</h1>
                        <nav id="home-nav">
                        <Link id="here" to={{pathname: `/Home`}} className="addClass-nav-a" href="#">Home</Link>
                        <Link to={{pathname: `/Register`}} className="addClass-nav-a" href="#">Register</Link>
                        <Link to={{pathname: `/Login`}} data-test-id="login" className="addClass-nav-a" href="#">Login</Link>
                        </nav>
                    </div>
                </header>
                <section id="home-just-below-header">
                    <div id="home-paragraphs">
                        <p>The world is your gym.</p>
                        <p>Welcome.</p>
                    </div>
                </section>
                <section id="home-body">
                    <div id="home-image-background">
                        <h2 id="home-h2"><a href="#" data-test-id="browse-classes">Browse Classes</a></h2>
                        <p id="home-p">Our expert instructors conduct classes literally anywhere. Take a yoga class on a mountaintop. Do boot camp on the beach. Go to an abandoned mansion for mat pilates. The options are limitless.</p>
                    </div>
                </section>
                <footer>
                    <div id="home-bottom-buttons">
                        <button className="home-buttons" id="home-for-clients-button" href="#">For Clients</button>
                        <button className="home-buttons" id="home-for-instructors-button" href="#">For Instructors</button>
                    </div>
                </footer>
            </body>
        )
    }
}

export default Home;