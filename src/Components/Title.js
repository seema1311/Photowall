import React from 'react';
import PropTypes from 'prop-types'
//import ReactDOM from 'react-dom'
function Title(props){
   console.log("inside title")
   return(<h1>{props.title}</h1>)
}
Title.propTypes ={
   title: PropTypes.string.isRequired,
    }
// class Title extends Component{
//    constructor(props) {
//       super(props);
  
//       console.log(this.props)
//   }
//      render()
//     {
//        return (<h1>{this.props.title}</h1>)
//     }
// }

export default Title