import { Component } from "react";

class Try extends Component{
    constructor(props){
        super(props);
        console.log("Try constructor");
    }

    componentDidMount(){
        console.log("Try componentDidMount");
    }
    render(){
        console.log("Try render");
        return(<div>
            Try
        </div>)
    }
}

export default Try;