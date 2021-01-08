import React, {Component} from 'react';
//import ReactDOM from 'react-dom'
import Title from './Title'
import Photowall from './photowall'
import AddPhoto from './AddPhoto'
import {Route} from 'react-router-dom'
import { Link } from 'react-router-dom';
//import MyList from '../../playground/MyList'

class Main extends Component{
        constructor(props) {
                super(props);
                console.log("MAin constructor")
                
                // this.removePhoto=this.removePhoto.bind(this)
                // this.addPhoto=this.addPhoto.bind(this)
                // console.log("constructor")
        }
        // componentDidMount(){
                
        //         this.props.removePhoto(1)
        // }
//    removePhoto(postRemoved){
//            console.log(postRemoved.description);
//            this.setState((state)=> ({
//                    posts : state.posts.filter(post => post != postRemoved)
//            }))
// }
//    addPhoto(posSubmitted){
           
//         this.setState((state)=> 
//         {posts : state.posts.push(posSubmitted)
//                 console.log(state.posts);
//         })
//    }
//    navigate(){
//         this.setState({
//                 screen:'addPhoto'
//         })
// }
   componentWillMount(){
        console.log("WillMount")
   }
   componentDidMount(){
           console.log("didMount")
           //this.props.removePhoto(1)
   }
   
   componentDidUpdate(){
           console.log("DidUpdate")
   }
   render()
  {       console.log("Main render")
          console.log(this.props.posts)
     return (<div>
             <Title title="title" />
             <h1><Link to="/" >Photowall</Link></h1>
             <Route exact path ="/" render= {()=> (
             <div>
            <Photowall { ...this.props } />
             </div>)}/>
              <Route exact path="/AddPhoto" render = {() =>(
              <div>
              <AddPhoto {...this.props}  />
             </div>)}/>
             </div>)
    }
    
}

export default Main