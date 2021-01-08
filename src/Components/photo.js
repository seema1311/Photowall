import React from 'react';
import PropTypes from 'prop-types'
function Photo(props){
    console.log("inside photo")
    const post=props.post;
    return <figure className="figure">
    <img className="photo" src={post.imageLink} alt={post.description}/>
    <figcaption><p>{post.description}</p></figcaption>
    <div className="button-container">
    <button onClick={()=>{props.removePhoto(props.index)}}>Remove</button>
    </div>
    </figure>
}
Photo.propType ={
    post: PropTypes.object.isRequired,
    onRemovePhoto: PropTypes.func.isRequired
 }
// class Photo extends Component{
//     constructor(props) {
//         super(props);
    
//         console.log(this.props)
//     }
// render(){
//     const post=this.props.post;
//     return <figure className="figure">
//     <img className="photo" src={post.imageLink} alt={post.description}/>
//     <figcaption><p>{post.description}</p></figcaption>
//     <div className="button-container">
//     <button className="remove-button">Remove</button>
//     </div>
//     </figure>
// }
//}
export default Photo