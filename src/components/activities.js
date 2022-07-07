import React from "react";

class Activity extends React.Component {
    constructor(props) {
        super(props)

    }


    render () {
        let randTypeIntro;
        let randTypeExtro;

        const intro = ['cafe', 'bowling', 'museum', 'restaurant'];
        const extro = ['amusement park', 'public park', 'zoo', 'bar'];
        //get random value from array
        randTypeIntro = intro[Math.floor(Math.random() * intro.length)]
        randTypeExtro = extro[Math.floor(Math.random() * extro.length)]
        // console.log(randType)

        // could possibly give date site with random ice breaker
        return (
            <div>
                <h1>{randTypeIntro}</h1>
                <br></br>
                {/* <h1>{randTypeExtro}</h1> */}
            </div>
        )
    }
}

export default Activity;