import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import Try from "./Try";
class About extends React.Component{
    constructor(props){
        super(props);
        console.log("Parent constructor");
    }
    componentDidMount(){
        console.log("Parent componentDidMount");
    }
    render(){
        console.log("Parent render");
        return (
            <div>
                <Try />
                <h1>About</h1>
                {/* <User name="Niraj" location="Samastipur, Bihar"/> */}
                <UserClass name="Niraj" location="Samastipur, Bihar" />
                <UserClass name="Akshay" location="Dehradun, Uttarakhand" />
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