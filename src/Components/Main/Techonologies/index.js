import React from "react";
import Technology from "./Components/Technology";
import "./index.css";

class Technologies extends React.Component {
  //sending value to Technology child
  state = {
    technologies: [
      {
        name: <img src="./Assests/images/node.png" style={{ width: "25%" }}/>
        
       
      },
      {
        name:  <img src="./Assests/images/react.png"  />
        
        
      },
      {
        name:  <img src="./Assests/images/db.jpg"  />
        
      }
    ]
  };

  render() {
    const { technologies } = this.state;
    return (
      <div className ="tech" >
        {technologies.map(techology => (
          <Technology name={techology.name}/>
      
        ))}
      </div>
    );
  }
}

export default Technologies;
