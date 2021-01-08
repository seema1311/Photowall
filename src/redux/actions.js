 
 export function removePhoto(index){
    console.log("remove called")
     return { type : 'REMOVE-PHOTO',
            index: index
            }
 }
  export function addPhoto(post){
    console.log("addphoto called")
      return { type :'ADD-PHOTO',
               post : post
            }
  }