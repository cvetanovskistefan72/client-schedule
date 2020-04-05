export const signIn=(creds)=>{
    return(dispatch,getState,{getFirebase,getFirestore})=>{
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            creds.email,
            creds.password

        ).then(()=>{
            dispatch({type:"SIGN_IN"})
        }).catch((err)=>{
            dispatch({type:"SIGN_IN_ERROR",err:err})
        })
    }
}

export const signOut=()=>{
    return(dispatch,getState,{getFirebase,getFirestore})=>{
       const firebase= getFirebase();
        firebase.auth().signOut().then(()=>{
            dispatch({type:"SIGN_OUT"})
        })
        
    }
}


export const signUp=(creds)=>{

    return(dispatch,getState,{getFirebase,getFirestore})=>{
        const firebase=getFirebase();
        const firestore=getFirestore();
        firebase.auth().createUserWithEmailAndPassword(creds.email, creds.password).then((resp)=>{
            console.log(creds.firstname)
            return firestore.collection('users').doc(resp.user.uid).set({
                
                firstname:creds.firstname,
                lastname:creds.lastname,
                initials:creds.firstname[0] + creds.lastname[0]
            })
        }).then(()=>{
            dispatch({type:"SIGN_UP"})
        }).catch((err) =>{
           dispatch({type:"SIGN_UP_ERROR",err})
          });
    }
}