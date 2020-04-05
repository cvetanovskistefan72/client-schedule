
 
 export const CreateClient =(client)=>{
    
    return(dispatch,getState,{getFirebase,getFirestore})=>{
        // make async call to database
        const firestore= getFirestore();
        console.log(getState())
        const authorId = getState().firebase.auth.uid
        const users = getState().firestore.data.users
        const author = users?users[authorId] :null
        
        firestore.collection('clients').add({
            ...client,
            author:author.firstname + " " +author.lastname
           
            

        }).then(()=>{
            dispatch({type:'ADD_CLIENT',client:client});
        })
     
    }
}





