
const initState={
    authError:null,
    authError2:null
}

const ReducerAuth =(state=initState,action)=>{
    switch(action.type){

        case "SIGN_IN_ERROR":
           console.log('login failed')
            return{
                ...state,
                authError:'Loading error'
            }

        case "SIGN_IN":
            return{
                ...state,
                authError:null
            };
        case "SIGN_OUT":
            return state;
        case "SIGN_UP":
            return {
                ...state,
                authError2:null
            }
        case "SIGN_UP_ERROR":
            return{
                ...state,
                authError2:action.err.message
            }
        
        default:
            return state;
    }
}


export default ReducerAuth;