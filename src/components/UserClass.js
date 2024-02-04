import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
        userInfo:{
            name:"Dummy",
            location:"Default",
        },
    }
    console.log(this.props.name +"Child Constructor")
  }

  async componentDidMount(){
    console.log(this.props.name +"Child Component Did Mount");
    const data = await fetch("https://api.github.com/users/Sowbhagya-Shrinivas");
    const json = await data.json();
    this.setState({
        userInfo: json,
    });
    console.log(json);
  }

  componentDidUpdate(){
    this.timer = setInterval(()=>{
        console.log("Call for every component changes - NAMASTE REACT")
    },1000);
    console.log("Child Did update");
  }

  componentWillUnmount(){
    clearInterval(this.timer);
    console.log("Component will unmount")
  }

  render() {
    const{name,location} = this.state.userInfo;
    const{count} = this.state;
    console.log(this.props.name+"Child Render")
    return (
      <div className="user-card">
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h4>Contact : sowbhagya@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
