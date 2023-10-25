import React from "react";
class UserClass extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          userInfo: {
            name: "Dummy Name",
            location: "Default Location"
          },
          isLoading: true,
        }
    }

    async componentDidMount(){
      const res = await fetch("https://api.github.com/users/kumarthakurneeraj123");
      const json = await res.json();
      if(json.id){
        this.setState({isLoading: false})
      }
      this.setState({userInfo:json})
      console.log(json);
    }
    
  render() {
    const {name, location, avatar_url} = this?.state?.userInfo;
    return this.state.isLoading ? <h1>Loading...</h1>:(
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Cotact: kumarthakurneeraj123</h4>
      </div>
    );
  }
}

export default UserClass;
