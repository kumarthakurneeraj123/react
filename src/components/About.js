import React from "react";
import UserClass from "./UserClass";

class About extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <h1>About</h1>
                <UserClass name="Niraj" location="Samastipur, Bihar" />
            </div>
        );
    }
}
// const About = ()=>{
//     return (
//         <div>
//             <h1>About</h1>
//             {/* <User name="Niraj" location="Samastipur, Bihar"/> */}
//             <UserClass name="Niraj" location="Samastipur, Bihar" />
//         </div>
//     );
// } 

export default About;