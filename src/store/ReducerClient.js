
const initState={
    clients:[
      

       
    ],
    
}

const ReducerClient =(state=initState,action)=>{
    switch(action.type){
        case'ADD_CLIENT':
        return state;

       
        
        default:
            return state;
    }
    
}
export default ReducerClient;