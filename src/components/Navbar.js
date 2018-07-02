import React, { Component } from 'react';

class Navbar extends Component {
  render() {

    return(
      <nav>
        <ul>
          <li> <a href="url">About Me</a> </li>
          <li> <a href="url">Portfolio</a> </li>
          <li> <a href="url">Resume</a> </li>
          <li> <a href="url">Contact</a> </li>
        </ul>
      </nav>
    )
  }
}


export default Navbar;




// import React, { Component } from 'react';
//
// class Project extends Component {
//   render() {
//
//     let classes = this.props.imgName + " portfolio-img" ;
//
//     return(
//       <div>
//         <h2>{ this.props.title }</h2>
//         <div className={ classes } ></div>
//         <p>{ this.props.description }</p>
//       </div>
//     )
//   }
// }
//
// export default Project;
