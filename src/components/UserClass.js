import React from "react";
class UserClass extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count1: 0,
            count2: 1
        }
        console.log(this.props.name+"Child constructor");
    }

    componentDidMount(){
      console.log(this.props.name+"child componentdidmount");
    }
    
  render() {
    console.log(this.props.name+"Child render");
    const {name, location} = this.props;
    return (
      <div className="user-card">
        <h1>Count1: {this.state.count1}</h1>
        <button onClick={()=>{
            this.setState({count1: this.state.count1+1});
        }}>Increase</button>
        <h1>Count2: {this.state.count2}</h1>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Cotact: kumarthakurneeraj123</h4>
      </div>
    );
  }
}

export default UserClass;
