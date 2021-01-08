import React, {Component} from 'react';

class AddPhoto extends Component{
    constructor(){
        console.log("Addphoto constructore")
        super()
        this.link = React.createRef();
        this.description = React.createRef();
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    render(){ console.log("addphoto render")
        return (<div>
                   <div className="form">
                   <form onSubmit={this.handleSubmit}>
                   <input type="text" placeholder="Link" ref={this.link}/>
                   <input type="text" placeholder="Description" ref={this.description}/>
                   <button>Submit</button>
                   </form>
                   </div>
                </div>
               )
    }
    handleSubmit(event){
        console.log("handle addphoto called")
         event.preventDefault();
         const imageLink=this.link.current.value;
         const description=this.description.current.value;
         const photo={
             id: Number(new Date()),
             description:description,
             imageLink:imageLink
         }
            if(description&& imageLink){
             this.props.addPhoto(photo)
        
          }
          
    }
}

export default AddPhoto;