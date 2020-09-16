import{INCREMENT,DECREMENT,RESET} from "../constantes/actionsType";
const initialState={
    counter:0,
    isVisible:false
}
const counterReduser=(state=initialState,action)=>{
    switch(action.type){
        case INCREMENT :return{...state,counter:state.counter+1};
        case DECREMENT:return{...state,counter:state.counter>0 ? state.counter-1:0};
        case RESET:return{...state,counter:0}
    
    default:return state;}
}
export default counterReduser;