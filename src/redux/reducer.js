import _posts from '../data/posts'
//the name of the function should be same as the name of the state
const postReducer=function posts(state =_posts , action){
      console.log(`reducer call with ${action.type}`);
    // return state
     switch(action.type){
         case 'REMOVE-PHOTO': return [...state.slice(0, action.index), ...state.slice(action.index+1)]
         case 'ADD-PHOTO': return [action.post, ...state]
         default: return state
     }

}

export default postReducer