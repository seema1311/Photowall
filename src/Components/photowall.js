import React from 'react';
import Photo from './photo' ;
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
function Photowall(props){ console.log("inside photowall")
    return (<div><div><Link to = "/AddPhoto" className="addIcon" ></Link></div>
        <div className="photoGrid">
    {props.posts.sort(function(x,y){ return y.id-x.id}).map((post,index) => <Photo key={post.id} post={post} index={index} {...props} />)}
    </div></div>)
}
Photowall.propType ={
    posts: PropTypes.array.isRequired,
    //onRemovePhoto: PropTypes.func.isRequired,
 }
// class Photowall extends Component{
//     constructor(props) {
//         super(props);
    
//         console.log(this.props)
//     }
//        render()
//       {
//          return (<div className="photoGrid">
//          {this.props.posts.map((post,index) => <Photo key={index} post={post} />)}</div>)
//       }
// }
export default Photowall