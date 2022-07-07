import React from 'react';
import { Link } from 'react-router-dom'


class Persona extends React.Component {
    constructor(props) {
        super(props);
    }
    /* 
        searchable types
        -introverted: cafe, bowling, museum, bar, restaurant
        -extraverted- amusement parks, public park, zoo's
    */

    // basic form functionality-----------------
    // select personality type
    // dependent on personality type you have option to select from dropdown
    // dropdown option will lead to request type for map input 
    // 
    // const introverted = ['
    
    // const extroverted = ['amusement park', 'public park', 'zoo', 'bar'];

    render() {
        // const introverted = ['cafe', 'bowling', 'museum', 'restaurant'];
        // const extroverted = ['amusement park', 'public park', 'zoo', 'bar'];
        return (
            <div>     
                <h1>Tell Us About Yourself</h1>
                <h4>Personality Type</h4>
                <p>We'd love to get to know you better</p>

                <div class="dropdown">
                <button class="dropbtn">How I'd best describe myself</button>
                    <div class="dropdown-content">
                        <p>Introverted</p>
                        <p>Extroverted</p>
                        <p>Neutral</p>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Persona;
