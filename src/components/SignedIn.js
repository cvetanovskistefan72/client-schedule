import React from 'react'
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux';
import {signOut} from '../store/AuthAction'
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

const  SignedIn=(props)=> {
  const {userInitials} = props
 

    
    return (
      <ul className="right">
            <li> <NavLink to="/create">Add Clinet</NavLink>
            </li>
            <li><a onClick={props.signOut}>Log out</a></li>
            <li><NavLink to="/"><button className="btn btn-floating z-depth-0">{userInitials?userInitials.initials:null}</button></NavLink></li>
      </ul>
    )
}


//3dwhu5wV12dn4EMMiT8GGuizV4p1
const mapDispatchToProps=(dispatch)=>{
  return{
    signOut:()=>dispatch(signOut())
  }
}

const mapStateToProps=(state)=>{
  const users = state.firestore.data.users
  const uid = state.firebase.auth.uid
  const user= users ? users[uid]:null

return{
  userInitials:user
}
}

export default compose(
  connect(mapStateToProps,mapDispatchToProps),
  firestoreConnect([
    {collection:'users'}
  ])
)(SignedIn);
